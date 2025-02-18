import Button from '@/components/button'
import IconButton from '@/components/icon-button'
import { InputField, InputIcon, InputRoot } from '@/components/input'
import { ArrowRight, Copy, Mail } from 'lucide-react'

export default function Home() {
  return (
    <main>
      <Button>
        Enviar
        <ArrowRight />
      </Button>

      <IconButton>
        <Copy />
      </IconButton>

      <div>
        <InputRoot>
          <InputField placeholder="Digite seu Email..." />

          <InputIcon>
            <Mail className="size-5" />
          </InputIcon>
        </InputRoot>
      </div>
    </main>
  )
}
