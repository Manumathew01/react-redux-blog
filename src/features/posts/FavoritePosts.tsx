import { useAppSelector } from '../../app/hooks'
import BlogCard from './BlogCard'
import NoFavoritePosts from './NoFavoritePosts'
import { selectAllPosts } from './postSlice'

const FavoritePosts = () => {
  const { allPosts } = useAppSelector(selectAllPosts)
  const favoritePosts: any[] = allPosts.filter((post) => post.isFavorite)
  if (!favoritePosts.length) {
    return <NoFavoritePosts />
  }
  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
    <h1 style={{textAlign: 'center'}}>Favorite posts</h1>
      <BlogCard posts={favoritePosts} />
    </div>
  )
}
export default FavoritePosts
