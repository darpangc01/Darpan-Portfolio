import Navbar from './components/Navbar'
import Hero from './pages/Hero'
import About from './pages/About'
import Skills from './pages/Skills'
import Passion from './pages/Passion'
import Contact from './pages/Contact'
import data from './data/portfolio.json'

export default function App() {
  return (
    <>
      <Navbar name={data.identity.name} initials={data.identity.initials} />
      <main>
        <Hero identity={data.identity} />
        <About identity={data.identity} />
        <Skills skills={data.skills} />
        <Passion passions={data.passions} />
        <Contact contact={data.contact} identity={data.identity} />
      </main>
    </>
  )
}
