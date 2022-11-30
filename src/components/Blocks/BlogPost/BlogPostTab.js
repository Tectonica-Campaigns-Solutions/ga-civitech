import React from 'react';
import BlogPostCard from '../../Global/BlogPostCard/BlogPostCard';
import Cta from '../../Global/Cta/Cta';

function BlogPostTab({ title, items }) {
  const shouldRenderCta = items.length >= 12;

  return (
    <>
      <h2>{title}</h2>

      <div className="row gy-5">
        {items.map((item, index) => (
          <>
            <div className="col-lg-4" key={index}>
              <BlogPostCard
                slug={item.slug}
                model={item.model}
                image={item.image}
                date={item.meta.createdAt}
                tags={item.tags}
                title={item.title}
              />
            </div>

            {shouldRenderCta && index === 5 && (
              <div className="col-lg-12 blog-post-tab-cta">
                <div className="row align-items-center">
                  <div className="col-lg-9">
                    <h4>
                      Lorem ipsum dolor sit amet consectetur. Sed egestas dictumst nunc eget feugiat arcu sed sapien.
                      Lacus ut venenatis tortor amet.
                    </h4>
                  </div>

                  <div className="col-lg-3">
                    <Cta label="Learn more" url="/" isButton />
                  </div>
                </div>
              </div>
            )}
          </>
        ))}
      </div>
    </>
  );
}

export default BlogPostTab;
