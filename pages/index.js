import React, { useEffect, useState, useContext } from 'react'

import Head from '../components/HeadHtml'
import FooterScript from '../components/FooterScript'
import Navbar from '../components/ui/Navbar'
import Home from '../components/ui/Home'
// import About from '../components/ui/About'
import About from '../components/controllers/AboutController'
import Service from '../components/ui/Service'
import Skills from '../components/ui/Skills'
import Expriences from '../components/ui/Expriences'
import Portfolio from '../components/ui/Portfolio'
import Quates from '../components/ui/Quates'
import Blog from '../components/ui/Blog'
import Contact from '../components/ui/Contact'

const myContext = React.createContext(null)
const initialState = {
  loading: true
}

const RenderLoading = () => {
  const isloading = useContext(myContext)
  return isloading ? (
    <div className="section-loader">
      <h3 style={{textDecoration: 'bold'}}>Loading...</h3>
    </div>
  ) : null
}

const App = () => {
  const [state, setState] = useState(initialState)
  useEffect(() => {
    // window.scrollTo(0, 0);
    setState({...state, loading: false})
  },[])

  return (
    <myContext.Provider value={state.loading}>
      <Head title="Home" />
      <RenderLoading/>
      <Navbar/>
      <Home/>
      <About/>
      <Service/>
      <Skills/>
      <Expriences/>
      <Blog/>
      <Quates/>
      <Contact/>
      <FooterScript/>
    </myContext.Provider>
  )
}

export default App
