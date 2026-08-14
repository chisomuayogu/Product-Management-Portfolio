import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import SelectedWork from '@/components/SelectedWork'
import AboutPreview from '@/components/AboutPreview'
import HowIWork from '@/components/HowIWork'
import ToolsToolkit from '@/components/ToolsToolkit'
import EarlierWork from '@/components/EarlierWork'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="bg-ivory">
      <Navigation />
      <Hero />
      <SelectedWork />
      <AboutPreview />
      <HowIWork />
      <ToolsToolkit />
      <EarlierWork />
      <FinalCTA />
      <Footer />
    </div>
  )
}
