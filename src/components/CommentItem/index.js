// Write your code here
import {formateDistanceToallow} from 'date-fns'
import './index.css'
const CommentItem = props => {
  const {eachDetails} = props
  const {id, name, comment, isLiked, date, initalClassName} = eachDetails
  const initial = name ? name[0].toUpperCase() : ''
  const likeTextClassName = isLiked ? 'button active' : 'button'
  const likeImgUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const postTime = formateDistanceToallow(date)
  const onClickLike = () => {
    const {toggleLiked}=props
    toggleLiked(id)
  }
  const onClickDelete = () => {
    const {deleteComment}=props
    deleteComment(id)
  }
  return (
    <li>
      <div>
        <div className={initalClassName}>
          <p>{initial}</p>
        </div>
        <p>{name}</p>
        <p>{postTime}ago</p>
      </div>
      <img src={likeImgUrl} />
      <button className={likeTextClassName} onClick={onClickLike}>
        Like
      </button>
      <button onClick={onClickDelete}>
        <img src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png" />
      </button>
    </li>
  )
}
export default CommentItem
