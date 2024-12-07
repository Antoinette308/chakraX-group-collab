import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout.jsx";
import ToDoListPage from "./pages/todoList.jsx"
import Journal from "./pages/Journal/Journal.jsx";
import NewEntry from "./pages/Journal/JournalNewEntry.jsx";
import ViewEntry from "./pages/Journal/JournalViewEntry.jsx";
import EditEntry from "./pages/Journal/JournalEditEntry.jsx";
import EnergyTracker from './pages/EnergyTracker.jsx'
import HabitTrackerPage from "./pages/HabitTrackerPage.jsx";
import Test from './pages/testPage.jsx';
import SignUpPage from "./pages/SignUpPage.jsx";
import SignInPage from "./pages/SignInPage.jsx";
import Rewards from "./pages/Rewards.jsx";

function App() {


  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route path="journal" element={<Journal />} />
          <Route path="journal/new-entry" element={<NewEntry  />} />
          <Route path="todo-list" element={<ToDoListPage />} />
          <Route path="journal/:id" element={<ViewEntry  />} />
          <Route path="journal/edit/:id" element={<EditEntry  />} />
          <Route path="energy-tracker" element={<EnergyTracker />}/>
          <Route path="habit-tracker" element={<HabitTrackerPage />} />
          <Route path="test" element={<Test />} />
          <Route path="sign-up" element={<SignUpPage />} />
          <Route path="sign-in" element={<SignInPage />} />
          <Route path="rewards" element={<Rewards />} />
          {/* <Route path="to-do" element={<ToDo />} />
          <Route path="home" element={<Home />} />
          <Route path="" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App
