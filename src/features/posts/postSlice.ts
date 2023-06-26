import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'
import { IPost, IAllPosts } from '../../typings'

const defaultCurrentPost: IPost = {
  id: 0,
  title: '',
  content: '',
  voteCount: 0,
  isFavorite: false
}

const initialState: IAllPosts = { allPosts: [], currentPost: defaultCurrentPost }

export const postSlice = createSlice({
  name: 'allPosts',
  initialState: initialState,
  reducers: {
    saveBlogPost: (state, actions: { payload: IPost }) => {
      state.allPosts.push(actions.payload)
    },

    deleteBlogPost: (state, actions: { payload: number }) => {
      state.allPosts.splice(
        state.allPosts.findIndex((i) => {
          return i.id === actions.payload
        }),
        1
      )
    },

    upvoteBlogPost: (state, actions: { payload: number }) => {
      const updatedPost = state.allPosts.map((post) => {
        if (post.id === actions.payload) {
          return { ...post, voteCount: post.voteCount + 1 }
        }
        return post
      })
      state.allPosts = updatedPost
    },

    downvoteBlogPost: (state, actions: { payload: number }) => {
      const updatedPost = state.allPosts.map((post) => {
        if (post.id === actions.payload) {
          return { ...post, voteCount: post.voteCount - 1 }
        }
        return post
      })
      state.allPosts = updatedPost
    },

    toggleFavorite: (state, actions: { payload: number }) => {
      const updatedPosts = state.allPosts.map((post) => {
        if (post.id === actions.payload) {
          return { ...post, isFavorite: !post.isFavorite }
        }
        return post
      })
      state.allPosts = updatedPosts
    },

    setCurrentPost: (state, actions: { payload: IPost }) => {
      state.currentPost = actions.payload
      return state
    },

    updateBlogPost: (state, actions: { payload: { id: number; content: string; title: string } }) => {
      const updatedPosts = state.allPosts.map((post) => {
        if (post.id === actions.payload.id) {
          return { ...post, content: actions.payload.content, title: actions.payload.title }
        }
        return post
      })
      state.allPosts = updatedPosts
    }
  }
})

export const { saveBlogPost, deleteBlogPost, upvoteBlogPost, downvoteBlogPost, toggleFavorite, setCurrentPost, updateBlogPost } =
  postSlice.actions

export const selectAllPosts = (state: RootState) => state.posts

export default postSlice.reducer
