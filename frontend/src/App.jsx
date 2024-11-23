

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout.jsx";
import Test from './pages/testPage.jsx';
import HabitTracker from "./pages/HabitTracker.jsx";

function App() {
  

  return (
    
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="test" element={<Test />} />
          <Route path="habit-tracker" element={<HabitTracker />} />
          {/* <Route path="to-do" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  
  )
}

export default App
