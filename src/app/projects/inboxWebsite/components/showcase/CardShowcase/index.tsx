import KitchenSrc from '@/assets/projects/inboxWebsite/ib-kitchen.jpg'
import { Card } from './Card'

export default function CardShowcase() {
  return (
    <Card.Root>
      <Card.Image src={KitchenSrc} alt="Industrial restaurant's kitchen" />
      <Card.Content>
        <Card.Title>
          Restaurantes <span className="whitespace-nowrap">Empresariais</span>
        </Card.Title>
        <Card.Description>
          A cozinha industrial e o(s) reitório(s) são projetados e implementados
          nas instalações do contratante. Modelo ideal para grandes industrias,
          pois promove a redução dos riscos inerentes ao serviço de alimentação,
          além de ofertar maior qualidade.
        </Card.Description>
      </Card.Content>
    </Card.Root>
  )
}
