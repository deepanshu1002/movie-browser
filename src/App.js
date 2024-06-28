import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Browse from "./components/Browse/Browse";
import Search from "./components/Search/Search";
import Body from "./components/Body/Body";
import { Provider } from "react-redux";
import store from "./utils/appStore";
import FavouriteMovies from "./components/FavouriteMovies/FavouriteMovies";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Provider store={store}>
          <Body />
        </Provider>
      ),
      children: [
        {
          path: "/",
          element: <Browse />,
        },
        {
          path: "/search",
          element: <Search />,
        },
        {
          path: "/favourites",
          element: <FavouriteMovies />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
