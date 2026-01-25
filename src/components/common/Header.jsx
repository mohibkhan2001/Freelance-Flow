
const Header = ({HeaderName, HeaderDescription}) => {
  return (
    <div className="max-w-full">
      <h1 className="font-bold text-3xl">{HeaderName}</h1>
      <p className="w-full text-gray-500">{HeaderDescription}</p>
    </div>
  );
};

export default Header;
