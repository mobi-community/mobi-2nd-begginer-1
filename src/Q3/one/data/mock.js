export const mock = {
  title: "제목",
  content: "글",
  heartNum: 10,
  commentNum: 10,
  postImg: "",
  user: {
    userId: "글쓴이",
    userImg: "",
  },
  commentList: [
    {
      commentId: 1,
      commentContent: "댓글1",
      user: {
        commentUserId: 1,
        commentUserImg: "",
      },
    },
    {
      commentId: 2,
      commentUserId: 2,
      commentContent: "댓글2",
      user: {
        commentUserId: 1,
        commentUserImg: "",
      },
    },
  ],
};
