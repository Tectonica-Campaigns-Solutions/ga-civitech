import React from 'react'
import Cta from '../Cta/Cta'
import { GatsbyImage } from "gatsby-plugin-image"
import Shortcut from '../Shortcut/Shortcut';

import "./index.scss";

function Hero({ ctas, title, content, image, shortcuts }) {

  // TODO: Just for testing purposes
  content = "Civitech builds the technology infrastructure that helps Democratic political candidates win, progressive social causes succeed, and local governments better serve their community to create a fairer, more equitable democracy.";
  ctas = [{ slug: "/", title: "Explore our Solutions", isPrimary: false }, { slug: "/", title: "Let’s talk", isPrimary: true }];
  shortcuts = [
    {
      title: "Advocacy and Non Profits", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", btnLabel: "Learn more ›", btnUrl: "/"
    },
    {
      title: "Campaigns and Candidates", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", btnLabel: "Learn more ›", btnUrl: "/"
    },
    {
      title: "PACs and Party Committees", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", btnLabel: "Learn more ›", btnUrl: "/"
    }
  ];


  return (
    <div className="hero pt-5 pb-3">
      <div className="container">
        <div className="row align-items-center pt-5">
          <div className="col-lg-6">
            <h1>{title}</h1>
            <span>{content}</span>
            <div className="ctas-block">
              {
                ctas?.map(cta => <Cta key={cta.id} url={cta.slug} label={cta.title} isPrimary={cta.isPrimary} />)
              }
            </div>
          </div>
          {
            image && (
              <div className="col-lg-6">
                <GatsbyImage image={image?.gatsbyImageData} alt={image?.alt} />
              </div>
            )
          }
        </div>

        <div className="row mt-5 mb-5 shortcuts-container">
          <div class="col-lg-12">
            {/* TODO: Get title from DatoCMS? */}
            <h4>WHO WE SERVE</h4>
          </div>

          {
            shortcuts && shortcuts.length > 0 && shortcuts.map(item => {
              return (
                <div class="col-lg-4">
                  <Shortcut
                    title={item.title}
                    description={item.description}
                    btnLabel={item.btnLabel}
                    btnUrl={item.btnUrl}
                  />
                </div>
              )
            })
          }

        </div>
      </div>
    </div>
  )
}

export default Hero