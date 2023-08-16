import Header from '../components/Header'
import Banners from '../components/Banners'
import VideoSection from '@/components/Videosection'

export default function Home() {
  return (
    <main >
      <Banners />
      <Header />
            {/* SVG pour l'effet de vague */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#0099ff" fill-opacity="1" d="M0,96L48,106.7C96,117,192,139,288,138.7C384,139,480,117,576,122.7C672,128,768,160,864,154.7C960,149,1056,107,1152,117.3C1248,128,1344,192,1392,224L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>

     <VideoSection />
    </main>
  )
}
