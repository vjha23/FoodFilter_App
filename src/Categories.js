import React from 'react'

function Categories({ categories, filterCategory }) {
    return (
        <div className='categorieSection'>
            {categories.map((category, index) => {
                return (
                    <button key={index} className='btn' onClick={() => filterCategory(category)}>{category}</button>
                )
            })}
        </div>
    )
}

export default Categories
