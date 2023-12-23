import { CoffeeList } from '../../components/CoffeeList'
import { IntroHome } from './components/MainHome'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <IntroHome />
      <CoffeeList />
    </HomeContainer>
  )
}
