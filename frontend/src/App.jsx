import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout.jsx";
import ToDoListPage from "./pages/todoList.jsx"
import Journal from "./pages/Journal.jsx";
import NewEntry from "./pages/JournalNewEntry.jsx";
import ViewEntry from "./pages/JournalViewEntry.jsx";
import EditEntry from "./pages/JournalEditEntry.jsx";
import { useState } from "react";
import EnergyTracker from './pages/EnergyTracker.jsx'
import HabitTrackerPage from "./pages/HabitTrackerPage.jsx";

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
          {/* <Route path="to-do" element={<ToDo />} />
          <Route path="home" element={<Home />} />
          <Route path="" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App
