import React from 'react'
import Items from './Items'
import './App.css'

function Menu({ items, }) {
    return (
        <div className='menuItems'>
            {items.map((menuItems) => {
                return (
                    <Items key={menuItems.id} {...menuItems} />
                )
            })}
        </div>
    )
}

export default Menu
