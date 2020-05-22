import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import Iframe from 'react-iframe'
import Header from './header'
import Hero from './hero'
import Main from './main'
import Analytics from './analytics'
import Testimonials from './testimonials'
import CallToAction from './call-to-action'
import Footer from './footer'

const Home = () => {
  const [show, setShow] = useState(false)

  const togglePopup = () => setShow(!show)
  // const handleShow = () => setShow(true)

  return (
    <>
      <Header />
      <Hero togglePopup={togglePopup} />
      <Main togglePopup={togglePopup} />
      <Analytics togglePopup={togglePopup} />
      <Testimonials togglePopup={togglePopup} />
      <CallToAction togglePopup={togglePopup} />
      <Footer />
      <Modal show={show} onHide={togglePopup}>
        <Modal.Header closeButton />
        <Modal.Body>
          <Iframe
            url="https://msgsndr.com/widget/form/TYFXOVChQdiQPq7EV3Bo"
            height="400rem"
            width="100%"
            scrolling="no"
            id="TYFXOVChQdiQPq7EV3Bo"
            border="none"
            className="iframe"
            display="initial"
            position="relative"
          />
        </Modal.Body>
      </Modal>
    </>
  )
}
export default Home
