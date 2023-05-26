import Link from 'next/link'
import Image from 'next/image'
import { cookies } from 'next/headers'

import { ChevronLeft } from 'lucide-react'

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

  return (
    <>
      <div className="flex flex-1 flex-col gap-4 px-10 py-10">
        <Link
          href="/"
          className="flex items-center gap-1 text-sm text-gray-200 hover:text-gray-100"
        >
          <ChevronLeft className="h-4 w-4" />
          voltar à timeline
        </Link>
        <Image
          src={
            response.data.coverUrl
              ? response.data.coverUrl
              : 'https://imagens.usp.br/wp-content/uploads/Campus-15-Foto-Marcos-Santos20101220_066.jpg'
          }
          alt=""
          width={592}
          height={280}
          className="aspect-video w-full rounded-lg object-cover"
        />
        <p className="text-lg leading-relaxed text-gray-100">
          {response.data.content}
        </p>
      </div>
    </>
  )
}
