import React from "react";

const Posts = ({ props, posts }) => {
  if (posts.length > 0) {
    let x = 0;
    return (
      <>
        {posts.map(itm => (
          <div className={props.customClass} key={x++}>
            {props.container(itm)}
          </div>
        ))}
      </>
    );
  } else {
    return (
      <div className={props.customClass} style={{ textAlign: "center" }}>
        - No Data -
      </div>
    );
  }
};

export default Posts;
