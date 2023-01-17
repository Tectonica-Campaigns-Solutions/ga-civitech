import React, { useState } from 'react';
import { getCtaUrl, isArray } from '../../../../utils';
import MegaMenuCard from '../MegaMenuCard/MegaMenuCard';
import Link from '../../Link/Link';
import Cta from '../../Cta/Cta';

import './index.scss';

const MegaMenu = ({ link }) => {
  const [megaMenuActiveTab, setMegaMenuActiveTab] = useState(0);

  const { links = [], megaMenu = null } = link;

  const megaMenuTabs = megaMenu?.tabs || [];
  const megaMenuActiveContent = megaMenu ? megaMenu.tabs[megaMenuActiveTab] : null;
  const hasRelatedCard = megaMenuActiveContent?.highlightedContent ? true : false;

  const handleOnClickTabItem = newIndex => {
    if (megaMenuTabs) {
      setMegaMenuActiveTab(newIndex);
    }
  };

  return (
    <div className="mega-menu">
      {/* Tabs */}
      <div className="tabs">
        <div className="container tabs-items">
          {isArray(megaMenuTabs)
            ? megaMenuTabs.map((megaLink, index) => (
                <span
                  onClick={() => handleOnClickTabItem(index)}
                  className={`${megaMenuActiveTab === index ? 'active' : ''}`}
                >
                  {megaLink.title}
                </span>
              ))
            : isArray(links)
            ? links.map(link => <Link to={link}>{link.label}</Link>)
            : null}
        </div>
      </div>

      {/* Tab selected content */}
      {!!megaMenu && megaMenuActiveContent && (
        <div className="main-content">
          <div className="container">
            <div className="row">
              {/* Primary content */}
              <div className="col-lg-4 primary-item">
                <h4>{megaMenuActiveContent.title}</h4>
                <div className="description" dangerouslySetInnerHTML={{ __html: megaMenuActiveContent.description }} />

                {megaMenuActiveContent.mainlink && <Cta cta={{ link: megaMenuActiveContent.mainlink }} isButton />}
              </div>

              {/* Secondary content */}
              <div className={hasRelatedCard ? 'col-lg-5' : 'col-lg-8'}>
                <div className="row gy-5">
                  {/* Sub-nav items */}
                  {megaMenuActiveContent.groupLink.map(gLink => (
                    <div className="col-lg-6 sub-nav-items">
                      <h5>{gLink.title}</h5>

                      {isArray(gLink.links) && (
                        <div className="links">
                          {gLink.links.map(link => (
                            <Link to={getCtaUrl(link)}>{link.label}</Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Related card if needed */}
              {hasRelatedCard && (
                <div className="col-lg-3">
                  <MegaMenuCard
                    meta={megaMenuActiveContent.labelHighlight || ''}
                    slug={megaMenuActiveContent.highlightedContent.slug}
                    image={megaMenuActiveContent.highlightedContent.image}
                    model={megaMenuActiveContent.highlightedContent.model}
                    title={megaMenuActiveContent.highlightedContent.title}
                    description={megaMenuActiveContent.highlightedContent.summary}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MegaMenu;
