import React from 'react'
import PostHeader from './PostHeader'
import PropTypes from 'prop-types'

function Post(props) {
  return (
    <>
      <article>
       <PostHeader
        onRemove = {props.onRemove}
        post = {{
          id: props.post.id,
          title: props.post.title,
          read: props.post.read
        }}
       />
        <br />
        <small>{props.post.subtitle}</small>
      </article>
      Likes: {props.post.likes}
      <br/>
    </>
  )
}
export default Post

Post.propTypes = {
  onRemove: PropTypes.func.isRequired,
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    read: PropTypes.bool.isRequired
  }).isRequired
}
