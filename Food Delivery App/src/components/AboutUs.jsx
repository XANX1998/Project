const AboutUs = () => {
  return (
    <div className="mt-[100px]">
    <div className="container mx-auto px-4 py-16">
    
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-black">
          Driving the force of <span className="text-[#f1c40f]">assortment</span>
        </h1>
        <p className="text-lg text-gray-600 mt-4">
          For over a decade now, we’ve been empowering our customers in discovering new tastes and experiences across countries. 
          By putting together meticulous information for our customers, we enable them to make an informed choice.
        </p>
      </div>

     
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="h-[100%]">
          <h2 className="text-3xl font-bold mb-4">
            Who are we?
          </h2>
          <p className="text-gray-700">
            Launched in 2010, our technology platform connects customers, restaurant partners, and delivery partners, 
            serving their multiple needs. Customers use our platform to search and discover restaurants, 
            read and write customer-generated reviews, view and upload photos, order food delivery, book a table, 
            and make payments while dining out at restaurants. 
          </p>
          <p className="mt-4 text-gray-700">
            On the other hand, we provide restaurant partners with industry-specific marketing tools that 
            enable them to engage and acquire customers to grow their business, while also providing a reliable 
            and efficient last-mile delivery service. 
          </p>
          <p className="mt-4 text-gray-700">
            We also operate a one-stop procurement solution, Hyperpure, which supplies high-quality ingredients 
            and kitchen products to restaurant partners. We provide our delivery partners with transparent 
            and flexible earning opportunities.
          </p>
        </div>

        
        <div>
          <img
            src="src\assets\Capture.JPG" 
            alt="Historic Restaurant"
            className="w-full rounded-md shadow-lg"
          />
          <p className="text-center text-gray-500 text-sm mt-2">
            Restaurant Boulanger: First restaurant in the world, founded by Monsieur Boulanger in 1765, Paris
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AboutUs;
