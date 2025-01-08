import { createBrowserRouter } from 'react-router-dom'
import Layout from '../pages/layout/Layout';
import MovieContainer from '../pages/movie/MovieContainer';
import MainContainer from '../pages/main/MainContainer';
import MovieBlogContainer from '../pages/movieblog/MovieBlogContainer';
import WeekMovieContainer from '../pages/weekmovie/WeekMovieContainer';
import MovieReviewContainer from '../pages/movie/moviereview/MovieReviewContainer';
import MyPageContainer from '../pages/mypage/MyPageContainer';
import MylistConatiner from '../pages/mypage/mylist/MylistConatiner';
import CreateBlogContainer from '../pages/movieblog/Myblog/CreateBlogContainer';
import MyBlogContainer from '../pages/movieblog/Myblog/MyBlogContainer';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index : true,
        element : <MainContainer/>
      },
      {
        path : "/movie",
        element : <MovieContainer/>
      },
      {
        path : "/movieblog",
        element : <MovieBlogContainer/>
      },
      {
        path : "/weekmovie",
        element : <WeekMovieContainer/>
      },
      {
        path : "/movie/moviereview/",
        element : <MovieReviewContainer/>
      },
      {
        path : "/mypage",
        element : <MyPageContainer/>
      },
      {
        path: "/my-list",
        element : <MylistConatiner/>
      },
      {
        path : "/createblog",
        element : <CreateBlogContainer/>
      },
      {
        path : "/myblog",
        element : <MyBlogContainer/>
      }
    ]
  }
]);



export default router;