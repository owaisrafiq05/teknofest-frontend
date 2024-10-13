import React, { useState, useEffect } from "react";
import Card from "./Card";

const CategoryPage = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCat = async () => {
      const res = await fetch("http://localhost:5000/api/competitions/getCategories");
      const data = await res.json();
      console.log(data);
      setCategories(data);
    };

    fetchCat();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex justify-center items-center">
      <div className="flex flex-row gap-8 flex-wrap p-4">
        {categories.length > 0 ? (
          categories.map((category) => (
            <Card
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

export default CategoryPage;
