import React from 'react';
import BlogListCta from '../../Global/BlogListCta/BlogListCta';
import BlogPostCard from '../../Global/BlogPostCard/BlogPostCard';

function BlogPostTab({ title, items, textCta = null, cta = null }) {
  const shouldRenderCta = items.length >= 12;

  return (
    <>
      {title && <h2>{title}</h2>}

      <div className="row gy-5">
        {items.map((item, index) => (
          <>
            <div className="col-lg-4" key={index}>
              <BlogPostCard
                slug={item.slug}
                model={item.model}
                image={item.image}
                date={item.date}
                tags={item.tags}
                title={item.title}
              />
            </div>

            {shouldRenderCta && index === 5 && <BlogListCta text={textCta} cta={cta} label={cta.label} />}
          </>
        ))}
      </div>
    </>
  );
}

export default BlogPostTab;
