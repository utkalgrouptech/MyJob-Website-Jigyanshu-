// "use client";

// import { useState, useEffect } from "react";
// import { apiBaseURL } from "../../../config/route.config";
// import axios from "axios";
// // import { useParams } from "next/navigation";

// interface OrgData {
//   compId: string;
//   organizationName: string;
//   address: string;
//   description: string;
//   phoneNo: string;
//   email: string;
//   website: string;
//   socialMediaLink: string;
//   industry: string;
//   since: string;
//   specialization: string;
//   updatedBy: string;
//   status: string;
//   logoUrl?: string;
// }

// const OrganizationProfile = () => {
//   // Extract the dynamic id from the route parameters.
//   const storedDada = localStorage.getItem('userData');
//   const userData = storedDada ? JSON.parse(storedDada) : null;
//   const id = userData.compId
//   console.log(id);
  
  
//   // const { id } = useParams();

//   const [orgData, setOrgData] = useState<OrgData | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [form, setForm] = useState({
//     organizationName: "",
//     address: "",
//     description: "",
//     phoneNo: "",
//     email: "",
//     website: "",
//     socialMediaLink: "",
//     industry: "",
//     since: "",
//     specialization: "",
//     updatedBy: "",
//     status: "",
//   });
//   const [logoFile, setLogoFile] = useState<File | null>(null);
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");

//   // Fetch organization details when component mounts.
//   useEffect(() => {
//     const fetchOrgData = async () => {
//       if (!id) {
//         setError("Organization id is missing.");
//         setLoading(false);
//         return;
//       }
//       try {
//         const res = await axios.get(`${apiBaseURL}/organizationDetails/get`, {
//           params: { id },
//         });
//         const data = res.data;
//         console.log(data);

//         if (res.status === 200) {
//           setOrgData(data);
//           // Pre-fill form with the existing organization data
//           setForm({
//             organizationName: data.organizationName || "",
//             address: data.address || "",
//             description: data.description || "",
//             phoneNo: data.phoneNo || "",
//             email: data.email || "",
//             website: data.website || "",
//             socialMediaLink: data.socialMediaLink || "",
//             industry: data.industry || "",
//             since: data.since || "",
//             specialization: data.specialization || "",
//             updatedBy: data.updatedBy || "",
//             status: data.status || "",
//           });
//         } else {
//           setError(data.error || "Failed to fetch organization details.");
//         }
//       } catch (err) {
//         setError("Failed to load data.");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchOrgData();
//   }, [id]);

//   // Update form state on input change.
//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//     setForm((prev) => ({ ...prev, [name]: value }));
//   };

//   // Handle file input change for the logo.
//   const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files && e.target.files[0]) {
//       setLogoFile(e.target.files[0]);
//     }
//   };

//   // Handle form submission.
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError("");
//     setSuccess("");

//     // Create FormData for handling file upload and other form fields.
//     const formData = new FormData();
//     formData.append("organizationName", form.organizationName);
//     formData.append("address", form.address);
//     formData.append("description", form.description);
//     formData.append("phoneNo", form.phoneNo);
//     formData.append("email", form.email);
//     formData.append("website", form.website);
//     formData.append("socialMediaLink", form.socialMediaLink);
//     formData.append("industry", form.industry);
//     formData.append("since", form.since);
//     formData.append("specialization", form.specialization);
//     formData.append("updatedBy", form.updatedBy);
//     formData.append("status", form.status);
//     if (logoFile) {
//       formData.append("logo", logoFile);
//     }

//     try {
//       if (!id) {
//         setError("Organization id is missing.");
//         return;
//       }
//       // Use the dynamic id in the update route.
//       const res = await axios.put(
//         `${apiBaseURL}/organizationDetails/update/${id}`,
//         formData,
//         {
//           headers: { "Content-Type": "multipart/form-data" },
//         }
//       );
//       const data = res.data;

