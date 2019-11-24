# Usage

```
import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll";

const App = () => {
  const [state, setState] = useState({
    isLoaded: false,
    data: []
  });

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    fetch("https://jsonplaceholder.typicode.com/posts", {
      headers: {
        "Content-Type": "application/json"
      },
      signal: signal
    })
      .then(res => res.json())
      .then(data => {
        setState({ ...state, data: data });
      })
      .then((state.isLoaded = true));

    return function cleanup() {
      abortController.abort();
    };
  }, [state]);

  const container = itm => {
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{itm.title}</h5>
          <p className="card-text">{itm.body}</p>
        </div>
      </div>
    );
  };

  if (!state.isLoaded) {
    return null;
  } else {
    return (
      <div className="container ">
        <InfiniteScroll
          data={state.data}
          container={container}
          customClass="mt-3 mb-3"
          postsPerLoad={20}
        />
      </div>
    );
  }
};

export default App;

```
