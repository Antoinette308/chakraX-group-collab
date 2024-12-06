import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout.jsx";
import ToDoListPage from "./pages/todoList.jsx"
import Journal from "./pages/Journal/Journal.jsx";
import NewEntry from "./pages/Journal/JournalNewEntry.jsx";
import ViewEntry from "./pages/Journal/JournalViewEntry.jsx";
import EditEntry from "./pages/Journal/JournalEditEntry.jsx";
import { useState } from "react";
import EnergyTracker from './pages/EnergyTracker.jsx'
import HabitTrackerPage from "./pages/HabitTrackerPage.jsx";
import Test from './pages/testPage.jsx';
import Rewards from "./pages/Rewards.jsx";

function App() {
  const [entries, setEntries] = useState([]);

  const handleSave = (newEntry) => {
    setEntries((prevEntries) => [newEntry, ...prevEntries]);
  };

  const handleUpdate = (updatedEntry) => {
    setEntries((prevEntries) =>
      prevEntries.map((entry) => (
        entry.id === updatedEntry.id ? updatedEntry : entry))
    );
  };
   
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route path="journal" element={<Journal entries={entries} handleSave={handleSave} handleUpdate={handleUpdate} />} />
          <Route path="journal/new-entry" element={<NewEntry handleSave={handleSave} />} />
          <Route path="todo-list" element={<ToDoListPage />} />
          <Route path="journal/:id" element={<ViewEntry entries={entries} />} />
          <Route path="journal/edit/:id" element={<EditEntry entries={entries} handleUpdate={handleUpdate} />} />
          <Route path="energy-tracker" element={<EnergyTracker />}/>
          <Route path="habit-tracker" element={<HabitTrackerPage />} />
          <Route path="test" element={<Test />} />
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
