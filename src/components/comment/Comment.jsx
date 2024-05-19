import moment from "moment";
import "./_comment.scss";

const Comment = ({ comment }) => {
  const { authorDisplayName, authorProfileImageUrl, publishedAt, textDisplay } =
    comment;

  return (
    <div className='p-2 comment d-flex'>
      <img
        src={
          authorProfileImageUrl ||
          "https://img.favpng.com/25/13/19/samsung-galaxy-a8-a8-user-login-telephone-avatar-png-favpng-dqKEPfX7hPbc6SMVUCteANKwj.jpg"
        }
        alt=''
        className='rounded-circle'
      />
      <div className='comment__body'>
        <p className='mb-1 comment__header'>
          {authorDisplayName} • {moment(publishedAt).fromNow()}
        </p>
        <p className='mb-0'>{textDisplay}</p>
      </div>
    </div>
  );
};

export default Comment;
