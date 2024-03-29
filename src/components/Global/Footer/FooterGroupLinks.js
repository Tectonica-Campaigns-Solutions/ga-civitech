import React from 'react';
import { isArray } from '../../../utils';
import Divider from '../Divider/Divider';
import Link from '../Link/Link';

const FooterGroupLinks = ({ item }) => {
  const isButton = item.isButton;

  return (
    <div
      className={`col-md col-sm-6 mb-4 mb-md-0 ct-footer-links ${
        isButton ? 'is-button d-flex justify-content-lg-end justify-content-sm-start align-items-start' : ''
      }`}
      key={item.id}
    >
      {isButton ? (
        <Link to={item.link} className={'btn btn-primary'}>
          {item.label}
        </Link>
      ) : (
        item.label && (
          <>
            <h3>{item.label}</h3>
            <Divider />
          </>
        )
      )}

      {item.mainLink && (
        <Link to={item.mainLink} className={isButton ? 'btn btn-primary' : ''}>
          {item.label ? item.label : item.mainLink.label}
        </Link>
      )}

      {isArray(item.links) && (
        <ul>
          {item.links.map(link => (
            <li key={link.id}>
              <Link to={link} className={isButton ? 'btn btn-primary' : ''}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FooterGroupLinks;
