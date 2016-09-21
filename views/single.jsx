const React = require('react'),
  Layout = require('./components/layout'),
  Navigation = require('./components/navigation'),
  Post = require('./components/post'),
  Content = require('./components/content'),
  Header = require('./components/header');


class Single extends React.Component {
  render() {
    return (
      <Layout title={this.props.blog.title}>
        <Navigation/>

        <Content>
          <Post post={this.props.post}/>
        </Content>

      </Layout>
    );
  }
}

module.exports = Single;