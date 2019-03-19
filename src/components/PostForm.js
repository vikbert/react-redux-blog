import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {createPost} from '../redux/actions/postActions';

class PostForm extends Component {
  state = {
    title: '',
    body: '',
  };

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value});
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.createPost({
      title: this.state.title,
      body: this.state.body,
    });
  };

  render() {
    return (
      <div>
        <h1>add post</h1>
        <form action="" onSubmit={this.handleSubmit}>
          <div>
            <label>Title: </label>
            <input type="text" name="title" onChange={this.handleChange} value={this.state.title}/>
          </div>
          <div>
            <label>Body: </label>
            <input type="text" name="body" onChange={this.handleChange} value={this.state.body}/>
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
