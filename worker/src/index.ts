import { AwsClient } from "aws4fetch";

export interface Env {
  AWS_ACCESS_KEY_ID: string;
  AWS_SECRET_ACCESS_KEY: string;
  SES_FROM_EMAIL: string;
  SES_TO_EMAIL: string;
}

const AWS_REGION = "us-east-1";
const SES_ENDPOINT = `https://email.${AWS_REGION}.amazonaws.com/v2/email/outbound-emails`;

interface ContactBody {
  name: string;
  email: string;
  phone?: string;
  spaceType?: string;
  projectStage?: string;
  spaceSize?: string;
  budget?: string;
  message?: string;
}

function buildEmailHtml(data: ContactBody): string {
  const rows = [
    ["Name", data.name],
    ["Email", data.email],
    data.phone ? ["Phone", data.phone] : null,
    data.spaceType ? ["Space type", data.spaceType] : null,
    data.projectStage ? ["Project stage", data.projectStage] : null,
    data.spaceSize ? ["Space size", data.spaceSize] : null,
    data.budget ? ["Budget", data.budget] : null,
  ]
    .filter((r): r is [string, string] => r !== null)
    .map(([label, value]) => `<tr><td style="padding:4px 12px 4px 0;font-weight:600;white-space:nowrap">${label}</td><td style="padding:4px 0">${value}</td></tr>`)
    .join("");

  const messageSection = data.message
    ? `<p style="margin-top:20px;white-space:pre-wrap">${data.message}</p>`
    : "";

  return `<!DOCTYPE html><html><body style="font-family:sans-serif;color:#111;max-width:600px">
<h2 style="margin-bottom:16px">New enquiry via haygrid.com</h2>
<table style="border-collapse:collapse">${rows}</table>
${messageSection}
</body></html>`;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    if (request.method !== "POST") {
      return new Response("Method not allowed", { status: 405 });
    }

    let body: ContactBody;
    try {
      body = await request.json() as ContactBody;
    } catch {
      return new Response(JSON.stringify({ error: "Invalid JSON" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const { name, email } = body;
    if (!name?.trim() || !email?.trim()) {
      return new Response(JSON.stringify({ error: "name and email are required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const aws = new AwsClient({
      accessKeyId: env.AWS_ACCESS_KEY_ID,
      secretAccessKey: env.AWS_SECRET_ACCESS_KEY,
      region: AWS_REGION,
      service: "ses",
    });

    const sesPayload = {
      FromEmailAddress: env.SES_FROM_EMAIL,
      Destination: { ToAddresses: [env.SES_TO_EMAIL] },
      ReplyToAddresses: [email],
      Content: {
        Simple: {
          Subject: { Data: `New enquiry from ${name}` },
          Body: { Html: { Data: buildEmailHtml(body) } },
        },
      },
    };

    const sesResponse = await aws.fetch(SES_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(sesPayload),
    });

    if (!sesResponse.ok) {
      const detail = await sesResponse.text();
      console.error("SES error", sesResponse.status, detail);
      return new Response(JSON.stringify({ error: "Failed to send email" }), {
        status: 502,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  },
};
