import React from 'react';

const LandingPage = () => {
  return (
    <div className="font-sans text-center p-6 sm:p-12 bg-cover bg-center text-white" style={{ backgroundImage: "url('https://media.istockphoto.com/id/908111180/photo/colorful-northern-lights.jpg?s=2048x2048&w=is&k=20&c=ztK4BGR9gMbGg2LL6jU7oy3y6tVSHpptZBa8XwvfdNo=')" }}>
      <header className="mb-6">
        <nav className="flex flex-col sm:flex-row justify-between p-4 bg-opacity-50 bg-gray-800">
          <div className="font-bold mb-2 sm:mb-0">TRIP ICELAND</div>
          <div className="flex flex-col sm:flex-row">
            <a href="#about" className="mx-2 my-1 sm:my-0">About</a>
            <a href="#places" className="mx-2 my-1 sm:my-0">Places</a>
            <a href="#contacts" className="mx-2 my-1 sm:my-0">Contacts</a>
          </div>
          <div className="flex flex-col sm:flex-row">
            <a href="#login" className="mx-2 my-1 sm:my-0">Log In</a>
            <a href="#signup" className="mx-2 my-1 sm:my-0">Sign Up</a>
          </div>
        </nav>
        <h1 className="text-4xl sm:text-6xl font-bold mt-10">ICELAND</h1>
        <h2 className="text-2xl sm:text-4xl mt-4">VESTRAHORN</h2>
        <p className="mt-2 px-4 sm:px-0">The awe-inspiring Vestrahorn is located near to Höfn on the Southeast Coast of Iceland.</p>
        <button className="mt-4 px-4 py-2 bg-green-600 hover:bg-green-700 rounded">UNKOVER LOCATION</button>
      </header>
      <section className="flex justify-center items-center h-64 sm:h-96">
        <img src="https://example.com/beautiful-forest.jpg" alt="Vestrahorn" className="w-full max-h-full object-cover" />
      </section>
      <section className="mt-6 px-4 sm:px-0">
        <h2 className="text-2xl font-bold">Weather Details</h2>
        <div className="mt-4 space-y-2">
          <p>Humidity: 72%</p>
          <p>Wind: 4.4 m/s</p>
          <p>Temperature: +10°C</p>
          <p>Height: 454 m</p>
        </div>
      </section>
      <footer className="mt-6 px-4 sm:px-0">
        <p>Contact us at: contact@ecotravel.com</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">Instagram</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">Twitter</a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">Facebook</a>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;

