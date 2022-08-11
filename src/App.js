import React, { useState } from 'react'
import Post from './Post'
import Header from './Header'
import { func } from 'prop-types'

function App() {
  const [posts, setPosts] = useState(
    [
      { id: Math.random(), title: 'Title#01', subtitle: 'Subtitle#01', likes: 20, read: false },
      { id: Math.random(), title: 'Title#02', subtitle: 'Subtitle#02', likes: 10, read: true },
      { id: Math.random(), title: 'Title#03', subtitle: 'Subtitle#03', likes: 15, read: true }, 
    ]
  )
  
  function handleRemovePost(postId) {
    setPosts((prevState) => (
    prevState.filter(post => post.id !== postId)
    ))
  }

  function handleRefresh() {
    setPosts(prevState => [
      ...prevState,
      {id:Math.random(), title: `Title#0${prevState.length + 1}`, subtitle: 'Subtitle#01', likes: 20}])
  }
  return (
    <>
      <Header title = "Zeca's Blog">

        Novidades de 2022
        <button onClick={handleRefresh}>Atualizar</button>
      </Header>

      <hr/>

      {posts.map(post => 
        <Post 
          key={post.id}
          onRemove = {handleRemovePost}
          post = {post}
        />
      )}
    </>
  )
}

export default App
