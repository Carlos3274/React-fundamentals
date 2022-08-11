import React from 'react'
import PropTypes from 'prop-types'

function Post(props) {
  /* if (props.post.read) {
    return <h2> {props.post.title} Já foi lido </h2>
  } */
  return (
    <>
      <article>
        <strong>{props.post.read ? <s>{props.post.title}</s> : props.post.title}</strong>
        <button onClick={() => props.onRemove(props.post.id)}>
          Remover
        </button>
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
    likes: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    read: PropTypes.bool.isRequired
  }).isRequired
  
}
