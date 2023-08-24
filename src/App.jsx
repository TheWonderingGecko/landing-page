import Nav_Bar from './components/Nav_Bar'
import Hero_section from './components/sections/Hero_section'
import Features_section from './components/sections/Features_section'
import More_info_sections from './components/sections/More_info_sections'
import Extensions_section from './components/sections/Extensions_section'
import Questions_sections from './components/sections/Questions_sections'
import Contact_Sections from './components/sections/Contact_Sections'
import Footer_Section from './components/sections/Footer_Section'

function App() {
  return (
    <div className="flex flex-col items-center justify-center w-screen p-4 pb-0 overflow-hidden text-center font-rubik ">
      <Nav_Bar />

      <main className="flex flex-col items-center justify-center w-full h-full gap-20">
        <Hero_section />
        <Features_section />
        <More_info_sections />
        <Extensions_section />
        <Questions_sections />
        <Contact_Sections />
      </main>
      <Footer_Section />
    </div>
  )
}

export default App
