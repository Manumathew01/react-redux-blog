import { useState } from 'react'
import PostInputForm from './PostInputForm'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { selectAllPosts, updateBlogPost } from './postSlice'
import { switchToAllPostsComponent } from '../navigations/navigationSlice'

const EditPost = () => {
  const dispatch = useAppDispatch()
  const allPosts = useAppSelector(selectAllPosts)
  const [title, setTitle] = useState(allPosts.currentPost.title)
  const [content, setContent] = useState(allPosts.currentPost.content)

  const updatePost = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(
      updateBlogPost({
        id: allPosts.currentPost.id,
        content,
        title
      })
    )
    dispatch(switchToAllPostsComponent())
  }
  return (
    <>
      <PostInputForm submitPost={updatePost} title={title} content={content} setTitle={setTitle} setContent={setContent} />
    </>
  )
}
export default EditPost
