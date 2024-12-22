import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./Layout/MainLayout";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Committee } from "./Pages/Committee";
import { ImportantDates } from "./Pages/ImportantDates";
import { Workshop } from "./Pages/Workshop";
import { Keynotes } from "./Pages/Keynotes";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="committee" element={<Committee />} />
          <Route path="impdates" element={<ImportantDates />} />
          <Route path="workshop" element={<Workshop />} />
          <Route path="keynotes" element={<Keynotes />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
