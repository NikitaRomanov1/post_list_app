import React, { useState } from "react";
import MyButton from "../../UI/MyButton";
import MyInput from "../../UI/MyInput";

export const PostForm = ({ createPost }) => {
  const [post, setPost] = useState({
    title: "",
    body: "",
  });

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      id: Date.now(),
      ...post,
    };
    createPost(newPost);
    setPost({ title: "", body: "" });
  };

  return (
    <form>
      <MyInput
        type="text"
        placeholder="Название"
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
      />
      <MyInput
        type="text"
        placeholder="Описание"
        value={post.body}
        onChange={(e) => setPost({ ...post, body: e.target.value })}
      />

      <MyButton type="submit" onClick={addNewPost}>
        Создать
      </MyButton>
    </form>
  );
};