import { useAppSelector } from '../../app/hooks'
import { selectAllPosts } from './postSlice'

const ViewPostDetails = () => {
  const allPosts = useAppSelector(selectAllPosts)

  return (
    <>
      <section className="view-post-container">
        <h1 className="view-post-title">{allPosts.currentPost.title}</h1>
        <p className="view-post-content">{allPosts.currentPost.content}</p>
      </section>
    </>
  )
}
export default ViewPostDetails
