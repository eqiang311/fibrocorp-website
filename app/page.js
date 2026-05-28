import Navbar from './components/Navbar'
import Hero from './components/Hero'
import StatsBar from './components/StatsBar'
import Validation from './components/Validation'
import Economics from './components/Economics'
import HowItWorks from './components/HowItWorks'
import Products from './components/Products'
import Qualifier from './components/Qualifier'
import History from './components/History'
import Mission from './components/Mission'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <StatsBar />
      <Validation />
      <Economics />
      <HowItWorks />
      <Products />
      <Qualifier />
      <History />
      <Mission />
      <CTA />
      <Footer />
    </main>
  )
}
