import React, { useState, useEffect } from "react";
import Posts from "./components/posts";
import infiniteScroll from "./components/infiniteScroll";

const InfiniteScroll = props => {
  const [state, setState] = useState({
    isLoaded: false,
    data: [],
    currentPage: 0,
    postsPerLoad: props.postsPerLoad ? props.postsPerLoad : 20
  });

  const [listItems, setListItems] = useState({});
  const [isFetching, setIsFetching] = infiniteScroll(fetchMoreListItems);

  useEffect(() => {
    setListItems(() => [
      ...props.data.slice(state.currentPage, state.postsPerLoad, true)
    ]);
    state.isLoaded = true;
    setState({ ...state, data: [...props.data] });
  }, []);

  function fetchMoreListItems() {
    if (state.data.length !== listItems.length) {
      setListItems(prevState => [
        ...prevState,
        ...props.data.slice(
          state.currentPage * state.postsPerLoad,
          state.currentPage * state.postsPerLoad + state.postsPerLoad,
          true
        )
      ]);
      state.currentPage++;
      setIsFetching(false);
    } else {
      return null;
    }
  }

  if (!state.isLoaded) {
    return null;
  } else {
    return (
      <div className="container ">
        <Posts
          posts={listItems}
          currentPage={state.currentPage}
          props={props}
        />
        {isFetching && state.data.length !== listItems.length && (
          <div className="fixed-top row d-flex justify-content-center mb-5 ">
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        )}
      </div>
    );
  }
};

export default InfiniteScroll;
