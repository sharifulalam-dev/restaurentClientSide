import chef from "../assets/home/chef-service.jpg";
const CustomSection = () => {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat h-96 flex items-center justify-center my-32"
      style={{
        backgroundImage: `url('${chef}')`,
      }}
    >
      <div className="bg-white bg-opacity-90 text-center py-8 px-12 max-w-2xl rounded shadow-lg">
        <h2 className="text-3xl font-bold text-black mb-4">BISTRO BOSS</h2>
        <p className="text-gray-700 text-sm leading-relaxed">
          At Bistro Boss, our culinary team is led by skilled chefs who bring
          creativity and passion to every plate. With years of expertise and a
          love for fine dining, our chefs use the freshest ingredients to create
          dishes that not only satisfy your taste buds but also tell a story.
          Whether it's a classic favorite or a seasonal specialty, each dish is
          prepared with precision, care, and an eye for detail. Our chefs are
          committed to delivering a dining experience that’s as memorable as it
          is delicious.
        </p>
      </div>
    </div>
  );
};

export default CustomSection;
