import React from 'react';
import clsx from 'clsx';
import CommunityCard from '@site/src/components/CommunityCard';

const ItemList = [
  {
    title: 'Presto Cloud',
    link: 'https://ahana.io/ahana-cloud/',
    description: (
      <>
        Ahana Cloud for Presto is the first cloud-native managed service for Presto. This offering is designed to simplify the deployment, management and integration of Presto, with data catalogs, databases and data lakes on Amazon Web Services&nbsp;(AWS). <br /><br />
        <a href="https://ahana.io/ahana-cloud/" target="_blank">Ahana Cloud for Presto</a> is easy-to-use with no installation, no AMIs or CFTs, and no configuration needed. Via the Ahana console, Presto is deployed within the user’s AWS account, giving users complete control and visibility of clusters and their data. As a managed service, there is no infrastructure to manage, yet you can pay only for Ahana and the EC2 instances that you&nbsp;use.
        <br /><br />
        Ahana Cloud simplifies Presto. It comes out-of-the-box integrated with built-in catalogs, data sources, and dashboarding tools. Under the hood, Ahana leverages the latest version of Presto and runs with Amazon EKS for high scalability, availability, and manageability.
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
  {
    title: 'Amazon Athena',
    link: 'https://aws.amazon.com/athena/',
    description: (
      <>
        Amazon Athena is an interactive query service based on Presto that makes it easy to analyze data in Amazon S3 using standard SQL. Athena is serverless, so there is no infrastructure to manage, and you pay only for the queries that you&nbsp;run.
        <br /><br />
        Amazon Athena uses Presto with full standard SQL support and works with a variety of standard data formats. Athena is out-of-the-box integrated with AWS Glue Data Catalog, allowing you to create a unified metadata repository across various services, crawl data sources to discover schemas and populate your Catalog with new and modified table and partition definitions, and maintain schema&nbsp;versioning.
      </>
    ),
    maintainers:[
    {
        name: 'Amazon Web Services',
        logo: 'img/community-logos/logo-aws.svg',
        maintainerLink: 'https://aws.amazon.com/'
      },
    ]
  },
  {
    title: 'Amazon EMR',
    link: 'https://aws.amazon.com/emr/',
    description: (
      <>
Amazon EMR provides a managed Hadoop framework that makes it easy, fast, and cost-effective to process vast amounts of data across dynamically scalable Amazon EC2 instances. With EMR, you can launch a large Presto cluster in minutes. You don't need to worry about node provisioning, cluster setup or&nbsp;tuning.<br /><br />

Using Presto on EMR provides these benefits to&nbsp;customers:<br /><br />
<b>Elasticity:</b><br /> With Amazon EMR, you can provision one, hundreds, or thousands of compute instances to process data at any scale. You can easily increase or decrease the number of instances manually or with Auto Scaling, and you only pay for what you&nbsp;use.<br /><br />
<b>Simple and predictable pricing:</b><br /> You pay a per-second rate for every second used, with a one-minute minimum&nbsp;charge.
      </>
    ),
    maintainers:[
    {
        name: 'Amazon Web Services',
        logo: 'img/community-logos/logo-aws.svg',
        maintainerLink: 'https://aws.amazon.com/'
      },
    ]
  },
];

export default function Cloud() {
  return (
    <section id="presto_cloud">
      <h2>Presto Cloud</h2>
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
