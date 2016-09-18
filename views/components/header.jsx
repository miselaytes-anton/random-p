const React = require('react');


class Header extends React.Component {
  render() {
    return (
      <header className="intro-header" >
        <div className="container">
          <div className="row">
            <div className="col-xs-3">
              <img src="/img/wobly.png" className="site-heading" style={{width: '100%', cursor: 'pointer'}} />
            </div>
            <div className="col-xs-8">
              <div className="site-heading" style={{color: '#333', textAlign: 'left'}}>
                {this.props.children}
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}


module.exports = Header;