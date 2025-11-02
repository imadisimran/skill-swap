import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import SkillCard from './SkillCard';

const CategoryItems = () => {
    const allData=useLoaderData()
    const {id}=useParams()
    // console.log(id)
    const [categoryData,setCategoryData]=useState([])
    useEffect(()=>{
        const categoryData=allData.filter(data=>data.category_id===id)
        setCategoryData(categoryData);
    },[allData,id])
    return (
        <div className='grid grid-cols-2 gap-5'>
            {categoryData.map(singleData=><SkillCard singleData={singleData} key={singleData.skillId}></SkillCard>)}
        </div>
    );
};

export default CategoryItems;