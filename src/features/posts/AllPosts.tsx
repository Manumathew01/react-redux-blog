import { useAppSelector } from '../../app/hooks'
import BlogCard from './BlogCard'
import NoPosts from './NoPosts'
import { selectAllPosts } from './postSlice'

const AllPosts = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { allPosts } = useAppSelector(selectAllPosts)
  if (!allPosts.length) {
    return <NoPosts />
  }
  return (
    <>
      <BlogCard posts={allPosts} />
    </>
  )
}
export default AllPosts
