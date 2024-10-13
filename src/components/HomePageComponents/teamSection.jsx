import React from "react";
import TeamCard from "./TeamCard";
import Speaker1 from "../../assets/speaker1.webp"
import Speaker2 from "../../assets/speaker2.webp"
import Speaker3 from "../../assets/speaker3.webp"
import Speaker4 from "../../assets/speaker4.webp"

const TeamSection = () => {
  return (
    <div className="flex justify-between items-center w-[100%] bg-black">
      <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h2 class="text-2xl font-bold md:text-5xl md:leading-tight dark:text-white">
            Our Leadership
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          <TeamCard name="Ziauddin Ahmed" linkedinURL="https://www.linkedin.com/" position="CEO-Digital Care" image={Speaker1}/>
          <TeamCard name="Wahaj Siraj" linkedinURL="https://www.linkedin.com/" position="Cofounder & CEO Nayatel" image={Speaker2}/>
          <TeamCard name="Saad Zuberi" linkedinURL="https://www.linkedin.com/" position="Executive Director at LuckyOne Mall" image={Speaker3}/>
          <TeamCard name="Naveed Ali Baig" linkedinURL="https://www.linkedin.com/" position="CEO at Innovative Pvt Ltd" image={Speaker4}/>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
