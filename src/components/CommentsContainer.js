import React from "react";

const commentsData = [
  {
    name: "Vithika Gupta",
    text: "This is my first comment",
    replies: [],
  },
  {
    name: "Vithika Gupta",
    text: "This is my second comment",
    replies: [
      {
        name: "Vithika Gupta",
        text: "This is my  nested comment",
        replies: [
          {
            name: "Vithika Gupta",
            text: "This is my comment",
            replies: [
              {
                name: "Vithika Gupta",
                text: "This is my comment",
                replies: [
                  {
                    name: "Vithika Gupta",
                    text: "This is my comment",
                    replies: [
                      {
                        name: "Vithika Gupta",
                        text: "This is my comment",
                        replies: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Vithika Gupta",
    text: "This is my comment",
    replies: [
      { name: "Vithika Gupta", text: "This is my comment", replies: [] },
    ],
  },
  {
    name: "Vithika Gupta",
    text: "This is my comment",
    replies: [
      {
        name: "Vithika Gupta",
        text: "This is my comment",
        replies: [
          { name: "Vithika Gupta", text: "This is my comment", replies: [] },
        ],
      },
    ],
  },
];
const Comment = ({ data }) => {
  const { name, text, replies } = data;

  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg">
      <img
        className="w-12 h-12"
        alt="user"
        src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p className="font-light">{text}</p>
      </div>
    </div>
  );
};

const CommentList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 border border-l-black ml-5">
        <CommentList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments</h1>
      {/* <Comment data={commentsData[0]}></Comment> */}
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
