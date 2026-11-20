export function publicAsset(path: string) {
  return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`
}

export function certificateAlt(title: string, award?: string) {
  return `${title} certificate${award ? ` — ${award}` : ''}`
}
