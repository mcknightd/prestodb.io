import React from 'react';

export default function ThePrestoFoundation() {
  return (
<div className="container-fluid wrapper py-5" style={{ maxWidth: 1200 }}>
  <div className="container-fluid">
    <div className="row text-center sequential-fadein">
      <div className="col">
        <h2>The Presto Foundation</h2>
        <hr className="dots" />
      </div>
    </div>
    <div className="row sequential-fadein" style={{ placeContent: "center" }}>
      <div className="col-12 col-md-6 text-center p-3">
        <img
          src="img/logo-presto-foundation.svg"
          style={{ maxWidth: 420 }}
          alt="presto foundation"
        />
      </div>
      <div className="col-12 col-md-6 py-3 px-md-5">
        The Presto Foundation is the organization that oversees the development
        of thePresto open source project. Members of the Presto Foundation
        provide essential financial support for the collaborative development
        process, including tooling, infrastructure, and community conferences.
      </div>
    </div>
  </div>
</div>


  );
}
