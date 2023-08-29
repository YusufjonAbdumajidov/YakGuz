import React from 'react';
import Navbar from './Navbar';

const Main = () => {
  return (
    <div className='mainContainer'>
        <div className="coverBack"></div>
        <main>
          <Navbar />
          <p>Amu-Qashqadaryo irrigatsiya tizimlari havza boshqarmasi xuzuridagi</p>  
          <h1>Yakkabog-G’uzor irrigatsiya tizimi boshqarmasi</h1>
          <button>Vazirlik rasmiy sayti</button>
        </main>
    </div>
  )
}

export default Main