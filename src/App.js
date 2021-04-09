import React, { useState } from 'react'
import './App.css';
import data from './data'
import Categories from './Categories';
import Menu from './Menu';

const allCategories = ['all', ...new Set(data.map((item) => item.category))]
console.log(allCategories);

function App() {



  const [menu, setMenus] = useState(data)
  const [category, setCategories] = useState(allCategories)

  const filterCategory = (category) => {
    if (category === 'all') {
      setMenus(data)
      return
    }
    const newItems = data.filter((item) => item.category === category);
    setMenus(newItems)
  }
  return (
    <div className="app">
      <div className='categoryContainer'>
        <Categories categories={allCategories} filterCategory={filterCategory} />
      </div>
      <div className='menuContainer'>
        <Menu items={menu} />
      </div>
    </div>
  );
}

export default App;
