import React from 'react';
import './index.scss';

const Tag = ({ title }) => {
  if (!title) return null;

  return <span className="tag">{title}</span>;
};

export default Tag;
