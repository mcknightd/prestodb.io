import React from 'react';
import clsx from 'clsx';
import CommunityCard from '@site/src/components/CommunityCard';

const ItemList = [
  {
    title: 'Presto-Admin',
    link: 'https://github.com/prestodb/presto-admin',
    description: (
      <>
        Presto-Admin is a tool for installing and managing the Presto query engine on a cluster with easy-to-use commands.
      </>
    ),
    maintainers:[
    {
        name: 'Presto',
        logo: 'img/icon-presto-dots-color.svg',
        maintainerLink: 'https://github.com/prestodb/presto-admin'
      },
    ]
  },
];

export default function ManagementTools() {
  return (
    <section id="management_tools">
      <h2>Presto Management Tools</h2>
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
