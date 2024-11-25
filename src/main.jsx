import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import App from './App.jsx';
import LikedPage from '../src/pages/LikedPage';
import './index.css';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/liked' element={<LikedPage />} />
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>
);
