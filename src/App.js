import React from 'react'
import Post from './Post'
const category = 'Posts da semana'

function App() {
  return (
    <>
      <h1>Jstack's Blog</h1>
      <h2>{category}</h2>
      <hr />
      <Post
        title="Título da notícia 1"
        subtitle="subtítulo da notícia 1"
      ></Post>

      <Post
        title="Título da notícia 1"
        subtitle="subtítulo da notícia 1"
      ></Post>

      <Post
        title="Título da notícia 1"
        subtitle="subtítulo da notícia 1"
      ></Post>

      <Post
        title="Título da notícia 1"
        subtitle="subtítulo da notícia 1"
      ></Post>
    </>
  )
}

export default App
