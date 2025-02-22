'use client'

import { Copy } from 'lucide-react'

interface NotificationCardProps {
  message: string
  visible: boolean
}

export function showNotification(setVisible: (visible: boolean) => void) {
  setVisible(true)
  setTimeout(() => setVisible(false), 4000)
}

export default function NotificationCard({
  message,
  visible,
}: NotificationCardProps) {
  return (
    <div
      className={`absolute flex items-center justify-between gap-2 flex-row bottom-12 right-12 max-w-[400px] p-5 rounded bg-blue shadow-lg transform transition-all duration-500 ease-in-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <Copy className="size-5 text-gray-900" />
      <p className="text-gray-800 font-heading font-semibold">{message}</p>
      <span className="absolute left-1 bottom-1 w-[calc(100%-10px)] h-1.5 bg-gradient-to-r from-purple to-gray-600 rounded transform origin-left scale-x-0 animate-load" />
    </div>
  )
}
