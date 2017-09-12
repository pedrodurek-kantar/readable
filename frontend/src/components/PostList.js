import React from 'react';
import moment from 'moment';
import Score from './Score';

const PostList = ({ posts, increasePostScore, decreasePostScore }) => {
  return (
    <div>
      { posts.map((p) =>
      <div key={p.id}>
        <h3><b>{p.title}</b></h3>
        <p>Date: {moment(p.timestamp).format("MMM-DD-YYYY hh:mma")} :: Author: {p.author} :: Category [{p.category}]</p>
        <p>{p.body}</p>
        <Score
          id={p.id}
          score={p.voteScore}
          increaseFn={increasePostScore}
          decreaseFn={decreasePostScore}
        />
      </div>
      )}
    </div>
  );
}

export default PostList;
