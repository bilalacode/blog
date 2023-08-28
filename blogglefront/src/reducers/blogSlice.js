import { createSlice } from "@reduxjs/toolkit";
import blogService from "../services/blogs";

const blogSlice = createSlice({
  name: "blogs",
  initialState: [],
  reducers: {
    setBlogs: (state, action) => {
      return action.payload;
    },
    setSingleBlog: (state, action) => {
      const updatedBlogs = state.map((blog) =>
        blog.id === action.payload.id ? action.payload : blog
      );
      return updatedBlogs;
    },
  },
});

export const { setBlogs, setSingleBlog } = blogSlice.actions;
export default blogSlice.reducer;

export const fetchBlogs = () => async (dispatch) => {
  try {
    const blogs = await blogService.getAll();
    dispatch(setBlogs(blogs));
  } catch (error) {
    console.log(error);
  }
};

export const fetchSingleBlog = (id) => async (dispatch) => {
  try {
    const blog = await blogService.getById(id);
    dispatch(setSingleBlog(blog));
  } catch (error) {
    console.log(error);
  }
};
