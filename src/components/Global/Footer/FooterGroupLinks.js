import React from 'react';
import Divider from '../../Divider/Divider';
import Link from '../Link';

const FooterGroupLinks = ({ item }) => (
    <div className="col-md col-sm-6 mb-4 mb-md-0 ct-footer-links" key={item.id}>
        {item.label && (
            <>
                <h3>{item.label}</h3>
                <Divider />
            </>
        )}

        {item.mainLink && (<Link to={item.mainLink} className={item.isButton ? 'btn btn-primary' : ''}>{item.label ? item.label : item.mainLink.label}</Link>)}

        {item.links && item.links.length > 0 && (<ul>
            {

                item.links.map(link => (<li key={link.id}><Link to={link}>{link.label}</Link></li>))
            }
        </ul>)}
    </div>
)

export default FooterGroupLinks;