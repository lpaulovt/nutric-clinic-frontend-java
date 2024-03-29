'use client'

import axios from '../axios'
import { signIn, useSession } from 'next-auth/react'

export const useRefreshToken = () => {
  const { data: session } = useSession()

  const refreshToken = async () => {
    const res = await axios.post('/api/token/refresh/', {
      refresh: session?.refresh,
    })

    if (session) session.access = res.data.accessToken
    else signIn()
  }
  return refreshToken
}
