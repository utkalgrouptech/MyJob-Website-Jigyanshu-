import React from "react";

const SavedJobsPage = () => {
  const jobs = [
    {
      title: "Senior Product Designer",
      company: "Circle Pixel",
      location: "New York, USA",
      date: "Aug 05, 2024",
      status: "Active",
    },
    {
      title: "Finance Manager",
      company: "Circle Pixel",
      location: "New York, USA",
      date: "Aug 05, 2024",
      status: "Active",
    },
    {
      title: "Digital Marketing Manager",
      company: "Circle Pixel",
      location: "New York, USA",
      date: "Aug 05, 2024",
      status: "Active",
    },
    {
      title: "Product Manager",
      company: "Circle Pixel",
      location: "New York, USA",
      date: "Aug 05, 2024",
      status: "Active",
    },
    {
      title: "Full Stack Engineer",
      company: "Circle Pixel",
      location: "New York, USA",
      date: "Aug 05, 2024",
      status: "Expired",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4">Saved Jobs</h1>

        <table className="w-full border-collapse border border-gray-300 text-left">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2">Job Info</th>
              <th className="border border-gray-300 px-4 py-2">Date</th>
              <th className="border border-gray-300 px-4 py-2">Status</th>
              <th className="border border-gray-300 px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? "bg-white" : "bg-gray-50"
                } hover:bg-gray-100`}
              >
                <td className="border border-gray-300 px-4 py-2">
                  <p className="font-semibold">{job.title}</p>
                  <p className="text-sm text-gray-500">
                    {job.company} - {job.location}
                  </p>
                </td>
                <td className="border border-gray-300 px-4 py-2">{job.date}</td>
                <td
                  className={`border border-gray-300 px-4 py-2 ${
                    job.status === "Active"
                      ? "text-green-600"
                      : "text-red-600"
                  } font-semibold`}
                >
                  {job.status}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <button className="text-blue-600 hover:underline">
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex justify-center items-center mt-4">
          <button className="px-4 py-2 border rounded-l-lg border-gray-300 bg-white hover:bg-gray-200">
            1
          </button>
          <button className="px-4 py-2 border-t border-b border-gray-300 bg-white hover:bg-gray-200">
            2
          </button>
          <button className="px-4 py-2 border rounded-r-lg border-gray-300 bg-white hover:bg-gray-200">
            3
          </button>
        </div>
      </div>
    </div>
  );
};

export default SavedJobsPage;
