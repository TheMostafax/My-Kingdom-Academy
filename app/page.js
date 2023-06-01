import Head from 'next/head'
import About from './pages/About'
import Contact from './pages/Contact'
import Main from './pages/Main'
import Course from './pages/Course'
import Footer from './components/footer'
import Navbar from './components/Navbar'
import Service from './pages/service'
import Staff from './pages/staff'
import Student from './pages/student'
export default function Home() {
  return (
    <div>
    <Navbar/>
    <Main />
    <About />
    <Staff/>
    <Service/>
    <Course />
    <Contact />
    <Student />
    <Footer/>
    </div>
  )
}
