import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./Layout/MainLayout";
import { Home } from "./Components/Home";
import { About } from "./Components/About";
import { Committee } from "./Components/Committee";
import { ImportantDates } from "./Components/ImportantDates";
import { Workshop } from "./Components/Workshop";
import { Keynotes } from "./Components/Keynotes";
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
