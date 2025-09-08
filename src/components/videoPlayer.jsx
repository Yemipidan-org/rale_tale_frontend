"use client";
import React, { useRef, useState } from "react";
import { Play, Pause, Maximize2, Globe } from "lucide-react";

const CustomVideoPlayer = () => {
  const videoRef = useRef(null);
  const progressRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  // Play / Pause toggle
  const togglePlay = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Update progress
  const handleTimeUpdate = () => {
    const current = videoRef.current.currentTime;
    const total = videoRef.current.duration;
    setProgress((current / total) * 100);
  };

  // Seek video
  const handleSeek = (e) => {
    const rect = progressRef.current.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    videoRef.current.currentTime = percent * videoRef.current.duration;
    setProgress(percent * 100);
  };

  // Fullscreen
  const handleFullscreen = () => {
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  return (
    <div className="bg-black rounded-xl overflow-hidden relative w-full max-w-4xl   shadow-lg">
      {/* Video */}
      <video
        ref={videoRef}
        onTimeUpdate={handleTimeUpdate}
        className="w-full h-auto object-cover"
      >
        <source src="/sample.mp4" type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>

      {/* Controls */}
      <div className="absolute bottom-0 left-0 right-0 bg-black/80 flex flex-col px-3 py-2">
        {/* Top-right globe button */}
        <button className="absolute top-2 right-2 text-white hover:text-gray-300">
          <Globe size={20} />
        </button>

        {/* Progress Bar */}
        <div
          ref={progressRef}
          className="h-1 bg-gray-600 cursor-pointer rounded"
          onClick={handleSeek}
        >
          <div
            className="h-1 bg-green-500 rounded"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Bottom Controls */}
        <div className="flex items-center justify-between mt-2">
          <button
            onClick={togglePlay}
            className="text-white hover:text-gray-300"
          >
            {isPlaying ? <Pause size={20} /> : <Play size={20} />}
          </button>

          <button
            onClick={handleFullscreen}
            className="text-white hover:text-gray-300"
          >
            <Maximize2 size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomVideoPlayer;
