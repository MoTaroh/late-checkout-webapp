import React from 'react';
import TopPage from './pages/TopPage';
import HotelListPage from './pages/HotelListPage';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
        <TopPage/>
        <HotelListPage></HotelListPage>
        <Footer></Footer>
    </div>
  );
}

export default App;
