import React, {Component} from 'react';
import './assets/App.css';
import Posts from './components/Posts';
import PostForm from './components/PostForm';

class App extends Component {
  render() {
    return (
        <div className="App">
          <PostForm></PostForm>
          <Posts></Posts>
        </div>
    );
  }
}

export default App;
