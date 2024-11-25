

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout.jsx";
import Test from './pages/testPage.jsx';
import AllEntries from "./pages/AllEntries.jsx";
import NewEntry from "./pages/NewEntryPage.jsx";

function App() {


  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route path="test" element={<Test />} />
          <Route path="all-entries" element={<AllEntries />} />
          <Route path="new-entry" element={<NewEntry />} />
          {/* <Route path="to-do" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App
