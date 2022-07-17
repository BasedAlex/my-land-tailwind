import React, { useState } from 'react'
import './App.css'
import About from './Components/About/About'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Renting from './Components/Renting/Renting'
import Modal from './UI/Modal/Modal'

function App() {
    const [modalActive, setModalActive] = useState(false)
    return (
        <>
            <Header />
            <About />
            <Renting />
            <Footer />
            <Modal active={modalActive} setActive={setModalActive} />
        </>
    )
}

export default App
