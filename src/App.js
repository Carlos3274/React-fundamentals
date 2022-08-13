import React, { useState, createContext } from 'react'
import Post from './Post'
import Header from './Header'
import { func } from 'prop-types'

export const ThemeContext = createContext('dark')

function App() {
  const [theme, setTheme] = useState('dark')
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

  function handleToggleTheme() {
    setTheme((prevState) => prevState == 'dark' ? 'light' : 'dark')
  }

  function handleRefresh() {
    setPosts(prevState => [
      ...prevState,
      {id:Math.random(), title: `Title#0${prevState.length + 1}`, subtitle: 'Subtitle#01', likes: 20}])
  }
  return (
    <ThemeContext.Provider value={{
      theme,
      onToggleTheme : handleToggleTheme,
      }}>
      <Header
      title = "Zeca's Blog">
        Novidades de 2022
        
      </Header>
      <button onClick={handleRefresh}>Atualizar</button>
      <hr/>

      {posts.map(post => 
        <Post 
          key={post.id}
          onRemove = {handleRemovePost}
          post = {post}
        />
      )}
    </ThemeContext.Provider>
  )
}

export default App
