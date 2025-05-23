import React from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import fotoKaren from "../assets/foto.jpg"
import '../css/Home.css'

const Home = () => {
  const persona={
    nombre:"Karen",
    apellido:"Herrera",
    lenguajes:["HTML ","Css ","Js "],
    otros:["Diseño Gráfico"],
    pasatiempos:["Crossfit","Danzas"],
    foto: fotoKaren,
    mascotas:["Bayron","Baxter","Olivia"]
  }
  return (
    <div className='home'>
      <Header></Header>
      <Main persona={persona}></Main>
      <Footer></Footer>
    </div>
  )
}

export default Home
