import React from 'react';
import BlogPostCard from '../../Global/BlogPostCard/BlogPostCard';

function BlogPostTab({ title, items }) {
  return (
    <>
      <h2>{title}</h2>

      <div className="row gy-5">
        {items.map(item => {
          return (
            <div className="col-lg-4">
              <BlogPostCard
                slug={item.slug}
                model={item.model}
                image={item.image}
                date={item.meta.createdAt}
                tags={item.tags}
                title={item.title}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default BlogPostTab;
