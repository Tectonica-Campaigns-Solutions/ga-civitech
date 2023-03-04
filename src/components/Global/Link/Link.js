import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { getCtaUrl } from '../../../utils';

export default class Link extends React.Component {
  render() {

    const { to, children, ...rest } = this.props;
    
    //check for string in case link recieve hardoced link on templates ex: logo
    if (typeof to === 'string') {
      return (
        <GatsbyLink to={to} {...rest}>
          {children}
        </GatsbyLink>
      );
    } else if (to?.content?.slug || to?.link?.content) {
      
      const url = getCtaUrl(to);
      return (
        <GatsbyLink to={url} {...rest}>
          {children}
        </GatsbyLink>
      );
    } else if (to?.url || to?.link?.url) {
      return (
        <a href={to?.url || to.link?.url} {...rest} target="_blank">
          {children}
        </a>
      );
    } else {
      return <a {...rest}>{children}</a>;
    }
  }
}
