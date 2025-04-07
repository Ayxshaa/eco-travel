import React from "react";

const features = [
  { title: "Trekking", image: "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { title: "Animals", image: "https://images.unsplash.com/photo-1589656966895-2f33e7653819?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { title: "Gastro tours", image: "https://images.unsplash.com/photo-1649686887571-afa47f5428e4?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { title: "Photography", image: "https://plus.unsplash.com/premium_photo-1690574562246-43522f632a06?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
];

const Features = () => {
  return (
    <section className="text-center my-12 px-4">
      <h2 className="text-3xl font-bold text-gray-900">Featured</h2>
      <p className="text-teal-700 mt-2">
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
