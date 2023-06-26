import { useAppDispatch } from '../../app/hooks'
import { IPost } from '../../typings'
import { switchToEditPostComponent, switchToViewPostComponent } from '../navigations/navigationSlice'
import { downvoteBlogPost, upvoteBlogPost, toggleFavorite, deleteBlogPost, setCurrentPost } from './postSlice'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const BlogCard = (props: { posts: IPost[] }) => {
  const dispatch = useAppDispatch()

  return (
    <>
      {props.posts.map((post) => {
        return (
          <section className="card" key={post.id}>
            <div className="card-header">
              <span
                className="edit-icon"
                onClick={() => {
                  dispatch(setCurrentPost(post))
                  dispatch(switchToEditPostComponent())
                }}>
                ✎
              </span>
              <h1 className="delete-icon" onClick={() => dispatch(deleteBlogPost(post.id))}>
                x
              </h1>
            </div>
            <section
              className="card-body"
              onClick={() => {
                dispatch(setCurrentPost(post))
                dispatch(switchToViewPostComponent())
              }}>
              <h1 className="card-title">{post.title.length > 150 ? post.title.slice(0, 150) + '...' : post.title}</h1>
              <p className="card-summary">{post.content.length > 120 ? post.content.slice(0, 120) + '...' : post.content}</p>
            </section>
            <section className="card-bottom">
              <section onClick={() => dispatch(toggleFavorite(post.id))}>
                <span className="favorite">{post.isFavorite ? '♥' : '♡'}</span>
              </section>
              <section className="rating-section">
                <span className="upvote" onClick={() => dispatch(upvoteBlogPost(post.id))}>
                  ⇧
                </span>
                <span className="vote-counter">{post.voteCount}</span>
                <span className="downvote" onClick={() => dispatch(downvoteBlogPost(post.id))}>
                  ⇩
                </span>
              </section>
            </section>
          </section>
        )
      })}
    </>
  )
}

export default BlogCard
