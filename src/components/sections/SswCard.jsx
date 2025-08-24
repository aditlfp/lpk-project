function SswCard({data, isLoading}) {
  return (
   <>
    {/* Industry Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl lg:max-w-full mx-auto lg:mx-6">
          {isLoading ? (
            <>
              <div className="flex card flex-col gap-4">
                <div className="skeleton h-62 w-full"></div>
                <div className="skeleton h-10 w-28"></div>
                <div className="skeleton h-10 w-full"></div>
                <div className="skeleton h-10 w-full"></div>
              </div>
              <div className="flex card flex-col gap-4">
                <div className="skeleton h-62 w-full"></div>
                <div className="skeleton h-10 w-28"></div>
                <div className="skeleton h-10 w-full"></div>
                <div className="skeleton h-10 w-full"></div>
              </div>
              <div className="flex card flex-col gap-4">
                <div className="skeleton h-62 w-full"></div>
                <div className="skeleton h-10 w-28"></div>
                <div className="skeleton h-10 w-full"></div>
                <div className="skeleton h-10 w-full"></div>
              </div>
            </>
          ) :  (
            <>
              {data &&
                data.map((industry, index) => {
                  const isLastOdd =
                    data.length % 2 === 1 && index === data.length - 1;
                  return (
                    <div
                      key={index}
                      className={`group card bg-white shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 hover:border-blue-200 relative overflow-hidden 
                      ${
                        isLastOdd ? "md:col-span-2 md:mx-[20%] lg:col-span-1 lg:mx-0" : ""
                      }`}
                    >
                      {/* Card gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-blue-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                      <div className="card-body text-center p-8 relative z-10 flex justify-center items-center">
                        {/* Icon with enhanced styling */}
                        <div className={`w-32 h-32`}>
                          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                          <span className="text-4xl text-white relative z-10">
                            <img
                              src={
                                import.meta.env.VITE_BACKEND_URL_STORAGE +
                                industry.image_icon
                              }
                              alt={industry.image_icon}
                              srcSet={
                                import.meta.env.VITE_BACKEND_URL_STORAGE +
                                industry.image_icon
                              }
                            />
                          </span>
                        </div>

                        {/* Title with gradient */}
                        <h3 className="card-title text-xl md:text-2xl font-bold bg-gradient-to-r from-gray-800 to-blue-600 bg-clip-text text-transparent justify-center mb-2 group-hover:from-blue-600 group-hover:to-blue-600 transition-all duration-300">
                          {industry.title}
                        </h3>
                        <p className="text-gray-500 mb-6 font-medium text-lg">
                          {industry.subtitle_japan}
                        </p>

                        {/* Description with better styling */}
                        <p className="text-gray-600 text-sm md:text-lg leading-relaxed mb-8 group-hover:text-gray-700 transition-colors duration-300">
                          {industry.desc}
                        </p>

                        {/* Workers Count with gradient background */}
                        <div className="bg-gradient-to-r from-blue-50 to-blue-50 rounded-2xl p-6 shadow-inner group-hover:from-blue-100 group-hover:to-blue-100 transition-all duration-300 border border-blue-100">
                          <p className="font-bold text-lg bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                            Dibutuhkan <br />{" "}
                            {industry.jumlah_dibutuhkan + " Orang"}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </>
          )}
        </div>
   </>
  )
}

export default SswCard
