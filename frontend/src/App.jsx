

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout.jsx";
import Test from './pages/testPage.jsx';
import HabitTrackerPage from "./pages/HabitTrackerPage.jsx";

function App() {
  

  return (
    
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="test" element={<Test />} />
          <Route path="habit-tracker" element={<HabitTrackerPage />} />
          {/* <Route path="to-do" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  
  )
}

export default App
