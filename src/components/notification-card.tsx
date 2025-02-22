'use client'

import { useEffect, useState } from 'react'

interface NotificationCardProps {
  message: string
}

export default function NotificationCard({ message }: NotificationCardProps) {
  const [visible, setVisible] = useState(false)

  const showNotification = () => {
    setVisible(true)
    setTimeout(() => setVisible(false), 10000) // Esconde a notificação após 4 segundos
  }

  return (
    <div
      className={`absolute bottom-12 left-12 max-w-max p-5 rounded bg-gray-900 text-white shadow-lg transform transition-all duration-500 ease-in-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <p>{message}</p>
      <span className="absolute left-1 bottom-1 w-[calc(100%-10px)] h-1.5 bg-gradient-to-r from-blue-400 to-blue-600 rounded transform origin-left scale-x-0 animate-load" />
    </div>
  )
}