//       if (res.status === 200) {
//         setSuccess("Organization updated successfully.");
//         // Update the state with new data if needed.
//         setOrgData(data.data);
//       } else {
//         setError(data.error || "Failed to update organization.");
//       }
//     } catch (err) {
//       setError("An error occurred while updating.");
//     }
//   };

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         Loading...
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-100">
//       <div className="container mx-auto py-8">
//         <div className="bg-white shadow-lg rounded-lg p-6">
//           <h1 className="text-2xl font-bold mb-4">Organization Dashboard</h1>
//           {error && <p className="text-red-500">{error}</p>}
//           {success && <p className="text-green-500">{success}</p>}
//           <div className="flex flex-col md:flex-row">
//             {/* Profile Section */}
//             <div className="md:w-1/3 p-4 flex flex-col items-center border-r border-gray-200">
//               <div className="w-32 h-32 rounded-full overflow-hidden border border-gray-300 mb-4">
//                 {orgData?.logoUrl ? (
//                   <img
//                     src={orgData.logoUrl}
//                     alt="Organization Logo"
//                     className="object-cover w-full h-full"
//                   />
//                 ) : (
//                   <div className="w-full h-full flex items-center justify-center bg-gray-200">
//                     <span className="text-gray-500">No Logo</span>
//                   </div>
//                 )}
//               </div>
//               <h2 className="text-xl font-semibold">
//                 {orgData?.organizationName}
//               </h2>
//               <p className="text-gray-600 mt-2">{orgData?.industry}</p>
//             </div>

//             {/* Edit Profile Form */}
//             <div className="md:w-2/3 p-4">
//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700">
//                       Organization Name
//                     </label>
//                     <input
//                       type="text"
//                       name="organizationName"
//                       value={form.organizationName}
//                       onChange={handleChange}
//                       className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2"
//                       placeholder="Enter organization name"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700">
//                       Email
//                     </label>
//                     <input
//                       type="email"
//                       name="email"
//                       value={form.email}
//                       onChange={handleChange}
//                       className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2"
//                       placeholder="Enter email address"
//                     />
//                   </div>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700">
//                       Address
//                     </label>
//                     <input
//                       type="text"
//                       name="address"
//                       value={form.address}
//                       onChange={handleChange}
//                       className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2"
//                       placeholder="Enter address"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700">
//                       Phone Number
//                     </label>
//                     <input
//                       type="text"
//                       name="phoneNo"
//                       value={form.phoneNo}
//                       onChange={handleChange}
//                       className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2"
//                       placeholder="Enter phone number"
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">
//                     Description
//                   </label>
//                   <textarea
//                     name="description"
//                     value={form.description}
//                     onChange={handleChange}
//                     rows={3}
//                     className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2"
//                     placeholder="Enter description"
//                   ></textarea>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700">
//                       Website
//                     </label>
//                     <input
//                       type="text"
//                       name="website"
//                       value={form.website}
//                       onChange={handleChange}
//                       className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2"
//                       placeholder="Enter website URL"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700">
//                       Social Media Link
//                     </label>
//                     <input
//                       type="text"
//                       name="socialMediaLink"
//                       value={form.socialMediaLink}
//                       onChange={handleChange}
//                       className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2"
//                       placeholder="Enter social media link"
//                     />
//                   </div>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700">
//                       Industry
//                     </label>
//                     <input
//                       type="text"
//                       name="industry"
//                       value={form.industry}
//                       onChange={handleChange}
//                       className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2"
//                       placeholder="Enter industry"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700">
//                       Since
//                     </label>
//                     <input
//                       type="text"
//                       name="since"
//                       value={form.since}
//                       onChange={handleChange}
//                       className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2"
//                       placeholder="Year of establishment"
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">
//                     Specialization
//                   </label>
//                   <input
//                     type="text"
//                     name="specialization"
//                     value={form.specialization}
//                     onChange={handleChange}
//                     className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2"
//                     placeholder="Enter specialization"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">
//                     Update Logo
//                   </label>
//                   <input
//                     type="file"
//                     name="logo"
//                     onChange={handleLogoChange}
//                     className="mt-1 block w-full"
//                   />
//                 </div>

//                 <button
//                   type="submit"
//                   className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors"
//                 >
//                   Update Profile
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OrganizationProfile;


