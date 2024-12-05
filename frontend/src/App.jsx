import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout.jsx";
import Test from './pages/testPage.jsx';
import SignUpPage from "./pages/SignUpPage.jsx";

function App() {
  

  return (
    
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="test" element={<Test />} />
          <Route path="sign-up" element={<SignUpPage />} />
          {/* <Route path="to-do" element={<ToDo />} />
          <Route path="home" element={<Home />} />
          <Route path="" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  
  )
}

export default App
