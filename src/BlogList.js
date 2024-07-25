const BlogList = ({ allBlogs, title, deleteBlog }) => {
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {allBlogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written By {blog.author}</p>
          <button onClick={() => deleteBlog(blog.id)}>Delete Blog</button>

        </div>
      ))}
    </div>
  );
}

export default BlogList;