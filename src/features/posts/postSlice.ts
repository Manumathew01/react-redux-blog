import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'
import { IPost, IAllPosts } from '../../typings'

const initialState: IAllPosts = { allPosts: [] }

export const postSlice = createSlice({
  name: 'allPosts',
  initialState: initialState,
  reducers: {
    saveBlogPost: (state, actions: { payload: IPost }) => {
      state.allPosts.push(actions.payload)
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
    }
  }
})

export const { saveBlogPost, upvoteBlogPost, downvoteBlogPost, toggleFavorite } = postSlice.actions

export const selectAllPosts = (state: RootState) => state.posts

export default postSlice.reducer
