import * as React from 'react';
import { isArray, pathToModel } from '../../../utils';
import CtaList from '../../Global/Cta/CtaList';
import ImageWrapper from '../../Global/Image/ImageWrapper';
import Link from '../../Global/Link/Link';

import './index.scss';

export default function ListMembers({ block }) {
  const { members, ctas = [], backgroundColor, model, detailedViewOfTheMembers = false, title = false } = block;

  return (
    <div className={`list-members-container ${backgroundColor} ${detailedViewOfTheMembers ? 'extra-pt' : ''}`}>
      <div className="container">
        <div className="row justify-content-center g-5">
          { title && <h2>{ title }</h2>}
          {isArray(members) &&
            members.map((member, index) => (
              <div key={index} className="col-lg-20pg col-md-4 member-item">
                {member.image && (
                  <Link to={detailedViewOfTheMembers ? pathToModel(model.apiKey, member.slug) : null}>
                    <ImageWrapper image={member.image} objectFit="contain" />
                  </Link>
                )}

                <div className="description">
                  {member.name && (
                    <Link to={detailedViewOfTheMembers ? pathToModel(model.apiKey, member.slug) : null}>
                      <h3>{member.name}</h3>
                    </Link>
                  )}

                  {member.positionMember && <span>{member.positionMember}</span>}
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
