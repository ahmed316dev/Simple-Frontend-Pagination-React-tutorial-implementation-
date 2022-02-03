import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Posts from './Posts'
import Paginations from './Paginations'

const App = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(10)

  useEffect(() => {
    ;(async () => {
      setLoading(true)
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
      setPosts(res.data)
      setLoading(false)
    })()
  }, [setLoading, setPosts])

  const paginate = pageNumber => {
    setCurrentPage(pageNumber)
  }

  // Get current posts
  const indexOfLastPost = postsPerPage * currentPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)
  return (
    <div className="d-flex flex-column   mt-5">
      <h1 className="align-self-center text-primary mb-3">My Blog</h1>
      <Posts loading={loading} currentPosts={currentPosts} />
      <div className=" mb-3 button-group align-self-center ">
        <button
          onClick={() => setPostsPerPage(5)}
          type="button"
          class="mr-2 btn btn-primary"
        >
          5 per page
        </button>
        <span> </span>
        <button
          onClick={() => setPostsPerPage(10)}
          type="button"
          class="btn btn-primary"
        >
          10 per page
        </button>
        <span> </span>
        <button
          onClick={() => setPostsPerPage(20)}
          type="button"
          class="btn btn-primary"
        >
          20 per page
        </button>
      </div>
      <Paginations
        currentPage={currentPage}
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
  )
}

export default App
