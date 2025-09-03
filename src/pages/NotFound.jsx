import { Link } from "react-router";
import { BiSolidError } from "react-icons/bi";

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-lightGray">
      <div className="flex items-center gap-2 mb-6 text-red-600">
        <BiSolidError className="text-7xl animate-bounce" />
        <h1 className="font-extrabold text-9xl">404</h1>
      </div>
      <p className="text-3xl mb-8">Oops! Page Not Found</p>
      <Link to="/dashboard"
        className="bg-green text-white font-semibold
        px-8 py-4 rounded-xl shadow-lg transition duration-300 transform hover:-translate-y-0.5"
      >
        Go Home
      </Link>
    </div>
  );
};
export default NotFound;