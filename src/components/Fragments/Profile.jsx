const Profile = (data) => {
  console.log(data);
  return (
    <>
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
        <div className="flex items-center space-x-6">
          <img
            className="h-24 w-24 rounded-full object-cover"
            src="https://via.placeholder.com/150"
            alt="Profile Picture"
          />
          <div>
            <h2 className="text-2xl font-semibold">{data?.data?.name?.firstname} {" "} {data?.data?.name?.lastname}</h2>
            <p className="text-gray-600">{data?.data?.username}</p>
            <p className="mt-2 text-gray-800">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec
              odio nec nisi facilisis pretium.
            </p>
          </div>
        </div>
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
          <div className="flex items-center space-x-4">
            <svg
              className="h-6 w-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16.828 3.172a4 4 0 010 5.656l-1.414 1.414a4 4 0 01-5.656 0L6.343 8.343a4 4 0 010-5.656l1.414-1.414a4 4 0 015.656 0l1.415 1.414z"
              ></path>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8.464 11.586a2 2 0 000 2.828l6.343 6.343a2 2 0 002.828 0l1.414-1.414a2 2 0 000-2.828l-6.343-6.343a2 2 0 00-2.828 0L8.464 11.586z"
              ></path>
            </svg>
            <span className="text-gray-800">{data?.data?.email}</span>
          </div>
          <div className="flex items-center space-x-4 mt-4">
            <svg
              className="h-6 w-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 10a1 1 0 011-1h3.273a1 1 0 01.707.293l1.536 1.536a1 1 0 00.707.293H18a1 1 0 011 1v3a1 1 0 01-1 1h-3.273a1 1 0 01-.707-.293l-1.536-1.536a1 1 0 00-.707-.293H4a1 1 0 01-1-1v-3z"
              ></path>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 19a1 1 0 01.293-.707l1.536-1.536a1 1 0 00.293-.707V4a1 1 0 00-1-1H7a1 1 0 00-1 1v12a1 1 0 001 1h3z"
              ></path>
            </svg>
            <span className="text-gray-800">{data?.data?.phone}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
