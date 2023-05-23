// import Image from 'next/image'
import { NextRequest } from 'next/server'

import dayjs from 'dayjs'
import ptBr from 'dayjs/locale/pt-br'

dayjs.locale(ptBr)

export default function ChosenMemory(request: NextRequest) {
  return <h1>ChosenMemory</h1>
}
