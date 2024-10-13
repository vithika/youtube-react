import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./utils/store";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";

const appRouter = createBrowserRouter([
  {
    path: "",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
    ],
  },
]);
function App() {
  return (
    <Provider store={store}>
      <div className="font-bold">
        <Header></Header>
        <RouterProvider router={appRouter} />
        {/* <Body></Body> */}
      </div>
    </Provider>
  );
}

export default App;
