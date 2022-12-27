import * as React from 'react';
import { isArray } from '../../../utils';
import CtaList from '../../Global/Cta/CtaList';
import ImageWrapper from '../../Global/Image/ImageWrapper';

import './index.scss';

export default function ListMembers({ block }) {
  const { members, ctas, backgroundColor } = block;

  return (
    <div className={`list-members-container ${backgroundColor}`}>
      <div className="container">
        <div className="row">
          {isArray(members) &&
            members.map((member, index) => (
              <div key={index} className="col-lg col-md-4 member-item">
                <ImageWrapper image={member.image} objectFit="contain" />

                <div className="description">
                  <h3>{member.name}</h3>
                  <span>{member.positionMember}</span>
                </div>
              </div>
            ))}
        </div>

        {isArray(ctas) && (
          <div className="mt-5">
            <CtaList ctas={ctas} />
          </div>
        )}
      </div>
    </div>
  );
}
