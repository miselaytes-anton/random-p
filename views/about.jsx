const React = require('react'),
  Layout = require('./components/layout'),
  Navigation = require('./components/navigation'),
  Header = require('./components/header');


class About extends React.Component {
  render() {
    return (
      <Layout title={this.props.blog.title}>
        <Navigation/>
        <Header>
          <h1 > About </h1>
          <section className="subheading">

            <p>
              The idea was to create a completely computer-generated blog, "written" by  Wobly. He is a fictional charachter, a robot and art critic who "blogs" about human arts.
            </p>

            <p>
              Every day a random word is picked. Then an image, hopefully an artwork, is found for this word using Google.
              Then the image is given a caption and tags using <a href="https://en.wikipedia.org/wiki/Computer_vision">computer vision</a> technologies.
            </p>
          </section>
        </Header>

      </Layout>
    );
  }
}

module.exports = About;