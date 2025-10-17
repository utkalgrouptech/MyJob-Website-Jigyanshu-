"use client";

import React, { useState } from "react";
import { CloudUpload,CheckCircle, Cancel } from "@mui/icons-material";

export default function CVManagerPage() {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [error, setError] = useState("");

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const allowedTypes = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
      const maxFileSize = 5 * 1024 * 1024; // 5 MB

      if (!allowedTypes.includes(file.type)) {
        setError("Invalid file type. Only .doc, .docx, and .pdf are allowed.");
        setUploadedFile(null);
        return;
      }

      if (file.size > maxFileSize) {
        setError("File size exceeds 5MB.");
        setUploadedFile(null);
        return;
      }

      setUploadedFile(file);
      setError("");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4">CV Manager</h1>
        <p className="text-center text-gray-600 mb-6">
          To upload, file size must be <span className="font-semibold">Max 5MB</span>, and allowed file types are <span className="font-semibold">.doc, .docx, .pdf</span>.
        </p>

        <div className="flex flex-col items-center">
          <label
            htmlFor="file-upload"
            className="flex items-center justify-center w-full cursor-pointer border-dashed border-2 border-gray-300 rounded-lg p-6 bg-gray-50 hover:bg-gray-100 transition"
          >
            <CloudUpload className="text-blue-500 text-4xl mr-2" />
            <div>
              <p className="text-sm text-gray-500">Click to upload your file</p>
              <p className="font-semibold text-gray-800">{uploadedFile ? uploadedFile.name : "No file chosen"}</p>
            </div>
            <input
              id="file-upload"
              type="file"
              className="hidden"
              accept=".doc,.docx,.pdf"
              onChange={handleFileUpload}
            />
          </label>

          {error && (
            <p className="text-red-500 text-sm mt-4 flex items-center">
              <Cancel className="mr-1 text-red-500" /> {error}
            </p>
          )}

          {uploadedFile && !error && (
            <p className="text-green-500 text-sm mt-4 flex items-center">
              <CheckCircle className="mr-1 text-green-500" /> File uploaded successfully!
            </p>
          )}

          <button
            className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition"
            onClick={() => alert("File submitted!")}
          >
            Upload File
          </button>
        </div>
      </div>
    </div>
  );
}
