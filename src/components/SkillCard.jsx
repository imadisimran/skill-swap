import React from 'react';

const SkillCard = ({singleData}) => {
    const {image,skillName,rating,price}=singleData
    return (
        <div>
            <img src={image} alt="" />
            <p>{skillName}</p>
            <p>{rating}</p>
            <p>{price}</p>
        </div>
    );
};

export default SkillCard;