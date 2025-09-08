import { BedDouble, ShowerHead, Toilet } from "lucide-react";
import CustomVideoPlayer from "../../components/videoPlayer";
import ScheduleViewingForm from "./component/form";

export default function VirtualInspection() {
  return (
    <div className="p-8 flex gap-3 bg-[#121212] min-h-screen">
      <div className="flex flex-col gap-6 md:gap-8">
        <CustomVideoPlayer />
        <div className="bg-[#161616] p-6 rounded-md">
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
