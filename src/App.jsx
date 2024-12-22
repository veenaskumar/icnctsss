import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./Layout/MainLayout";
import { Home } from "./Pages/Home";
import { AboutKEC } from "./Pages/AboutKEC";
import { AboutICNCTSSS } from "./Pages/AboutICNCTSSS";
import { Committee } from "./Pages/Committee";
import { ImportantDates } from "./Pages/ImportantDates";
import { Keynotes } from "./Pages/Keynotes";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="aboutkec" element={<AboutKEC />} />
          <Route path="abouticnctsss" element={<AboutICNCTSSS />} />
          <Route path="committee" element={<Committee />} />
          <Route path="impdates" element={<ImportantDates />} />
          <Route path="keynotes" element={<Keynotes />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
