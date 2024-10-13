import React, { useState, useEffect } from "react";
import CompetitionCard from "./CompetitionCard";
import { useParams } from 'react-router-dom'

const Competition = () => {
  const [categories, setCategories] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const fetchCat = async () => {
      const res = await fetch("http://localhost:5000/api/competitions/" + id);
      const data = await res.json();
      console.log(data);
      setCategories(data);
    };

    fetchCat();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex justify-center items-center flex-col pt-32">
      <h1 className="text-5xl font-bold text-green-600">All Competitions</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mt-32">
        {categories.length > 0 ? (
          categories.map((category) => (
            <CompetitionCard
              title={category.name}
              description={category.description}
              image={category.img}
              id={category.id}
              key={category.id}
            />
          ))
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </div>
  );
};

export default Competition;
