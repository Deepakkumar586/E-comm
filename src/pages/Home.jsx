import React from 'react';
import { FaArrowRight, FaShoppingBag, FaStar, FaFire } from 'react-icons/fa';
import { Categories } from '../assets/mockData';
import HeroImage from '../assets/images/8852975.jpg';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white o">
      <main className="container mx-auto px-4 py-8 ">
        <div className="grid lg:grid-cols-3 gap-8">

          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg dark:shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-red-100 dark:bg-gray-700 rounded-lg">
                  <FaShoppingBag className="text-red-600 dark:text-gray-300" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                  SHOP BY CATEGORIES
                </h2>
              </div>

              <ul className="space-y-3">
                {Categories.map((cat, index) => (
                  <li
                    key={index}
                    className="group cursor-pointer transition-all duration-300"
                  >
                    <div className="flex items-center justify-between p-2 rounded-xl bg-gray-50 hover:bg-red-50 dark:bg-gray-700/50 dark:hover:bg-gray-700 border border-gray-100 dark:border-gray-700 hover:border-red-200 dark:hover:border-gray-600 transition-all duration-300">
                      <div className="flex items-center gap-4">
                        <div className="relative">
                          <div className="w-3 h-3 rounded-full bg-red-500 dark:bg-gray-400 group-hover:scale-125 transition-transform duration-300"></div>
                        </div>
                        <span className="text-md font-medium group-hover:text-red-600 dark:group-hover:text-gray-200 transition-colors duration-300">
                          {cat}
                        </span>
                      </div>
                      <FaArrowRight className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-red-500 dark:text-gray-400" />
                    </div>
                  </li>
                ))}
              </ul>


              <div className="mt-8 p-4 bg-gradient-to-r from-red-50 to-white dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 rounded-xl border border-red-100 dark:border-gray-700 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-red-500/10 dark:bg-red-900/20 rounded-full -translate-y-8 translate-x-4"></div>
                <div className="relative z-10 flex items-center gap-3">
                  <FaFire className="text-orange-500 dark:text-orange-400 animate-pulse" />
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    Trending now in all categories
                  </span>
                </div>
              </div>
            </div>
          </div>


          <div className="lg:col-span-2">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-red-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 border border-gray-200 dark:border-gray-700 shadow-xl dark:shadow-2xl">

              <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/50 to-transparent dark:bg-gradient-to-r dark:from-gray-900/90 dark:via-gray-900/70 dark:to-transparent z-10"></div>

              <img
                src={HeroImage}
                alt="Hero"
                className="w-full h-[500px] object-cover opacity-30 dark:opacity-20"
              />

              <div className="absolute inset-0 z-20 p-8 flex flex-col justify-center">
                <div className="max-w-xl">

                  <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-red-100 dark:bg-gray-700 rounded-full">
                    <FaStar className="text-yellow-500" />
                    <p className="text-sm font-medium text-red-700 dark:text-gray-300">
                      Code With Deepak Kumar
                    </p>
                  </div>


                  <h2 className="text-5xl font-bold mb-4 text-gray-900 dark:text-white leading-tight">
                    WELCOME TO <span className="text-red-600 dark:text-red-400">E-SHOP</span>
                  </h2>


                  <div className="flex items-center gap-3 mb-8">
                    <div className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                      <span className="text-2xl font-bold text-red-600 dark:text-red-400">10K+</span>
                      <span className="text-gray-600 dark:text-gray-300">PRODUCTS</span>
                    </div>
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  </div>


                  <button className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 dark:from-gray-700 dark:via-gray-800 dark:to-gray-700 dark:hover:from-gray-600 dark:hover:via-gray-700 dark:hover:to-gray-600 rounded-xl text-white font-semibold shadow-lg hover:shadow-xl dark:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                    <span>SHOP NOW</span>
                    <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home