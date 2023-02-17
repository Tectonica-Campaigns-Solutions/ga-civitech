import React from 'react';

function ListContent({ block }) {
  const { title, content } = block;

  return (
    <div className="container">
      <div>{title}</div>

      {content.map(item => (
        <div>{item.title}</div>
      ))}
    </div>
  );
}

export default ListContent;
