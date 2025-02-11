import { 
  Hero, 
  Offerings, 
  UseCases, 
  Developments, 
  News, 
  WhoWeAre,
  Team,
  Mentors, 
  Presence, 
  Philosophy 
} from '../components/home'
import { Container } from '../components/shared'
import Contact from './Contact'

const Home = () => {
  return (
    <div className="min-h-screen">
      <div id="hero">
        <Hero />
      </div>
      <div id="who-we-are">
        <WhoWeAre />
      </div>
      <div id="offerings">
        <Offerings />
      </div>
      <div id="use-cases">
        <UseCases />
      </div>
      <div id="developments">
        <Developments />
      </div>
      <div id="news">
        <News />
      </div>
      <div id="team">
        <Team />
      </div>
      <div id="mentors">
        <Mentors />
      </div>
      <div id="presence">
        <Presence />
      </div>
      <div id="philosophy">
        <Philosophy />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  )
}

export default Home 