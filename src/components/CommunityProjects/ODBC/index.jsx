import React from 'react';
import clsx from 'clsx';
import CommunityCard from '@site/src/components/CommunityCard';

const ItemList = [
  {
    title: 'Prestogres',
    link: 'https://github.com/treasure-data/prestogres',
    description: (
      <>
        Prestogres is a gateway server that allows clients to use PostgreSQL protocol and thus the PostgreSQL ODBC driver to run queries on Presto.
      </>
    ),
    maintainers: [
        {
          name: 'Furuhashi Sadayuki',
          logo: 'https://avatars.githubusercontent.com/u/40720?v=4',
          maintainerLink: 'https://github.com/frsyuki'
        },
    ]
  },
];

export default function ODBC() {
  return (
    <section id="odbc">
      <h2>Presto ODBC</h2>
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
