import React from 'react'
import CtaList from '../../Global/Cta/CtaList'

import "./index.scss"

function Toolset({ toolset }) {
  console.log(toolset)
    return toolset.intro && toolset.headline && (
      <div className="related-toolset">
        <h4>{toolset.intro}</h4>
        <h3>{ toolset.headline}</h3>
        <div
          dangerouslySetInnerHTML={{__html: toolset.description}}
        />
        
          <CtaList ctas={toolset.links} />

      </div>
    )
}

export default Toolset