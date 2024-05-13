'use client'

import { useState } from 'react'
import Button from './components/button'
import { formatTime } from './utils'

const getTime = () => {
  return formatTime(new Date())
}

export default function Home() {
  const [time, setTime] = useState<string>(getTime())
  const [otherTime, setOtherTime] = useState<string>('')

  return (
    <div className="m-6">
      <p>Long King</p>
      <div>
        <span suppressHydrationWarning>{time}</span>
        <Button className="mx-2 my-2" onClick={() => setTime(getTime())}>
          Refresh Clock
        </Button>
      </div>
      <div>
        {otherTime && otherTime}
        <Button
          className="mx-2 my-2 bg-green-100"
          onClick={() => {
            setOtherTime(getTime())
          }}
        >
          Create Clock
        </Button>
      </div>
    </div>
  )
}
