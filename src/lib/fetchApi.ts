import { nextAuthOptions } from '@/app/api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL
async function refreshToken(refreshToken: string) {
  const res = await fetch(BASE_URL + '/auth/refresh', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      refresh: refreshToken,
    }),
  })
  const data = await res.json()
  console.log({ data })

  return data.accessToken
}

export async function AuthGetApi(url: string) {
  const session = await getServerSession(nextAuthOptions)
  console.log('before: ', session?.access)

  let res = await fetch(BASE_URL + url, {
    method: 'GET',
    headers: {
      Authorization: `bearer ${session?.access}`,
    },
  })

  if (res.status === 403) {
    if (session) session.access = await refreshToken(session?.access ?? '')
    console.log('after: ', session?.access)

    res = await fetch(BASE_URL + url, {
      method: 'GET',
      headers: {
        Authorization: `bearer ${session?.access}`,
      },
    })
    return await res.json()
  }

  return await res.json()
}
