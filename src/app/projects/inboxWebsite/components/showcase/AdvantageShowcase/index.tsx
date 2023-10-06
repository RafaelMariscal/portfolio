import { BarChartHorizontalBig } from 'lucide-react'
import Advantage from './Advantage'

const adv = {
  icon: BarChartHorizontalBig,
  text: 'Customização dos serviços oferecidos conforme as necessidades, atendendo 24/7.',
}

export default function AdvantageShowcase() {
  return (
    <div className="bg-gray-100 p-[.125rem]">
      <Advantage.Root key={adv.text}>
        <Advantage.Icon>
          <adv.icon size={22} color="#f6e68f" strokeWidth="2" />
        </Advantage.Icon>
        <Advantage.Text>{adv.text}</Advantage.Text>
      </Advantage.Root>
    </div>
  )
}
