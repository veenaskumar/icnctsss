import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./Layout/MainLayout";
import { Home } from "./Pages/Home";
import { AboutKEC } from "./Pages/AboutKEC";
import { AboutICNCTSSS } from "./Pages/AboutICNCTSSS";
import { Committee } from "./Pages/Committee";
import { ImportantDates } from "./Pages/ImportantDates";

const routes = [
  {
    path: "/",
    element: <Home />,
    index: true,
  },
  {
    path: "/aboutkec",
    element: <AboutKEC />,
  },
  {
    path: "abouticnctsss",
    element: <AboutICNCTSSS />,
  },
  {
    path: "committee",
    element: <Committee />,
  },
  {
    path: "impdates",
    element: <ImportantDates />,
  },
];
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {routes.map((item) => (
            <Route
              key={item.path}
              path={item.path}
              index={item.index}
              element={item.element}
            />
          ))}
        </Route>
      </Routes>
    </>
  );
}

export default App;
