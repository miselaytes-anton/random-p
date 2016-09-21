const React = require('react');


class Content extends React.Component {
  render() {
    return (
      <main className="container">
        <div className="row">
          <div className="col-lg-6 col-lg-offset-3 col-md-8 col-md-offset-2">
            {this.props.children}
          </div>
        </div>
      </main>
    );
  }
}


module.exports = Content;