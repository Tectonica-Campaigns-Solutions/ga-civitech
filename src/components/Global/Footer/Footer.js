import React from 'react'
import { useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"
import Link from '../Link'
import "./index.scss"

function Footer() {
  
  const footer = useStaticQuery(graphql`
    query footer {
      menuFooter:datoCmsNavigation(codeId: {eq: "footer_menu"}){
        ...Navigation
      }
      social:datoCmsNavigation(codeId: {eq: "social"}){
        ...Navigation
      }
      menuLegal:datoCmsNavigation(codeId: {eq: "menu_legal"}){
        ...Navigation
      }
      certified: datoCmsGlobalSetting(codeId: {eq: "logo_certified"}){
        image{
          url
        }
      }
      copyright: datoCmsGlobalSetting(codeId: {eq: "copyright_footer"}){
        value
      }
    }
  `)

  return (
    <footer id="main-footer">
      <div className="container">
        <div className="row">
          
          {
             footer.menuFooter.navigationItems.map(item => {    
              console.log(item)         
              return( 
                <div className="col-lg-4" key={item.id}>
                  { item.label && (<h3>{item.label}</h3>) }
                  { item.mainLink && (<Link to={item.mainLink} className={item.isButton ? 'btn' : ''}>{item.label ? item.label : item.mainLink.label }</Link>)}
                  { item.links && item.links.length > 0 && (<ul>
                    {
                   
                      item.links.map(link => (<li key={link.id}><Link to={link}>{link.label}</Link></li>))
                    }
                  </ul>) }

                </div> )
             }) 
          }
        </div>
      </div> 
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-3">
            <img src={footer.certified.image.url} alt="" />
          </div>
          <div className="col">
            <div className="row">
              <div className="col">{footer.copyright.value}</div>
              {
                footer.menuLegal.navigationItems.map(item => {
                  return (<div className="col" key={item.id}><Link to={item.mainLink}>{item.label}</Link></div>)
                })
              }
            </div>
            
          </div>
          <div className="col-lg-3">
            <ul>
              {
                footer.social.navigationItems.map(item => {
                  return( <li key={item.id}><Link to={item.mainLink} target="_blank"><img src={item.icon.url}/></Link></li> )
                }) 
              }
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer