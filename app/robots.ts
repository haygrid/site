import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  if (process.env.ROBOTS_NOINDEX === 'true') {
    return {
      rules: { userAgent: '*', disallow: '/' },
    }
  }
  return { rules: [] }
}
