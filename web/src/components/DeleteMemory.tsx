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
        color="#eb0e0e"
        className="h-4 w-4 hover:cursor-pointer"
        onClick={() => deletingMemory(memoryId)}
      />
    </>
  )
}
