import React from 'react';
import {Header} from './components/header.tsx';
import { Cards } from './components/cards/cards.tsx';
//import Pagination from './Pages/Pagination';


const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Cards />
    </div>
  );
};

export default App;