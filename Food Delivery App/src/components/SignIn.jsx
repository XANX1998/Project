const SignIn = () => {
  return (
    <div className="h-[100vh] flex flex-col lg:flex-row justify-center items-center px-4 lg:px-0">
     
      <div className="lg:w-[50%] w-full text-center lg:text-left mb-8 lg:mb-0">
        <h6 className="font-bold text-4xl lg:text-6xl">
          Eat/<span className="text-[#f1c40f]">Drink</span>
        </h6>
        <p className="font-bold mt-4 text-xl lg:text-2xl">
          Delighting Your Tastebuds, One Dish at a Time...!!!
        </p>
      </div>

     
      <div className="lg:w-[40%] w-full">
        <div className="h-auto bg-slate-200 w-full sm:w-[90%] md:w-[70%] lg:w-[80%] m-auto rounded-md p-6 md:p-8 shadow-lg">
          <h3 className="text-black font-semibold text-2xl lg:text-3xl mb-6">Sign In</h3>
          <form className="flex flex-col gap-6 items-center w-full">
           
            <div className="w-full">
              <label className="block font-semibold mb-2">Email:</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full h-[40px] p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

        
            <div className="w-full">
              <label className="block font-semibold mb-2">Password:</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full h-[40px] p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            
            <button className="bg-black w-full text-white rounded-md py-3 hover:bg-gray-800 hover:text-yellow-400 font-semibold text-lg mt-4">
              Sign IN
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
