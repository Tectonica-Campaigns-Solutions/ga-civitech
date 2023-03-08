import React, { useEffect, useState, useMemo } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { isArray } from '../../../utils';
import TabTitles from '../Tabs/TabTitles/TabTitles';
import BlogPostTab from './BlogPostTab';
import Pagination, { PAGE_SIZE } from '../../Global/Pagination/Pagination';
import Link from '../../Global/Link/Link';

import './index.scss';

function BlogPostList({ block, topics, location }) {
  const {
    posts: { nodes: blogList },
  } = useStaticQuery(graphql`
    query allPosts {
      posts: allDatoCmsPost(sort: { date: DESC }) {
        nodes {
          id
          date(formatString: "MMM D YYYY")
          title
          slug
          model {
            apiKey
          }
          topic {
            ... on DatoCmsTag {
              name
              id
            }
          }
          tags {
            ... on DatoCmsTag {
              id
              name
            }
          }
          image {
            gatsbyImageData(width: 387, height: 259)
            url
          }
        }
      }
    }
  `);

  const [currentPage, setCurrentPage] = useState(1);
  const [activeTab, setActiveTab] = useState(0);
  const activeTopic = topics[activeTab];

  useEffect(() => {
    const tabs = document.querySelectorAll('.tab-selector');

    tabs.forEach(tab => {
      if (tab.dataset.currenttab) {
        if (location.pathname === tab.dataset.currenttab) {
          tab.classList.add('active');
        } else {
          tab.classList.remove('active');
        }
      }
    });
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [activeTab]);

  // We filter those blog posts whose topic is identical to the one that is active
  const blogListFiltered = blogList.filter(post => {
    const { name } = post.topic;
    return name === activeTopic?.name;
  });

  // Given a list, we take care of making a pagination according to the number of items that the page should have (PAGE_SIZE)
  const blogListPaginated = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PAGE_SIZE;
    const lastPageIndex = firstPageIndex + PAGE_SIZE;

    return blogListFiltered.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, activeTab]);

  return (
    <div className="blog-post-list">
      <div className="container">
        {/* {isArray(topics) && topics.length > 1 && (
          <TabTitles items={topics} classes="col-lg-3" activeTab={activeTab} handleTab={val => setActiveTab(val)} />
        )} */}

        <div className="row titles ">
          <div data-currenttab={'/blog/'} className={`col-lg-3 tab-selector mb-4 mb-lg-0 `}>
            <Link to={`/blog`}>Blog Updates</Link>
          </div>
          <div data-currenttab={'/press/'} className={`col-lg-3 tab-selector mb-4 mb-lg-0 `}>
            <Link to={`/press`}>Press</Link>
          </div>
          <div data-currenttab={'/success-stories/'} className={`col-lg-3 tab-selector mb-4 mb-lg-0`}>
            <Link to={`/success-stories`}>Success stories</Link>
          </div>
        </div>

        {isArray(blogListPaginated) ? (
          <div className="container">
            <BlogPostTab title={activeTopic?.name} items={blogListPaginated} textCta={block.textCta} cta={block.link} />

            <Pagination
              pageSize={PAGE_SIZE}
              currentPage={currentPage}
              totalCount={blogListFiltered.length}
              onPageChange={page => setCurrentPage(page)}
            />
          </div>
        ) : (
          <p className="mt-5">No post found. Try again later.</p>
        )}
      </div>
    </div>
  );
}

export default BlogPostList;
