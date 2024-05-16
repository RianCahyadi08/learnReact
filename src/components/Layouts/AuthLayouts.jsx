import { Link } from "react-router-dom";

const AuthLayout = (props) => {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        <div className="bg-white p-8 rounded shadow-md w-96 text-left">
          <h2 className="text-2xl font-semibold mb-6">{props.title}</h2>
          {props.children}
          {/* If condition type page is login */}
          {props.type === "login" && (
            <p className="text-center text-gray-600 mt-4">
              Don't have an account?{" "}
              <Link to="/register" className="text-blue-500 hover:underline">
                Sign Up
              </Link>
            </p>
          )}
          {/* If condition type page is register */}
          {props.type === "register" && (
            <p className="text-center text-gray-600 mt-4">
              Already have an account?{" "}
              <Link to="/" className="text-blue-500 hover:underline">
                Sign In
              </Link>
            </p>
          )}
          {/* If condition type page is forgot password */}
          {props.type === "forgot_password" && (
            <p className="text-center text-gray-600 mt-4">
              <Link to="/" className="text-blue-500 hover:underline">
                Back
              </Link>
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default AuthLayout;