"use client";
import React, { useState, useEffect } from "react";
import { TextField, Button, Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";
import axios from "axios";
import Swal from "sweetalert2";
import { apiBaseURL } from "../../../config/route.config";

const CreateJob = () => {
  const [formData, setFormData] = useState({
    compId: "",
    degName: "",
    secName: "",
    jobLocation: "",
    skills: "",
    jobDescription: "",
    yearsOfExperience: "",
    requirements: "",
    jobType: "",
    workPlaceType: "",
  });
  const [open, setOpen] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  // Retrieve company id from localStorage and set it into the formData
  useEffect(() => {
    const storedData = localStorage.getItem("userData");
    if (storedData) {
      const userData = JSON.parse(storedData);
      setFormData((prevData) => ({
        ...prevData,
        compId: userData.compId,
      }));
      console.log("Company ID from localStorage:", userData.compId);
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${apiBaseURL}/postedjob/create`,
        formData
      );
      Swal.fire({
        icon: "success",
        title: "Job Created Successfully",
        text: response.data.message,
      });
      // Reset the form while preserving the company id
      setFormData((prev) => ({
        ...prev,
        degName: "",
        secName: "",
        jobLocation: "",
        skills: "",
        jobDescription: "",
        yearsOfExperience: "",
        requirements: "",
        jobType: "",
        workPlaceType: "",
      }));
    } catch (error: any) {
      Swal.fire({
        icon: "error",
        title: "Error Creating Job",
        text: error.response?.data?.message || "Something went wrong!",
      });
    }
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="p-8 bg-gray-100">
            <Button variant="contained" color="primary" onClick={handleOpen}>
        Post Job
      </Button>
            <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <DialogTitle>Post a Job</DialogTitle>
        <DialogContent>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Display company ID (auto-filled from localStorage) */}
        <TextField
          label="Company ID"
          variant="outlined"
          fullWidth
          name="compId"
          value={formData.compId}
          disabled
        />
        <TextField
          label="Degree Name"
          variant="outlined"
          fullWidth
          name="degName"
          value={formData.degName}
          onChange={handleChange}
          placeholder="Enter Degree Name"
        />
        <TextField
          label="Section Name"
          variant="outlined"
          fullWidth
          name="secName"
          value={formData.secName}
          onChange={handleChange}
          placeholder="Enter Section Name"
        />
        <TextField
          label="Job Location"
          variant="outlined"
          fullWidth
          name="jobLocation"
          value={formData.jobLocation}
          onChange={handleChange}
          placeholder="Enter Job Location"
        />
        <TextField
          label="Required Skills"
          variant="outlined"
          fullWidth
          name="skills"
          value={formData.skills}
          onChange={handleChange}
          placeholder="Enter Required Skills"
        />
        <TextField
          label="Job Description"
          variant="outlined"
          fullWidth
          name="jobDescription"
          value={formData.jobDescription}
          onChange={handleChange}
          multiline
          rows={4}
          placeholder="Enter Job Description"
        />
        <TextField
          label="Years of Experience"
          variant="outlined"
          fullWidth
          name="yearsOfExperience"
          value={formData.yearsOfExperience}
          onChange={handleChange}
          placeholder="Enter Required Years of Experience"
        />
        <TextField
          label="Requirements"
          variant="outlined"
          fullWidth
          name="requirements"
          value={formData.requirements}
          onChange={handleChange}
          placeholder="Enter Requirements"
        />
        <TextField
          label="Job Type"
          variant="outlined"
          fullWidth
          name="jobType"
          value={formData.jobType}
          onChange={handleChange}
          placeholder="Enter Job Type"
        />
        <TextField
          label="Work Place Type"
          variant="outlined"
          fullWidth
          name="workPlaceType"
          value={formData.workPlaceType}
          onChange={handleChange}
          placeholder="Enter Work Place Type"
        />
      </form>
      </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onSubmit={handleSubmit} onClick={handleClose} variant="contained" color="primary">
            Create Job
          </Button>
        </DialogActions>
      </Dialog>
      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-500">{success}</p>}
    </div>
  );
};

export default CreateJob;
