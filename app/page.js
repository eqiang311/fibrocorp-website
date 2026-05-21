import Navbar from './components/Navbar'
import Hero from './components/Hero'
import StatsBar from './components/StatsBar'
import History from './components/History'
import Products from './components/Products'
import Validation from './components/Validation'
import Mission from './components/Mission'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <StatsBar />
      <History />
      <Products />
      <Validation />
      <Mission />
      <CTA />
      <Footer />
    </main>
  )
}