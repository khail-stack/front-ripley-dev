import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './app/components/layout';
import CustomersPage from './app/pages/customers';
import DashboardPage from './app/pages/dashboard';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<DashboardPage />} />
          <Route path='customers' element={<CustomersPage />} />
          <Route path="*" element={<main><p>No hay nada aquí!</p></main>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
