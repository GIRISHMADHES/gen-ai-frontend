import { useAuth } from './auth/AuthContext';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import LoginPage from './pages/Login';
import ResumeUpload from './pages/ResumeUpload';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';


function App() {

  const {isAuthenticated, loading} = useAuth();
  
  if (loading) {
    return <div className="loading-name">Loading...</div>;
  }
  
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/login' element={isAuthenticated ? <Dashboard/> : <LoginPage />} />
          <Route path='/dashboard' element={isAuthenticated ? (<Dashboard />) : (<LoginPage/>)} />
          <Route path='/resumeUpload' element={isAuthenticated ? (<ResumeUpload />) : (<LoginPage />)} />
          <Route path='*' element={isAuthenticated ? <Dashboard/> : <LoginPage/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
