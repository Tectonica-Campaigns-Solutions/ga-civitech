import React from 'react'
import CtaList from '../Cta/CtaList'
import Shortcut from '../Shortcut/Shortcut';
import ImageWrapper from '../../Slider/ImageWrapper';

import "./index.scss";

function Hero({ ctas, title, content, image, shortcuts, titleShortcuts }) {
  return (
    <div className="hero pt-5 pb-3">
      <div className="container">
        <div className="row align-items-center pt-5">
          <div className="col-lg-6">
            <h1>{title}</h1>
            <span>{content}</span>
            {
              ctas && (
                <div className="ctas">
                  <CtaList ctas={ctas} />
                </div>
              )
            }
          </div>

          {
            image && (
              <div className="col-lg-6">
                <ImageWrapper image={image} />
              </div>
            )
          }
        </div>

        {shortcuts && shortcuts.length > 0 &&
          <div className="row mt-5 mb-5 shortcuts-container">
            <div className="col-lg-12">
              <h4>{titleShortcuts}</h4>
            </div>

            {
              shortcuts.map((item, index) => {
                return (
                  <div className="col-lg-4">
                    <Shortcut
                      key={index}
                      title={item.title}
                      description=""
                      btnLabel="Learn more"
                      btnUrl={item.slug}
                    />
                  </div>
                )
              })
            }
          </div>
        }
      </div>
    </div>
  )
}

export default Hero