const React = require('react'),
  Layout = require('./components/layout'),
  Navigation = require('./components/navigation'),
  Post = require('./components/post'),
  Content = require('./components/content'),
  Header = require('./components/header');


class Index extends React.Component {
  render() {
    return (
      <Layout title={this.props.blog.title}>
        <Navigation/>

        <Header>
          <h1 >{this.props.blog.title}</h1>
          <span className="subheading" style={{marginTop:'20px'}}>{this.props.blog.description}</span>
        </Header>

       <Content>
         {this.props.posts.map(function(post, index){
           return <Post post={post}/>;
         })}

         <ul className="pager">
           {this.props.hasNewer ? <li className="previous"><a href={'?page='+ (this.props.page - 1)}> &larr; Newer</a> </li> : '' }
           {this.props.hasOlder ? <li className="next"><a href={'?page='+ (this.props.page + 1)}> Older &rarr;</a> </li> : '' }
         </ul>
       </Content>

      </Layout>
    );
  }
}

module.exports = Index;