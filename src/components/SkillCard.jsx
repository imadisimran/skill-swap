import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { Link } from "react-router";
// ..
AOS.init();

// We receive the 'skill' object as a prop
function SkillCard({ singleData }) {
  // Destructure the properties from the skill object for easier use
  const { image, skillName, rating, price,skillId } = singleData;

  return (
    <div data-aos='flip-left'>
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img
            src={image}
            alt={skillName}
            className="h-48 w-full object-cover" // Tailwind classes for sizing
          />
        </figure>

        <div className="card-body">
          <h2 className="card-title">
            {skillName}
            {/* Optional: Add a 'NEW' badge if you want */}
            {/* <div className="badge badge-secondary">NEW</div> */}
          </h2>

          <div className="flex justify-between items-center my-2">
            {/* Rating */}
            <div className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-yellow-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.54-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
              </svg>
              <span className="font-bold text-lg">{rating}</span>
            </div>

            {/* Price */}
            <span className="text-xl font-bold text-primary">${price}</span>
          </div>

          <div className="card-actions justify-end">
            <Link to={`/skill/${skillId}`} className="btn btn-primary w-full">View Details</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillCard;
