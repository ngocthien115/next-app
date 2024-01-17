const imgHost = 'http://localhost:5050/upload'

type ImageResponse = {
  status: number,
  message: string,
  image_url?: string
}

export const upload = async (formData: FormData): Promise<ImageResponse> => {
  const res = await fetch(imgHost, {
    method: 'POST', body: formData
  })

  if (!res || res.status !== 200) return { status: 400, message: 'Image server can not reach!' }

  const returnData: ImageResponse = Object.assign({}, await res.json())

  return {
    ...returnData,
    status: res.status,
  }
}