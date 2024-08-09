import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function HomePage(){
    return (
        <Router>
          <div className="bg-purple-900 min-h-screen">

            {/* Navbar */}
            
            <nav className="flex justify-between items-center p-4
            portrait:flex-col">

              <div className="text-white text-2xl font-bold">logo</div>
              <div className="flex items-center">

                {/*<input 
                  type="text" 
                  placeholder="🔍 Descubre nuevos productos" 
                  className="p-2 rounded bg-gray-700 text-white"
                />*/}

                <div className="flex space-x-4 ml-4 text-white">
                  <a href="#">Computadoras</a>
                  <a href="#">Componentes</a>
                  <a href="#">Periféricos</a>
                  <a href="#">Accesorios</a>
                </div>
                <div></div>
                <div className="ml-4 text-white">
                  <a href="#">Login</a>
                  <a href="#">Sign Up</a>
                </div>

                <div className="ml-4 text-white">
                  <a href="#">🛒</a>
                </div>
              </div>
              
            </nav>
    
            
            {/* Hero Section */}

            <section className="relative text-center p-10">
              <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: 'url(/path-to-hero-image.jpg)' }}></div>
              <div className="relative z-10">
                <h1 className="text-white text-4xl mb-4">Tenemos novedades para ti</h1>
                <button className="bg-red-500 text-white px-6 py-2 rounded-full">Explora</button>
              </div>
            </section>
    
            {/* Product Section */}

            <section className="p-10">
              <h2 className="text-white text-2xl mb-4">Nuestros productos</h2>
              <div className="grid grid-cols-3 gap-4">
                
                <div className="bg-gray-800 p-4 rounded">
                  <img src="/path-to-product1.jpg" alt="Product 1" className="rounded" />
                  <button className="bg-gray-700 text-white mt-2 px-4 py-2 rounded-full">Ver más</button>
                </div>
                
              </div>
            </section>
    
            {/* Featured Section */}

            <section className="p-10">
              <h2 className="text-white text-2xl mb-4">Destacados</h2>
              <div className="grid grid-cols-3 gap-4">

                <div className="bg-gray-800 p-4 rounded">
                  <img src="/path-to-featured1.jpg" alt="Featured 1" className="rounded" />
                  <button className="bg-gray-700 text-white mt-2 px-4 py-2 rounded-full">Ver más</button>
                </div>
                

              </div>
            </section>
    
            {/* Footer */}

            <footer className="bg-gray-800 p-6 text-center text-white">
              <p>Contáctanos</p>
              <p>Tel 8888 8888</p>
              <p>marca@logo.com</p>
              <p>Ubicación: XXXX</p>
            </footer>

          </div>
        </Router>
      );
}

export default HomePage;