"use client";
import React, { useState } from "react";
import { Upload, X } from "lucide-react";

export default function PropertyMediaForm({ initialData, onBack, onNext }) {
  const [formData, setFormData] = useState(
    initialData || {
      images: [],
      videos: [],
      virtualTour: "",
      coverImage: null,
    }
  );

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setFormData((prev) => ({
      ...prev,
      images: [...prev.images, ...files],
    }));
  };

  const handleVideoUpload = (e) => {
    const files = Array.from(e.target.files);
    setFormData((prev) => ({
      ...prev,
      videos: [...prev.videos, ...files],
    }));
  };

  const removeImage = (index) => {
    setFormData((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }));
  };

  const removeVideo = (index) => {
    setFormData((prev) => ({
      ...prev,
      videos: prev.videos.filter((_, i) => i !== index),
    }));
  };

  return (
    <form className="space-y-6">
      <h2 className="text-2xl font-semibold mb-6">Property Media</h2>

      {/* Images Upload */}
      <div className="bg-[#181818] p-5 rounded-xl space-y-4">
        <h3 className="text-lg font-semibold">Property Images</h3>
        <p className="text-sm text-gray-400">
          Upload high-quality images of your property (Max 10 images)
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-4">
          {formData.images.map((image, index) => (
            <div key={index} className="relative group">
              <img
                src={URL.createObjectURL(image)}
                alt={`Property ${index + 1}`}
                className="w-full h-32 object-cover rounded-lg"
              />
              <button
                type="button"
                onClick={() => removeImage(index)}
                className="absolute top-2 right-2 p-1 bg-red-500 rounded-full opacity-0 group-hover:opacity-100 transition"
              >
                <X size={14} />
              </button>
            </div>
          ))}

          {formData.images.length < 10 && (
            <label className="border-2 border-dashed border-gray-600 rounded-lg h-32 flex flex-col items-center justify-center cursor-pointer hover:border-gray-500 transition">
              <Upload size={24} className="text-gray-400" />
              <span className="text-sm text-gray-400 mt-2">Upload Image</span>
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleImageUpload}
                className="hidden"
              />
            </label>
          )}
        </div>
      </div>

      {/* Videos Upload */}
      <div className="bg-[#181818] p-5 rounded-xl space-y-4">
        <h3 className="text-lg font-semibold">Property Videos</h3>
        <p className="text-sm text-gray-400">
          Upload videos of your property (Max 2 videos)
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          {formData.videos.map((video, index) => (
            <div
              key={index}
              className="relative group bg-[#1E1E1E] p-4 rounded-lg"
            >
              <p className="text-sm truncate">{video.name}</p>
              <button
                type="button"
                onClick={() => removeVideo(index)}
                className="absolute top-2 right-2 p-1 bg-red-500 rounded-full opacity-0 group-hover:opacity-100 transition"
              >
                <X size={14} />
              </button>
            </div>
          ))}

          {formData.videos.length < 2 && (
            <label className="border-2 border-dashed border-gray-600 rounded-lg p-8 flex flex-col items-center justify-center cursor-pointer hover:border-gray-500 transition">
              <Upload size={24} className="text-gray-400" />
              <span className="text-sm text-gray-400 mt-2">Upload Video</span>
              <input
                type="file"
                accept="video/*"
                onChange={handleVideoUpload}
                className="hidden"
              />
            </label>
          )}
        </div>
      </div>

      {/* Virtual Tour Link */}
      <div className="bg-[#181818] p-5 rounded-xl space-y-4">
        <h3 className="text-lg font-semibold">Virtual Tour</h3>
        <input
          type="url"
          placeholder="Paste virtual tour link here"
          value={formData.virtualTour}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, virtualTour: e.target.value }))
          }
          className="w-full bg-[#1E1E1E] px-3 py-2 rounded-md outline-none"
        />
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-end space-x-3 pt-4">
        <button
          type="button"
          onClick={onBack}
          className="px-4 py-2 text-sm sm:text-base bg-[#1a1a1a] text-gray-400 rounded-md hover:bg-[#222222]"
        >
          Back
        </button>

        <button
          type="button"
          className="px-4 py-2 text-sm sm:text-base bg-[#2c2c2c] text-white rounded-md hover:bg-[#3a3a3a]"
        >
          Save Draft
        </button>

        <button
          type="button"
          onClick={() => onNext(formData)}
          className="px-4 py-2 text-sm sm:text-base bg-green-500 text-black font-medium rounded-md hover:bg-green-400"
        >
          Next
        </button>
      </div>
    </form>
  );
}
