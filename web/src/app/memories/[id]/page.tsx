import { cookies } from 'next/headers'

import dayjs from 'dayjs'
import ptBr from 'dayjs/locale/pt-br'

import { api } from '@/lib/api'

dayjs.locale(ptBr)

export default async function ChosenMemory(request: any) {
  const { id } = request.params

  const token = cookies().get('token')?.value

  const response = await api.get(`/memories/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  if (!response) return <h1>Memory not found</h1>

  return <h1>{JSON.stringify(response.data)}</h1>
}
