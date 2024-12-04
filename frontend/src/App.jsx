

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout.jsx";
import Test from './pages/testPage.jsx';
import Journal from "./pages/Journal.jsx";
import NewEntry from "./pages/JournalNewEntry.jsx";
import ViewEntry from "./pages/JournalViewEntry.jsx";
import EditEntry from "./pages/JournalEditEntry.jsx";
import { useState } from "react";

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
          <Route path="test" element={<Test />} />
          <Route path="journal" element={<Journal entries={entries} handleSave={handleSave} handleUpdate={handleUpdate} />} />
          <Route path="journal/new-entry" element={<NewEntry handleSave={handleSave} />} />
          <Route path="journal/:id" element={<ViewEntry entries={entries} />} />
          <Route path="journal/edit/:id" element={<EditEntry entries={entries} handleUpdate={handleUpdate} />} />
          {/* <Route path="to-do" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App
