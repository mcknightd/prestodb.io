import React,{useState,useEffect} from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Tutorials from '@site/src/components/CommunityProjects/Tutorials';
import ManagementTools from '@site/src/components/CommunityProjects/ManagementTools';
import Clients from '@site/src/components/CommunityProjects/Clients';
import ODBC from '@site/src/components/CommunityProjects/ODBC';
import Libraries from '@site/src/components/CommunityProjects/Libraries';
import Connectors from '@site/src/components/CommunityProjects/Connectors';
import Cloud from '@site/src/components/CommunityProjects/Cloud';
import ThePrestoFoundation from '@site/src/components/ThePrestoFoundation';

function CommunityHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className='bg-silver bottom-cap-white'>
  <div className="container-fluid wrapper pb-5">
    <div className="billboard sequential-fadeup">
      <h1>Be a Part of the Presto Community.</h1>
      <hr className="dots"/>
      <h5 style={{maxWidth:'700px',margin:'0 auto 30px'}} >There are many ways to get started with the community. The best place to start is by joining our Slack channel where you can meet other Presto engineers and&nbsp;users.</h5>
      <div>
        <a href="https://prestodb.slack.com/" target="_blank" className="btn btn-red btn-lg" ><img src="img/icon-slack-white.svg" alt="slack" style={{maxWidth:'1.5rem'}} /> Join Our Slack</a>
      </div>
    </div>
  </div>
    </header>
  );
}

function CommunityGetInvolved() {
  const {siteConfig} = useDocusaurusContext();
  return (
  <section className="container-fluid wrapper py-5 mt-3">
    <div className="row align-items-center sequential-fadein" style={{maxWidth:'1100px',margin:'0 auto'}}>
      <div className="col text-center">
      <h2>Presto Meetups</h2>
      (B.Y.O.DB.)
      </div>
      <div className="col text-center">
        <img src="img/icon-meetup-color.svg" alt="Meetup" />
      </div>
      <div className="col">
        We have meetups all over the world! Join your local meetup to connect with local Presto&nbsp;users.
      </div>
    </div>
    <div className="d-flex align-items-center sequential-fadein py-5">
      <div className="text-center flex-fill">
        <a href="https://www.meetup.com/prestodb/" target="_blank" ><b>Bay Area</b></a>
      </div>
      <div className="text-center flex-fill">
        <a href="https://www.meetup.com/presto-meetup-new-york/" target="_blank" ><b>NYC</b></a>
      </div>
      <div className="text-center flex-fill">
        <a href="https://www.meetup.com/presto-meetup-london/" target="_blank" ><b>London</b></a>
      </div>
      <div className="text-center flex-fill">
        <a href="https://www.meetup.com/presto-meetup-bangalore/" target="_blank" ><b>Bangalore</b></a>
      </div>
      <div className="text-center flex-fill">
        <a href="https://www.meetup.com/presto-meetup-shanghai/" target="_blank" ><b>Shanghai</b></a>
      </div>
      <div className="text-center flex-fill">
        <a href="https://www.meetup.com/presto-meetup-sydney/" target="_blank" ><b>Sydney</b></a>
      </div>
    </div>
    <div className="sequential-fadeup">
      <h2 className="text-center py-5">More Ways To Get Involved</h2>
      <div className="d-flex flex-wrap sequential-fadein align-items-center justify-content-center">
        <a href="https://lists.prestodb.io/g/presto-users" className="btn btn btn-lg btn-outline-dark m-1" target="_blank"><img src="img/icon-github-dark.svg" alt="github" style={{maxWidth:'1.5em'}} /> Github Discussions</a>
        <a href="https://github.com/prestodb/presto/issues" className="btn btn btn-lg btn-outline-dark m-1" target="_blank"><img src="img/icon-github-dark.svg" alt="github" style={{maxWidth:'1.5em'}} /> File a Bug</a>
        <a href="https://github.com/prestodb/presto/discussions" className="btn btn btn-lg btn-outline-dark m-1" target="_blank"><img src="img/icon-forum-dark.svg" alt="forums" style={{maxWidth:'1.5em'}} /> Forums</a>
        <a href="https://groups.google.com/group/presto-users" className="btn btn btn-lg btn-outline-dark m-1" target="_blank"><img src="img/icon-mailing-list-dark.svg" alt="mailing-list" style={{maxWidth:'1.5em'}} /> Mailing List</a>
        <a href="https://twitter.com/prestodb" className="btn btn btn-lg btn-outline-dark m-1" target="_blank"><img src="img/icon-twitter-color.svg" alt="twitter" style={{maxWidth:'1.5em'}} /> Twitter @prestodb</a>
        <a href="https://www.linkedin.com/company/presto-foundation/" className="btn btn btn-lg btn-outline-dark m-1" target="_blank"><img src="img/icon-linkedin-color.svg" alt="linkedin" style={{maxWidth:'1.5em'}} /> Follow on LinkedIn</a>
      </div>
    </div>
  </section>

  );
}

function CommunityProjectsTOC() {
  const {siteConfig} = useDocusaurusContext();
  return (
  <section className="pb-5 mt-3 px-0 bg-silver top-cap-white">
    <div className="container wrapper">
      <h2 className="text-center pt-5">Community Projects</h2>
      <div className="d-sm-flex flex-wrap sequential-fadein py-5" style={{maxWidth:'740px',margin:'0 auto'}}>
          <h5 className="text-center flex-fill p-2"><a href="#tutorials" ><b>Presto Tutorials</b></a></h5>
          <h5 className="text-center flex-fill p-2"><a href="#management_tools" ><b>Presto Management Tools</b></a></h5>
          <h5 className="text-center flex-fill p-2"><a href="#clients" ><b>Presto Clients and GUIs</b></a></h5>
          <h5 className="text-center flex-fill p-2"><a href="#odbc" ><b>Presto ODBC</b></a></h5>
          <h5 className="text-center flex-fill p-2"><a href="#libraries" ><b>Presto Libraries</b></a></h5>
          <h5 className="text-center flex-fill p-2"><a href="#connectors" ><b>Presto Connectors</b></a></h5>
          <h5 className="text-center flex-fill p-2"><a href="#presto_cloud" ><b>Presto Cloud</b></a></h5>
      </div>
    </div>
  </section>
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
      <CommunityHeader />
      <main>
        <CommunityGetInvolved />
        <CommunityProjectsTOC />
        <div className="community-projects">
          <Tutorials />
          <ManagementTools />
          <Clients />
          <ODBC />
          <Libraries />
          <Connectors />
          <Cloud />
        </div>
        <ThePrestoFoundation />
      </main>
    </Layout>
  );
}
