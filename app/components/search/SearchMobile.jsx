
// import components 
import DateSelection from "../date/DateSelection";
import HourSelection from "../date/HourSelection";
import LocationSelection from "../date/LocationSelection";

export default function SearchMobile() {
  return (
    <div className="xl:hidden font-medium">
      <div className="container mx-auto ">
          <div className="flex flex-col gap-y-4 ">
            {/* location selection */}
            <LocationSelection />

            {/* date selection */}
            <DateSelection />

            {/* Hour selection */}
            <HourSelection /> 

            {/* btn */}
            <div className="flex items-center px-6 ">
              <button className="btn btn-sm btn-accent w-[164px] mx-auto "> Search </button>
            </div>
          </div>
      </div>
    </div>
  )
}









