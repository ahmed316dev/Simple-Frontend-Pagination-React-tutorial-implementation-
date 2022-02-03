import React from 'react'

const Posts = ({ currentPosts, loading }) => {
  if (loading)
    return <div className="spinner-border text-secondary" role="status"></div>

  return (
    <ul className="align-self-center list-group mb-4">
      {currentPosts.map(post => (
        <li key={post.id} className="list-group-item">
          {post.title}
        </li>
      ))}
    </ul>
  )
}

export default Posts
