import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
// get our fontawesome imports


import Header from './component/header/header';
import Button from './component/button/button';
import Cardstack from './component/stack/cardstack';
import Footer from './component/footer/footer';

const App = () => (
  <div className='body'>
    <div className='background'></div>
    <Header />
    <div className='container-main'>
      <section className='main-cover'>
        <h1>
          easy <br />
        access, safe <br />
        banking
      </h1>
        <p>
          Get your daily banking process <br />
        simplified and make quick <br />
        hazzle free
        purchases
      </p>
        <Button href='/' name='Get started' />
      </section>
      <Cardstack/>
    </div>
    <Footer/>
  </div>
)







ReactDOM.render(<App />, document.getElementById('root'));