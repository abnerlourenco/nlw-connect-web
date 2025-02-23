import { Copy } from 'lucide-react'
import type { ComponentProps } from 'react'

interface NotificationCardProps extends ComponentProps<'div'> {
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
  ...props
}: NotificationCardProps) {
  return (
    <div
      data-visible={visible}
      className="absolute flex items-center justify-between gap-2 flex-row bottom-12 right-12 max-w-[400px] p-5 rounded bg-blue shadow-lg transform transition-all duration-500 ease-in-out data-[visible=true]:opacity-100 data-[visible=true]:translate-y-0 data-[visible=false]:opacity-0 data-[visible=false]:translate-y-8"
      {...props}
    >
      <Copy className="size-5 text-gray-900" />
      <p className="text-gray-800 font-heading font-semibold">{message}</p>
      <span className="absolute left-1 bottom-1 w-[calc(100%-10px)] h-1.5 bg-gradient-to-r from-purple to-gray-600 rounded transform origin-left scale-x-0 animate-load" />
    </div>
  )
}
