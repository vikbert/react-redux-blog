import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {createPost} from '../actions/postActions';

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
    };

    this.onChangeBody = this.onChangeBody.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChangeTitle(event) {
    this.setState({title: event.target.value});
  }

  onChangeBody(event) {
    this.setState({body: event.target.value});
  }

  onSubmit(event) {
    event.preventDefault();

    const post = {
      title: this.state.title,
      body: this.state.body,
    };

    //call action
    this.props.createPost(post);
  }

  render() {
    return (
      <div>
        <h1>add post</h1>
        <form action="" onSubmit={this.onSubmit}>
          <div>
            <label>Title: </label>
            <input type="text" name="title" onChange={this.onChangeTitle} value={this.state.title}/>
          </div>
          <div>
            <label>Body: </label>
            <input type="text" name="body" onChange={this.onChangeBody} value={this.state.body}/>
          </div>
          <br/>
          <button type="submit">submit</button>
        </form>
        <hr/>
      </div>
    );
  }
}

PostForm.propTypes = {
  createPost: PropTypes.func.isRequired,
};

export default connect(null, {createPost})(PostForm);
