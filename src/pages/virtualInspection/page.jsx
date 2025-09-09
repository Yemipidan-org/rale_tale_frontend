import { BedDouble, ShowerHead, Toilet } from "lucide-react";
import CustomVideoPlayer from "../../components/videoPlayer";
import ScheduleViewingForm from "./component/form";
import PaymentSuccess from "../../components/PaymentSuccess";
import React from "react";

export default function VirtualInspection() {
  const [paymentSuccessFull, setPaymentSuccessFull] = React.useState(false);
  return (
    // Use column layout on small screens and row on md+; ensure full-width stacking
    <div className="p-4 md:p-8 flex flex-col md:flex-row gap-6 md:gap-3 w-full bg-[#121212] min-h-screen items-start">
      <div className="flex-1 flex flex-col gap-6 md:gap-8 w-full">
        <div className="relative">
          <CustomVideoPlayer />
          {paymentSuccessFull && (
            <div className="bg-[#00B37880] absolute top-0 bottom-0 p-4 rounded-md w-full flex items-center justify-center">
              <p className="text-white">You've unlocked access to this tour!</p>
            </div>
          )}
        </div>
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

      {paymentSuccessFull ? (
        <PaymentSuccess />
      ) : (
        <ScheduleViewingForm setPaymentSuccessFull={setPaymentSuccessFull} />
      )}
    </div>
  );
}
