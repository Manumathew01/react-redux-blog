import { FormEventHandler } from 'react'

const PostInputForm = (props: {
  submitPost: FormEventHandler<HTMLFormElement>
  title: string
  setTitle: (title: string) => void
  content: string
  setContent: (content: string) => void
}) => {
  return (
    <div>
      <form className="form-card" onSubmit={props.submitPost}>
        <h1>Create a new post</h1>
        <input
          type="text"
          className="title-input"
          placeholder="Blog title"
          value={props.title}
          onChange={(e) => props.setTitle(e.target.value)}
        />
        <textarea
          className="content-input"
          placeholder="Blog content"
          value={props.content}
          onChange={(e) => props.setContent(e.target.value)}></textarea>
        <input type="submit" value="Publish" className="post-button" />
      </form>
    </div>
  )
}

export default PostInputForm
