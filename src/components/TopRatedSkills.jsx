import React, { use } from "react";
import SkillCard from "./SkillCard";
import Marquee from "react-fast-marquee";

const topRatedSkillDataPromise = fetch("/topRated.json").then((res) =>
  res.json()
);

const TopRatedSkills = () => {
  const topRatedSkills = use(topRatedSkillDataPromise);
  return (
    <>

    <h2 className="text-2xl font-bold text-center">Top Rated Skills</h2>
        <Marquee speed={50} autoFill={true}>
      <div className="flex gap-5">
        {topRatedSkills.map((singleData) => (
          <div className="flex-1">
            <SkillCard
              singleData={singleData}
              key={singleData.SkillCard}
            ></SkillCard>
          </div>
        ))}
      </div>
    </Marquee>
    </>
  );
};

export default TopRatedSkills;
