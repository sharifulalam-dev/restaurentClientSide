const Heading = ({ heading, subheading, style = {} }) => {
  return (
    <div className="text-center py-4 mb-4 " style={style}>
      <p className="text-yellow-500  font-light tracking-wide text-lg">
        --- {subheading} ---
      </p>

      <h2 className="px-8 text-4xl font-bold mt-2 py-2 tracking-wide border-t-2 border-b-2 border-gray-300 inline-block">
        {heading}
      </h2>
    </div>
  );
};

export default Heading;
