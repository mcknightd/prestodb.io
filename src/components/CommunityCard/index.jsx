import React from 'react';
import clsx from 'clsx';

// display an individual card for the community projects section
export default function CommunityCard({title, link, description, maintainer, logo, maintainers}) {
  return (
      <div className="card community-card text-center">
        <div className="card-header bg-white"><a href={link} target="_blank"><h4 className="card-title">{title}</h4></a></div>
        <div className="card-body">
          <p className="card-text">{description}</p>
        </div>
        <div className="card-footer small pb-3">
          Maintained by:<br />
          <div className="d-flex">
          {maintainers.map((maintainer, mid) => (
            <div className="flex-fill" key={mid}>
              <a href={maintainer.maintainerLink} target="_blank"><img src={maintainer.logo} alt={maintainer.name} className="card-logo" /></a><br />
              <a href={maintainer.maintainerLink} target="_blank">{maintainer.name}</a>
            </div>
          ))}
          </div>
        </div>
      </div>
  );
}


