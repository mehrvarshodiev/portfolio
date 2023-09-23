import { React, useLayoutEffect, useState } from 'react';
import './App.css';
import MainContent from './components/MainContent/MainContent';
import Preloader from './components/Preloader/Preloader';

const App = () => {
  const [loader, setLoader] = useState(true);

  useLayoutEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  }, []);

  return (
    <div className='container'>{loader ? <Preloader /> : <MainContent />}</div>
  );
};

export default App;
