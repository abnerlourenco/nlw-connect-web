'use client'

import IconButton from '@/components/icon-button'
import { InputField, InputIcon, InputRoot } from '@/components/input'
import NotificationCard, {
  showNotification,
} from '@/components/notification-card'
import { Copy, Link } from 'lucide-react'
import { useState } from 'react'

interface InviteLinkInputProps {
  inviteLink: string
}

export default function InviteLinkInput({ inviteLink }: InviteLinkInputProps) {
  const [visible, setVisible] = useState(false)

  function copyInviteLink() {
    navigator.clipboard.writeText(inviteLink)
  }

  return (
    <InputRoot>
      <InputIcon>
        <Link className="size-5" />
      </InputIcon>

      <InputField placeholder="" readOnly defaultValue={inviteLink} />

      <IconButton
        className="-mr-2"
        onClick={() => {
          copyInviteLink()
          showNotification(setVisible)
        }}
        aria-label="Copiar link de convite"
      >
        <Copy className="size-5" />
      </IconButton>

      <NotificationCard
        visible={visible}
        message="Copiado na area de transferência!"
      />
    </InputRoot>
  )
}
