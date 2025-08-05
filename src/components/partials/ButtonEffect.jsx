import React from 'react'

function ButtonEffect() {
  return (
    <>
             <div className="text-center mt-16">
          <button className="group relative btn btn-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-none shadow-xl hover:shadow-2xl transition-all duration-500 px-8 py-4 rounded-md overflow-hidden transform hover:scale-105 hover:-translate-y-1">
            {/* Shimmer effect overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
            
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-md bg-gradient-to-r from-blue-400/50 to-purple-400/50 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 scale-110"></div>
            
            {/* Ripple effect */}
            <div className="absolute inset-0 rounded-md border-2 border-white/30 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-out"></div>
            
            {/* Button content */}
            <span className="relative flex items-center gap-3 font-semibold z-10">
              <span className="group-hover:text-shadow transition-all duration-300">Lihat Selengkapnya</span>
              
              {/* Animated arrows with stagger effect */}
              <div className="flex items-center">
                <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300 delay-75" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <svg className="w-5 h-5 group-hover:translate-x-3 transition-transform duration-300 delay-150 -ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              
              {/* Floating particles effect */}
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-md opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-500"></div>
              <div className="absolute top-1 -right-2 w-1 h-1 bg-cyan-300 rounded-md opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-opacity duration-700 delay-200"></div>
              <div className="absolute -top-2 right-1 w-1.5 h-1.5 bg-purple-300 rounded-md opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-600 delay-300"></div>
            </span>
          </button>
        </div>
    </>
  )
}

export default ButtonEffect