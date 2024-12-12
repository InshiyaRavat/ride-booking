import Image from "next/image";
import SearchSection from "../components/Home/SearchSection"
import GoogleMapSection from "../components/Home/GoogleMapSection"

export default function Home() {
  return (
    <div className="flex justify-center items-center p-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
          <SearchSection/>
        </div>
        <div className="col-span-2 ml-8 bg-white shadow-lg rounded-lg p-6 border border-gray-200">
          <GoogleMapSection/>
        </div>
      </div>
    </div>
  );
}
