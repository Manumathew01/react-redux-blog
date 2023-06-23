import { useState } from 'react'
import { IPost } from '../../typings'
import PostInputForm from './PostInputForm'
import { useAppDispatch } from '../../app/hooks'
import { saveBlogPost } from './postSlice'
import { switchToAllPostsComponent } from '../navigations/navigationSlice'

const AddNewPost = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const dispatch = useAppDispatch()

  const submitPost = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const post: IPost = {
      id: Date.now(),
      title: title,
      content: content,
      voteCount: 0,
      isFavorite: false
    }
    console.log(post)
    dispatch(saveBlogPost(post))
    dispatch(switchToAllPostsComponent())
  }
  return (
    <>
      <PostInputForm submitPost={submitPost} title={title} content={content} setTitle={setTitle} setContent={setContent} />
    </>
  )
}

export default AddNewPost
