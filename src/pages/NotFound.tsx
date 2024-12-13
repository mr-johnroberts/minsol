import React from "react";

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-yellow-50">
      <div className="text-center">
        <div className="relative inline-block">
          <div className="absolute inset-0 flex items-center justify-center text-8xl font-bold text-main">
            404
          </div>
        </div>
        <h1 className="mt-12 text-3xl font-semibold text-gray-800">Ooops...</h1>
        <p className="mt-3 text-gray-600">
          The page you are looking for doesn't exist or another error occurred.
        </p>
        <a
          href="/"
          className="inline-block px-6 py-3 mt-6 text-white bg-main rounded-md shadow hover:bg-main/75"
        >
          Go Back
        </a>
      </div>
    </div>
  );
};

export default NotFound;
