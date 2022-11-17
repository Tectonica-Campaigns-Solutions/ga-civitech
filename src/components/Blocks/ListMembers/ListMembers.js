import * as React from 'react';
import CtaList from '../../Global/Cta/CtaList';
import ImageWrapper from '../../Slider/ImageWrapper';

import './index.scss';

export default function ListMembers({ block }) {
  const { members, ctas } = block;

  return (
    <div className="list-members-container">
      <div className="container">
        <div className="row">
          {Array.isArray(members) &&
            members.length > 0 &&
            members.map((member, index) => (
              <div key={index} className="col-lg col-md-4 member-item">
                <ImageWrapper image={member.image} />

                <div className="description">
                  <h3>{member.name}</h3>
                  <span>{member.positionMember}</span>
                </div>
              </div>
            ))}
        </div>

        {Array.isArray(ctas) && ctas.length > 0 && (
          <div className="mt-5">
            <CtaList ctas={ctas} />
          </div>
        )}
      </div>
    </div>
  );
}
