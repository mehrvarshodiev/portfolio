import { React, lazy, Suspense } from 'react';
import './App.css';
const MainContent = lazy(() => import('./components/MainContent/MainContent'));
const Preloader = lazy(() => import('./components/Preloader/Preloader'));

const App = () => {
  return (
    <div className='container'>
      <Suspense fallback={<Preloader />}>
        <MainContent />
      </Suspense>
    </div>
  );
};

export default App;
