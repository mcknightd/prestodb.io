import React,{useState,useEffect} from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import JoinThePrestoCommunity from '@site/src/components/JoinThePrestoCommunity';
import ThePrestoFoundation from '@site/src/components/ThePrestoFoundation';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className='bg-silver-gradient bottom-cap-white'>
  <div className="container-fluid wrapper pb-5">
    <div className="billboard sequential-fadeup">
      <h1>The Open Source SQL Query Engine for the Data Lakehouse</h1>
      <img src="img/logo-presto-color.svg" alt="Presto Logo" className="billboard-logo" />
      <div>
        <a href="download.html" className="btn btn-blue btn-lg" >Download</a> &nbsp; <a href="https://prestodb.slack.com/" target="_blank" className="btn btn-red btn-lg" ><img src="img/icon-slack-white.svg" alt="slack" style={{maxWidth:'1.5rem'}} /> Join Our Slack</a>
      </div>
      <a className="my-5 d-flex" href="https://github.com/prestodb/presto" target="_blank" style={{fontSize:'22px',placeContent:'center',color:'#000',textDecoration:'none'}} title="presto on github" >
          <img src="img/icon-github-dark.svg" alt="github" style={{maxWidth:'1.75rem'}} />&nbsp;<img src="img/icon-github-star.svg" alt="star" style={{maxWidth:'1.5rem'}} />&nbsp;13.5K
      </a>
    </div>
    <div className="poweredbypresto sequential-fadein">
      <img src="img/presto-users/logo-meta.svg" alt="" />
      <img src="img/presto-users/logo-uber.svg" alt="" />
      <img src="img/presto-users/logo-alibaba.svg" alt="" />
      <img src="img/presto-users/logo-dropbox.svg" alt="" />
      <img src="img/presto-users/logo-airbnb.svg" alt="" />
    </div>
    <div className="my-5 text-center sequential-fadeup">
      <h2>Use a single query to combine data from multiple sources</h2>
      <h5 style={{maxWidth:'700px',margin:'0 auto'}} >Presto is an open source distributed SQL query engine for running interactive analytic queries against data sources of all sizes ranging from gigabytes to&nbsp;petabytes.</h5>
      <div className="my-5">
        <img src="img/diag-presto-main.svg" alt="presto architecture" style={{maxWidth:"1024px"}} />
      </div>
    </div>
  </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  const [mounted, setMounted] = useState(false)
  useEffect(() =>{
    scrollEffects();
  },[])
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Distributed SQL Query Engine for Big Data">
      <Head>
      </Head>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <JoinThePrestoCommunity />
        <ThePrestoFoundation />
      </main>
    </Layout>
  );
}
