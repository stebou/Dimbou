





import { FaCog, FaTachometerAlt, FaUsers, FaFolderOpen, FaCalendarAlt, FaFileAlt } from 'react-icons/fa';

function Dashboard() {
  return (
    <div className="h-screen flex">
      {/* Sidebar */}
      <div className="bg-gray-800 w-64 p-6">
        <h1 className="text-white text-xl mb-6">Dashboard</h1>
        <nav className="space-y-4">
          <a href="#" className="text-gray-300 hover:text-white flex items-center space-x-2">
            <FaTachometerAlt />
            <span>Dashboard</span>
          </a>
          <a href="#" className="text-gray-300 hover:text-white flex items-center space-x-2">
            <FaUsers />
            <span>Team</span>
          </a>
          <a href="#" className="text-gray-300 hover:text-white flex items-center space-x-2">
            <FaFolderOpen />
            <span>Projects</span>
          </a>
          <a href="#" className="text-gray-300 hover:text-white flex items-center space-x-2">
            <FaCalendarAlt />
            <span>Calendar</span>
          </a>
          <a href="#" className="text-gray-300 hover:text-white flex items-center space-x-2">
            <FaFileAlt />
            <span>Documents</span>
          </a>
        </nav>
        <div className="absolute bottom-6 left-6 flex items-center space-x-2">
          <FaCog />
          <span className="text-gray-300">Settings</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-gray-100 p-6">
        {/* Your main content goes here */}
       
     
      </div>
    </div>
  );
}

export default Dashboard;
