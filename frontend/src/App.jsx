import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout.jsx";
import Test from './pages/testPage.jsx';
import SignInPage from "./pages/SignInPage.jsx";

function App() {
  

  return (
    
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="test" element={<Test />} />
          <Route path="sign-in" element={<SignInPage />} />
          {/* <Route path="to-do" element={<ToDo />} />
          <Route path="home" element={<Home />} />
          <Route path="" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  
  )
}

export default App
