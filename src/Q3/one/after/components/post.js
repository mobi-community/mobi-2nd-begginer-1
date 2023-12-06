const Post = ({ mock }) => {
  const { title, postImg, content, heartNum, commentNum } = mock;
  return (
    <>
      <img src={postImg} alt="사진" />
      <h1>{title}</h1>
      <p>{content}</p>
      <div>{heartNum}</div>
      <div>{commentNum}</div>
    </>
  );
};

export default Post;
