const React = require('react');


class Post extends React.Component {
  render() {
    var post = this.props.post;

    return (
      <div className="post-preview" id = {post._id} key={post._id}>
        <h2 className="post-title" style={{fontSize: '36px', marginTop: '30px', marginBottom: '20px'}}>
          {post._roboCaption}
        </h2>
        <img style={{width: '100%'}} src={post.image.link}/>

        <span className="post-meta">Word: {post.word} </span><br/>

        <span className="post-meta">Tags: {post._tags.join(', ')} </span><br/>

        <span className="post-meta">
            Source: <a target="_blank" href={post.image.source}>{post._sourceCaption}</a>
          </span>

        <hr />
      </div>
      );
  }
}


module.exports = Post;


