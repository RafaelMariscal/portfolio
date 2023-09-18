import NavLink from '../NavLink'
import NavigationContent from './NavigationContent'
import NavigationLink from './NavigationLink'
import NavigationLinks from './NavigationLinks'
import NavigationRoot from './NavigationRoot'

const NavigationCompose = {
  Root: NavigationRoot,
  Content: NavigationContent,
  List: NavigationLinks,
  Item: NavigationLink,
  Link: NavLink,
}

export default NavigationCompose
