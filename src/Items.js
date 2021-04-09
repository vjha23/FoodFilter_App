import React from 'react'

function Items({ id, title, img, price, desc }) {

    return (
        <div className='itemContainer'>
            <div className='imgContainer'>
                <img className='imageFood' src={img} alt={title} />
            </div>
            <div className='nameContainer'>
                <h3 className='title'>{title}</h3>
                <h4 className='price'>${price}</h4>
            </div>
            <div className='desc'>{desc}</div>
        </div>
    )
}

export default Items
