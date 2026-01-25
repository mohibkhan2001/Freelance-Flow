import InfoBox from "./InfoBox";
import Navigation from "./Navigation";

const Sidebar = () => {
  return (
    <div className="sidebar h-screen w-70 bg-gray-50 shadow-lg  px-4 border-r border-gray-300 relative">
      <div className="h-full flex flex-col justify-between items-center">
        <InfoBox showName={false} />
        <Navigation />
        <InfoBox />
      </div>
    </div>
  );
};

export default Sidebar;
