import featured from "../assets/home/featured.jpg";
import Heading from "./Heading";
const FeaturedSection = () => {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat h-screen flex items-center justify-center bg-fixed"
      style={{
        backgroundImage: `url(${featured})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-75"></div>

      <div className="relative z-10 max-w-4xl text-white text-center">
        <Heading
          heading="From Our Menu"
          subheading={"Chcek It Out"}
          style={{ color: "white" }}
        />

        {/* Content Section */}
        <div className="flex flex-col md:flex-row items-center justify-center mt-8 gap-6">
          {/* Image */}
          <div className="w-full md:w-1/2">
            <img
              src={featured}
              alt="Sample Dish"
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Text Content */}
          <div className="w-full md:w-1/2 text-left">
            <p className="text-sm text-gray-300 mb-2">March 20, 2023</p>
            <h3 className="text-xl font-bold mb-4">WHERE CAN I GET SOME?</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptate facere, deserunt dolores maiores quod nobis quas quasi.
              Eaque repellat recusandae ad laudantium tempore consequuntur
              consequuntur omnis ullam maxime tenetur.
            </p>
            <button className="mt-4 bg-yellow-500 text-black px-6 py-2 rounded-lg hover:bg-yellow-400 transition">
              READ MORE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedSection;
