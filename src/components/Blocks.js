import React from 'react';
import NarrativeBlock from './Blocks/NarrativeBlock/NarrativeBlock';
import GridStat from './Blocks/GridStat/GridStat';
import Tabs from './Blocks/Tabs/Tabs';
import TextHubsportForm from './Blocks/TextHubspotForm/TextHubsportForm';
import Logos from './Blocks/Logos/Logos';
import LatestPost from './Blocks/LatestPost/LatestPost';
import ListMembers from './Blocks/ListMembers/ListMembers';
import RelatedProduct from './Blocks/RelatedProduct/RelatedProduct';
import BlogPostList from './Blocks/BlogPostList/BlogPostList';
import BasicAccordion from './Blocks/BasicAccordion/BasicAccordion';
import IframeEmbed from './Blocks/IframeEmbed/IframeEmbed';
import VideoEmbed from './Blocks/VideoEmbed/VideoEmbed';
import ListContent from './Blocks/ListContent/ListContent';
import TextColumn from './Blocks/TextColumn/TextColumn';

export default function Blocks({ blocks, usePrimaryHeading = false, location = null }) {
  return (
    <>
      {blocks.map(block => {
        switch (block.__typename) {
          case 'DatoCmsNarrativeBlock':
            return <NarrativeBlock block={block} key={block.id} usePrimaryHeading={usePrimaryHeading} />;
          case 'DatoCmsGridStat':
            return <GridStat block={block} key={block.id} />;
          case 'DatoCmsTab':
            return <Tabs block={block} key={block.id} />;
          case 'DatoCmsTextHubspotForm':
            return <TextHubsportForm block={block} key={block.id} />;
          case 'DatoCmsLogosBlock':
            return <Logos block={block} key={block.id} />;
          case 'DatoCmsLatestPost':
            return <LatestPost block={block} key={block.id} />;
          case 'DatoCmsListMember':
            return <ListMembers block={block} key={block.id} />;
          case 'DatoCmsRelatedProduct':
            return <RelatedProduct block={block} key={block.id} />;
          case 'DatoCmsBlogPost':
            return <BlogPostList block={block} key={block.id} topics={block.tagsToFilter} location={location} />;
          case 'DatoCmsAccordion':
            return <BasicAccordion block={block} key={block.id} />;
          case 'DatoCmsVideoEmbed':
            return <VideoEmbed block={block} key={block.id} />;
          case 'DatoCmsIframeEmbed':
            return <IframeEmbed block={block} key={block.id} />;
          case 'DatoCmsListContent':
            return <ListContent block={block} key={block.id} />;
          case 'DatoCmsTextColumn':
            return <TextColumn block={block} key={block.id} />;
          default:
            return null;
        }
      })}
    </>
  );
}
