import {Component} from 'react'
import './index.css'
import CommentItem from '../CommentItem'
import {v4} from 'uuid'
const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
class Comments extends Component {
  state = {nameInput: '', commentInput: '', commentList: []}

  onNameInput = event => {
    this.setState({nameInput: event.target.value})
  }

  onCommentInput = event => {
    this.setState({commentInput: event.target.value})
  }

  onAddComment = event => {
    event.preventDefault()
    const {nameInput, commentInput} = this.state
    const initialContainerBackgroundClassName = `inital-container ${
      initialContainerBackgroundClassNames[
        Math.ceil(Math.random() * initialContainerBackgroundClassNames.length - 1
      )]
    }`
    const newComment = {
      id:v4(),
      name: nameInput,
      comment: commentInput,
      date: new Date(),
      isLiked: false,
      initalClassName: initialContainerBackgroundClassName,
    }
    this.setState(preState => ({
      commentList: [...preState.commentList, newComment],
      nameInput: '',
      commentInput: '',
    }))
  }

  renderCommentsList = () => {
    const {commentsList} = this.state
    return commentsList.map(eachComment => (
      <CommentItem
        key={eachComment.id}
        eachDetails={eachComment}
        toggleLiked={this.toggleLiked}
        deleteComment={this.deleteComment}
      />
    ))
  }
  toggleLiked = id => {
    const {commentsList} = this.state
    this.setState({
      commentsList: commentsList.filter(eachComment => {
        eachComment.id !== id
      }),
    })
  }

  deleteComment = id => {
    const {commentsList} = this.state
    this.setState({
      commentsList: commentsList.filter(eachComment => {
        eachComment.id === id
      }),
    })
  }
  render() {
    const {nameInput, commentInput, commentsList} = this.state
    return (
      <div className="bg-co">
        <div className="comments-co">
          <h1 className="comments">Comments</h1>
          <p className="paragraph">say something about 4.0 Technologies</p>
          <div className="container">
            <form className="form" onSubmit={this.onAddComment}>
              <input
                type="search"
                className="searchName"
                onChange={this.onNameInput}
                value={nameInput}
              />
              <textarea
                type="search"
                className="searchDescription"
                value={textarea}
                onChangeDescription={this.onCommentInput}
              />
              <button type="button">button</button>
            </form>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
              classNames="comment-img"
            />
          </div>
          <hr className="line" />
          <p>
            <span>{commentsList.length}</span>
            comments
          </p>
          <ul>{this.renderCommentsList}</ul>
        </div>
      </div>
    )
  }
}
export default Comments
