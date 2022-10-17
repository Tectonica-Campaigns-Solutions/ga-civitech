import React from 'react'
import NarrativeBlock from './Blocks/NarrativeBlock/NarrativeBlock'
import GridStat from './Blocks/GridStat/GridStat'
import Tabs from './Blocks/Tabs/Tabs'
import TextHubsportForm from './Blocks/TextHubspotForm/TextHubsportForm'

export default function Blocks({blocks}) {
  return (
    <>
      {
        blocks.map(block => {
          switch(block.__typename){
            case 'DatoCmsNarrativeBlock':
              return <NarrativeBlock block={block} key={block.id}/>
            case 'DatoCmsGridStat':
              return <GridStat block={block} key={block.id}/>
            case 'DatoCmsTab':
              return <Tabs block={block.items} key={block.id}/>
            case 'DatoCmsTextHubspotForm':
              return <TextHubsportForm block={block} key={block.id}/>
            default:
              return ''
          }
        })
      }
    </>
  )
}
