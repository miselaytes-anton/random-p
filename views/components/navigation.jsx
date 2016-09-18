const React = require('react');


class Navigation extends React.Component {
  render() {
    return (
      <nav style={{
        "display": "block",
        float: "right",
        fontFamily: "'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif",
        padding: "20px",
        textTransform: "uppercase",
        fontSize: "12px",
        letterSpacing: "1px",
        fontWeight: 800
      }}>
        <a href="/" style={{margin: "20px"}}> Home</a>
        <a href="/about" style={{margin: "20px"}}> About</a>
        <a href="/rss" style={{margin: "20px"}}> RSS</a>
        <a href="https://www.facebook.com/woblyblog/" target="_blank" style={{margin: "20px"}}>facebook</a>
      </nav>
    );
  }
}


module.exports = Navigation;