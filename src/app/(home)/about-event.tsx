import { Radio } from 'lucide-react'

export default function AboutEvent() {
  return (
    <div className="flex-1 bg-gray-700 border-gray-600 rounded-2xl p-8 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="font-heading font-semibold text-gray-200 text-xl">
          Sobre o evento
        </h2>
        <span className="text-purple font-semibold text-xs flex items-center gap-2">
          <Radio className="size-5" />
          AO VIVO
        </span>
      </div>
      <p className="text-gray-300 leading-relaxed text-sm md:text-base">
        Um evento feito por e para pessoas desenvolvedoras apaixonadas por criar
        soluções inovadoras e compartilhar conhecimento. Vamos mergulhar nas
        tendências mais recentes em desenvolvimento de software, arquitetura de
        sistemas e tecnologias emergentes, com palestras, workshops e
        hackathons.
        <br />
        <br />
        Dias 15 a 17 de março | Das 18h às 21h | Online & Gratuito{' '}
      </p>
    </div>
  )
}
