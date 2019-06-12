import React, { useEffect, useState, useContext } from 'react'
import Head from '../components/HeadHtml'
import FooterScript from '../components/FooterScript'
import Navbar from '../components/Navbar'
import Home from '../components/Home'
import About from '../components/About'
import Service from '../components/Service'
import Skills from '../components/Skills'
import Expriences from '../components/Expriences'
import Portfolio from '../components/Portfolio'
import Quates from '../components/Quates'
import Blog from '../components/Blog'
import Contact from '../components/Contact'

const myContext = React.createContext(null)
const initialState = {
  loading: true
}

const RenderLoading = () => {
  const isloading = useContext(myContext)
  return isloading ? (
    <div className="section-loader">
      <div className="loader">
        <div></div>
        <div></div> 
      </div>
    </div>
  ) : null
}

const App = () => {
  const [state, setState] = useState(initialState)
  useEffect(() => {
    document.body.className ="white-vertion black-bg"
  },[])

  useEffect(() => {
    if(document.readyState === "complete"){
      setState({...state, loading: false})
    }
  }, state.loading)

  return (
    <myContext.Provider value={state.loading}>
        <Head title="Home" />
        {/* <div className="section-loader">
          <div className="loader">
            <div></div>
            <div></div> 
          </div>
        </div> */}
        <RenderLoading/>
        <Navbar/>
        <Home/>
        <About/>
        <Service/>
        <Skills/>
        <Expriences/>
        <Portfolio/>
        <Blog/>
        <Quates/>
        <Contact/>
        <FooterScript/>
    </myContext.Provider>
  )
}

export default App
