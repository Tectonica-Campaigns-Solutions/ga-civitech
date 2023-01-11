import React from 'react';
import Link from '../Link';

const DropdownItem = ({ link, label, children, isOpen, handleOnClickMouse, activeIndex }) => {
  return (
    <li className="dropdown nav-item">
      <Link
        to={link}
        type="button"
        aria-label="Expand"
        aria-expanded="false"
        data-bs-toggle="dropdown"
        className="dropdown-link"
        onClick={handleOnClickMouse}
      >
        {label}
      </Link>

      <div className={`dropdown-menu ${isOpen ? 'open' : ''}`}>
        <ul className="container">
          {children?.map((link, index) => {
            if (activeIndex === index) {
              return (
                <li className="dropdown-item" key={link?.id}>
                  <Link className="dropdown-link" to={link}>
                    {link?.label}
                  </Link>
                </li>
              );
            }
          })}
        </ul>
      </div>
    </li>
  );
};

export default DropdownItem;
