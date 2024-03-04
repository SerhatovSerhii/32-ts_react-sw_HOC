import { useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'
import { defaultHero } from './utils/constants'
import { SWContext } from './utils/context'

function App() {
const [hero, setHero] = useState<any>(defaultHero)
  return (
    <div className="container-fluid">
      <SWContext.Provider value = {{ hero, changeHero: setHero}}>
        <Header />
        <Main />
      
      </SWContext.Provider>
      
      <Footer />
    </div>
  )
}

export default App
