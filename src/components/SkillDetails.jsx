import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import BookSessionForm from "./BookSessionForm";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

const SkillDetails = () => {
  const allData = useLoaderData();
  const { skillId } = useParams();
  const [skillData, setSkillData] = useState({});
  useEffect(() => {
    const skillData = allData.find(
      (data) => data.skillId === parseInt(skillId)
    );
    setSkillData(skillData);
  }, [allData, skillId]);

  //   console.log(skillData)

  const [visibility,setVisibility]=useState(false)

  return (
    <>
      <div className="card card-side bg-base-100 w-11/12 mx-auto p-5 border border-gray-200">
        <figure>
          <img
            src={skillData.image}
            alt="Movie"
            className="w-96"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {skillData.skillName} by{" "}
            <span className="text-primary">{skillData.providerName}</span>
          </h2>
          <p>Description: {skillData.description}</p>
          <p>Email:{skillData.providerEmail}</p>
          <p>
            Price: <span className="text-xl font-bold">${skillData.price}</span>
          </p>
          <p>Rating: {skillData.rating}</p>
          <p>Empty Seats: {skillData.slotsAvailable}</p>
          <div className="card-actions justify-between">
            <div className="badge badge-soft badge-primary">
              {skillData.category}
            </div>
            <button onClick={()=>setVisibility(!visibility)} className="btn btn-primary">Book a session{visibility ? <FaArrowDown></FaArrowDown>:<FaArrowUp></FaArrowUp>}</button>
          </div>
        </div>
      </div>

    <BookSessionForm visibility={visibility}></BookSessionForm>

    </>
  );
};

export default SkillDetails;
