import React from 'react'
import NarrativeBlock from './Blocks/NarrativeBlock/NarrativeBlock'
import GridStat from './Blocks/GridStat/GridStat'
import Tabs from './Blocks/Tabs/Tabs'
import TextHubsportForm from './Blocks/TextHubspotForm/TextHubsportForm'
import Logos from './Blocks/Logos/Logos'
import LatestPost from './Blocks/LatestPost/LatestPost'

export default function Blocks({ blocks }) {
  return (
    <>
      {
        blocks.map(block => {
          switch (block.__typename) {
            case 'DatoCmsNarrativeBlock':
              return <NarrativeBlock block={block} key={block.id} />
            case 'DatoCmsGridStat':
              return <GridStat block={block} key={block.id} />
            case 'DatoCmsTab':
              return <Tabs block={block} key={block.id} />
            case 'DatoCmsTextHubspotForm':
              return <TextHubsportForm block={block} key={block.id} />
            case 'DatoCmsLogosBlock':
              return <Logos block={block} key={block.id} />
            case 'DatoCmsLatestPost':
              return <LatestPost block={block} key={block.id} />
            default:
              return ''
          }
        })
      }
    </>
  )
}
