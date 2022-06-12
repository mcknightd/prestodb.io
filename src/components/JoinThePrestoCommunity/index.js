import React from 'react';

export default function JoinThePrestoCommunity() {
  return (
<section className="bg-silver top-cap-white bottom-cap-white">
  <div className="container-fluid py-5">
    <div className="row">
      <div className="col text-center mb-3">
        <h2>Join the Presto Community</h2>
      </div>
    </div>
    <div
      className="community-buttons d-flex flex-wrap"
      style={{ placeContent: "center" }}
    >
      <a
        href="https://prestodb.slack.com/"
        target="_blank"
        className="btn btn-light"
        title="slack"
      >
        <img src="img/icon-slack-color.svg" alt="slack" />
      </a>
      <a
        href="https://github.com/prestodb/presto"
        target="_blank"
        className="btn btn-light"
        title="github"
      >
        <img src="img/icon-github-dark.svg" alt="github" />
      </a>
      <a
        href="https://twitter.com/prestodb"
        target="_blank"
        className="btn btn-light"
        title="twitter"
      >
        <img src="img/icon-twitter-color.svg" alt="twitter" />
      </a>
      <a
        href="https://www.meetup.com/topics/presto/"
        target="_blank"
        className="btn btn-light"
        title="meetup"
      >
        <img src="img/icon-meetup-color.svg" alt="meetup" />
      </a>
      <a
        href="https://www.linkedin.com/company/presto-foundation/"
        target="_blank"
        className="btn btn-light"
        title="linkedin"
      >
        <img src="img/icon-linkedin-color.svg" alt="linkedin" />
      </a>
    </div>
  </div>
</section>


  );
}
