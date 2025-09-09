import { BedDouble, ShowerHead, Toilet } from "lucide-react";
import CustomVideoPlayer from "../../components/videoPlayer";
import ScheduleViewingForm from "./component/form";

export default function VirtualInspection() {
  return (
    // Use column layout on small screens and row on md+; ensure full-width stacking
    <div className="p-4 md:p-8 flex flex-col md:flex-row gap-6 md:gap-3 w-full bg-[#121212] min-h-screen items-start">
      <div className="flex-1 flex flex-col gap-6 md:gap-8 w-full">
        <CustomVideoPlayer />
        <div className="bg-[#161616] p-6 rounded-md w-full">
          <div className="mb-4">
            <h1 className="text-white text-[24px] font-semibold">
              Luxury Penthouse Suite
            </h1>
            <p className="text-[#9CA3AF]">Victoria Island, Lagos</p>
          </div>
          <div className="flex gap-6 text-white">
            <div className="flex items-center gap-2">
              <BedDouble />
              <div>
                <p>4</p>
                <p className="text-[#9CA3AF]">Bedrooms</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <ShowerHead />
              <div>
                <p>3</p>
                <p className="text-[#9CA3AF]">Bathrooms</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ScheduleViewingForm />
    </div>
  );
}
