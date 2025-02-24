import Image from 'next/image'

import { getRanking } from '@/http/api'
import cooper from '../../../assets/medal-cooper.svg'
import gold from '../../../assets/medal-gold.svg'
import silver from '../../../assets/medal-silver.svg'

export async function Ranking() {
  const { ranking } = await getRanking()

  return (
    <div className="w-full max-w-[440px] space-y-5">
      <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
        Ranking de indicações
      </h2>

      <div className="space-y-4">
        <div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold">1°</span> | {ranking[0].name}
          </span>

          <span className="font-heading font-semibold text-gray-2 leading-none">
            {ranking[0].score}
          </span>

          <Image src={gold} alt="" className="absolute top-0 right-8" />
        </div>
      </div>
      <div className="space-y-4">
        <div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold">2°</span> | {ranking[1].name}
          </span>

          <span className="font-heading font-semibold text-gray-2 leading-none">
            {ranking[1].score}
          </span>

          <Image src={silver} alt="" className="absolute top-0 right-8" />
        </div>
      </div>
      <div className="space-y-4">
        <div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold">3°</span> | {ranking[2].name}
          </span>

          <span className="font-heading font-semibold text-gray-2 leading-none">
            {ranking[2].score}
          </span>

          <Image src={cooper} alt="" className="absolute top-0 right-8" />
        </div>
      </div>
    </div>
  )
}
