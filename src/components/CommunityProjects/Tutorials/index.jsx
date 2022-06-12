import React from 'react';
import clsx from 'clsx';
import CommunityCard from '@site/src/components/CommunityCard';

const ItemList = [
  {
    title: 'PrestoDB Sandbox on AWS',
    link: 'https://aws.amazon.com/marketplace/pp/B08C21CGF6?ref_=srh_res_product_title',
    description: (
      <>
        Learn free open source Presto. Sandbox comes bundled with catalogs to try, test, and prototype Presto. See the 5 min tutorial on how to get started at <a href="https://ahana.io/tutorials/aws-sandbox/" target="_blank">https://ahana.io/tutorials/aws-sandbox/</a>
      </>
    ),
    maintainers:[
    {
        name: 'Ahana',
        logo: 'img/community-logos/logo-ahana.svg',
        maintainerLink: 'https://ahana.io'
      },
    ]
  },
];

export default function Tutorials() {
  return (
    <section id="tutorials">
      <h2>Presto Tutorials</h2>
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
