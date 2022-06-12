import React from 'react';
import clsx from 'clsx';
import CommunityCard from '@site/src/components/CommunityCard';

const ItemList = [
  {
    title: 'MySQL-Teradata',
    link: 'https://github.com/HackShare/presto',
    description: (
      <>
        This project isn't an install-ready plugin for MySQL-Teradata it is a fork of the entire Presto project and it contains a working MySQL-Teradata plugin. This integration was posted to the Google Group by maintainer Dheeban Govindarajan.
      </>
    ),
    maintainers:[
    {
        name: 'HackShare',
        logo: 'https://avatars.githubusercontent.com/u/11655955?s=200&v=4',
        maintainerLink: 'https://github.com/HackShare'
      },
    ]
  },
];

export default function Connectors() {
  return (
    <section id="connectors">
      <h2>Presto Connectors</h2>
      <div className="container">
        <div className="row">
          <div className="col card-group">
            {ItemList.map((props, idx) => (
            <CommunityCard key={idx} {...props} />
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}
