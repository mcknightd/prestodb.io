import React from 'react';

export default function HomepageFeatures() {
  return (
<section className="container-fluid wrapper pb-5" style={{ maxWidth: 1100 }}>
  <div className="row my-5 align-items-center">
    <div className="col-4 text-center">
      <object
        data="img/graphic-querydata.svg"
        type="image/svg+xml"
        style={{ maxWidth: 300 }}
      />
    </div>
    <div className="col-8 slideleft px-md-5">
      <h4>Query data wherever it lives</h4>
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua.{" "}
      </p>
    </div>
  </div>
  <div className="row my-5 align-items-center">
    <div className="col-8 slideright px-md-5">
      <h4>Faster analytics without extra hardware or costs</h4>
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua.{" "}
      </p>
    </div>
    <div className="col-4 text-center">
      <object
        data="img/graphic-fasteranalytics.svg"
        type="image/svg+xml"
        style={{ maxWidth: 300 }}
      />
    </div>
  </div>
  <div className="row my-5 align-items-center">
    <div className="col-4 text-center">
      <object
        data="img/graphic-community.svg"
        type="image/svg+xml"
        style={{ maxWidth: 300 }}
      />
    </div>
    <div className="col-8 slideleft px-md-5">
      <h4>Community owned and driven</h4>
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua.{" "}
      </p>
    </div>
  </div>
</section>

  );
}
