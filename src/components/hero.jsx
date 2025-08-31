export default function Hero() {
    return (
      <section className="flex flex-col items-center h-screen bg-[#0A0A0A]">
        <h1 className="text-5xl text-white font-bold mt-14">
          Find Your Perfect Property Match
        </h1>
        <p className="my-4 text-lg text-[#9CA3AF]">
          Connecting property owners, buyers, and real estate professionals
        </p>

        <div className="bg-[#FFFFFF0D] p-4 rounded-md">
          <div className="flex space-x-2 text-white">
            <button className="bg-[#22C55E] px-4 py-1 rounded-md">Buy</button>
            <button className="bg-[#FFFFFF1A] px-4 py-1 rounded-md">
              Rent
            </button>
            <button className="bg-[#FFFFFF1A] px-4 py-1 rounded-md">
              Lease
            </button>
          </div>
        </div>
      </section>
    );
}