import React, { useState } from "react";
import PropTypes from "prop-types";
import PostComponent from "../PostComponent/PostComponent";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import InputComponent from "../InputComponent/InputComponent";

const posts = [
  { title: "Football", description: "Diego Maradona is died" },
  {
    title: "Basketball",
    description:
      "How the Lakers botched Alex Caruso’s free agency and lost a key piece",
  },
  {
    title: "Tennis",
    description: "WHICH WTA FINALIST BEST MATCHES YOU AND YOUR STRENGTHS?",
  },
];

function PostsContainer() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [allPostsState, setAllPostsState] = useState(posts);

  const allPosts = [];

  for (let i = 0; i < allPostsState.length; i++) {
    allPosts.push(
      <PostComponent
        key={i}
        name={allPostsState[i].title}
        title={allPostsState[i].description}
      />
    );
  }

  function addNewPostHandler() {
    let newPost = {
      title: title,
      description: description,
    };

    setAllPostsState([...allPostsState, newPost]);
    setTitle("");
    setDescription("");
  }

  return (
    <div className="container-posts">
      {[allPosts]}
      <form
        className="new-post-form"
        onSubmit={(e) => {
          e.preventDefault();
          addNewPostHandler();
        }}
      >
        <label>Title</label>
        <input
          type="text"
          placeholder={"Title"}
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <label>Description</label>
        <input
          type="text"
          placeholder={"Description"}
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <ButtonComponent type="submit" name="Add new post" />
      </form>
    </div>
  );
}

PostComponent.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
};

export default PostsContainer;
