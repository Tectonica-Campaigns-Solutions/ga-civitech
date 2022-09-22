import React from 'react'
import Cta from '../Cta/Cta'

function Hero({ctas}) {
  return (
    <div className="hero">
      <div className="container">
        <div className="row">
          <div className="col">
            Hero
            {
              ctas.map(item => <Cta url='https://www.google.es' label="cta" />)
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero