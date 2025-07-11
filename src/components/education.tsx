import Image from "next/image";
import KECLogo from "../../public/KEC-logo.png";

export default function Education() {
  return (
    <div
      id="education"
      className="p-4 flex flex-col justify-center items-center bg-gray-300 gap-y-8 pt-16"
    >
      <div className="text-xl sm:text-2xl text-black font-semibold border-4 border-black p-2">
        Education
      </div>

      <div className="sm:w-[70%] w-[90%]">
        <ol className="relative border-s border-gray-400 ml-6 sm:ml-4">
          <li className="mb-10 ms-10">
            <span className="absolute flex items-center justify-center w-10 h-10 bg-white rounded-full -start-5 ring-8 ring-white">
              <Image src={KECLogo} alt="kec-logo" width={40} height={40} />
            </span>
            <div className="flex flex-row justify-between items-center">
              <h3 className="flex items-center mb-1 text-lg font-semibold text-black">
                Kongu Engineering College
              </h3>
              <h3 className="flex items-center mb-1 text-lg font-semibold text-black">
                Perundurai
              </h3>
            </div>
            <span className="block mb-2 text-black">June 2016 - May 2021</span>
            <p className="mb-4 text-lg text-black font-light text-justify">
              MSc Software Systems (5 Years Integrated Course) -{" "}
              <span className="font-semibold">8.24 CGPA</span>
            </p>
          </li>
        </ol>
      </div>
    </div>
  );
}
