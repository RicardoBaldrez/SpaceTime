'use client'

import { ReactElement } from 'react'

import { useRouter } from 'next/navigation'

import Cookie from 'js-cookie'

import { Trash2 } from 'lucide-react'

import { api } from '@/lib/api'

type MemoryIDToBeExcluded = {
  memoryId: string
}

export default function DeleteMemory({
  memoryId,
}: MemoryIDToBeExcluded): ReactElement {
  const router = useRouter()

  const token = Cookie.get('token')

  async function deletingMemory(id: string) {
    await api.delete(`/memories/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    router.push('/')
  }

  return (
    <>
      <Trash2
        className="h-4 w-4 transition-colors duration-500 hover:cursor-pointer hover:text-red-900"
        onClick={() => deletingMemory(memoryId)}
      />
    </>
  )
}
