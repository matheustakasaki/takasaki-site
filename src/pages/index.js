import * as React from "react"
import { Greeting } from "../components/Greeting";
import '@fontsource/inter'
import '@fontsource/inter/700.css'
import { Social } from "../components/Social";
import './style.css'
// styles
// data
// markup
const IndexPage = () => {
  return (

    <main className='content'>

      <title>Home Page</title>
      <GlobalStyle />
      <section className='mainSection'>
        <Greeting greeting='Hi! I am Matheus Takasaki' />
      </section>
      <section className='socialSection'>
      <Social></Social>
      </section>
    </main>
  )
}

export default IndexPage
