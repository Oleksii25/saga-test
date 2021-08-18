import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {actionForSaga, removePosts} from './redux/actions/actions';

function App() {
  const posts = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();


  return (
    <div className="App">
      <header className="App-header">
        <h1> posts </h1>
        {!!posts.length
          && posts.map(post => (
            <div key={post.id}>
              <h2>
                {`${post.id} -- ${post.title}`}
              </h2>
            </div>
          ))}
        <button
          type='button'
          onClick={() => dispatch(actionForSaga())}
        >
          add posts
        </button>
        <button
          type='button'
          onClick={() => dispatch(removePosts())}
        >
          CLEAR
        </button>
      </header>
    </div>
  );
}

export default App;
