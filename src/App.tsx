import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import NoteEditor from './components/NoteEditor';
import NoteManager from './components/NoteManager';
import AppLayout from './components/Layout';

function App() {
  return (
    <Router>
      <AppLayout>
        <Routes>
          <Route path="/note/:id" element={<NoteEditor />} />
          <Route path="/" element={
            <>
              <NoteManager />
            </>
          }
          />
        </Routes>
      </AppLayout>
    </Router>
  );
}

export default App;
