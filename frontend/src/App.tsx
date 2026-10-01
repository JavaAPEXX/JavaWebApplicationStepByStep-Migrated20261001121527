import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './styles/modern-ui.css';
import CommonNavigationComponent from './CommonNavigationComponent';
import Footer from './src/components/layout/Footer';
import HeaderPartial from './src/components/HeaderPartial';
import LoginComponent from './LoginComponent';
import ListTodos from './src/components/ListTodos';
import AddTodoPage from './src/components/AddTodoPage';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="modern-app-root">
        <header className="modern-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ fontWeight: 700, fontSize: '1.1rem', color: '#2563eb' }}>Modernized Application</span>
          </div>
          <nav style={{ display: 'flex', gap: '1rem' }}>
            <Link to="/" style={{ textDecoration: 'none', color: '#475569', fontWeight: 500 }}>Home</Link>
          </nav>
        </header>
        <main className="modern-main-content">
          <Routes>
        <Route path="/" element={<CommonNavigationComponent />} />
        <Route path="/commonnavigation" element={<CommonNavigationComponent />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/headerpartial" element={<HeaderPartial />} />
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/listtodos" element={<ListTodos />} />
        <Route path="/addtodopage" element={<AddTodoPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
