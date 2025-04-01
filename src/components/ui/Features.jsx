import React from "react";

const features = [
  { title: "Trekking", image: "path/to/trekking.jpg" },
  { title: "Animals", image: "path/to/animals.jpg" },
  { title: "Gastro tours", image: "path/to/gastro.jpg" },
  { title: "Photography", image: "path/to/photography.jpg" },
];

const Features = () => {
  return (
    <section className="text-center my-12 px-4">
      <h2 className="text-3xl font-bold text-gray-900">Featured</h2>
      <p className="text-gray-600 mt-2">
        Unique wildlife tours and ecotourism holidays offered by Zubox experts.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6 max-w-5xl mx-auto">
        {features.map((feature, index) => (
          <div key={index} className="text-center">
            <img
              src={feature.image}
              alt={feature.title}
              className="w-full h-48 object-cover rounded-lg shadow-md"
            />
            <h3 className="mt-2 text-lg font-semibold text-gray-900">{feature.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
