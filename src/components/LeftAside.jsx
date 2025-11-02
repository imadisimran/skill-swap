import React, { use } from 'react';
import { NavLink } from 'react-router';
const categoryPromise=fetch('/categoryData.json').then(response=>response.json())
const LeftAside = () => {
    const categoriesData = use(categoryPromise)
    const categories = categoriesData.map(categoryData => <li key={categoryData.id}><NavLink className={({isActive})=>`w-full py-3 block rounded-xl px-5 ${isActive && 'font-bold bg-base-300'}`} to={`category/${categoryData.id}`}>{categoryData.name} {categoryData.emoji}</NavLink></li>)
    return (

        <ul className='space-y-5'>
            {categories}
        </ul>
    );
};

export default LeftAside;