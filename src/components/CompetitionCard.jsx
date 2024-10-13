import React from "react";
import { useNavigate } from "react-router-dom";
const CompetitionCard = ({ title, description, image, id }) => {
    
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/competitions/" + id);    
    }
   
    return (
    <div class="">
      <div class="max-w-[720px] mx-auto">
        <div class="relative hover:rotate-3 hover:bg-teal-50 hover:rounded-3xl transition ease-in-out delay-100 hover:bg-gradient-to-l from-cyan-100 to-teal-50 flex flex-col mt-6 text-gray-700 bg-gray-200 shadow-md bg-clip-border rounded-xl w-72 ">
          <div class="relative mx-4 -mt-3 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
            <img src={image} alt="card-image" />
          </div>
          <div class="p-4">
            <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              {title}
            </h5>
            <p class="block font-sans text-sm antialiased text-gray-400 opacity-80 leading-relaxed text-inherit">
              {description}
            </p>
          </div>
          <div class="p-6 pt-0">
            <button
              class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
              type="button"
              onClick={handleClick}
            >
              View Competitions
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompetitionCard;
