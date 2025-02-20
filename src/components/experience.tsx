import Image, { StaticImageData } from "next/image";
import FirstQALogo from "../../public/Firstqa-systems-logo.png";
import StratforgeLogo from "../../public/stratforge-logo.png";

interface ExperienceDataType {
  company: string;
  logo: StaticImageData;
  role: string;
  location: string;
  duration: string;
  description: string;
}

export default function Experience() {
  const experienceData: ExperienceDataType[] = [
    {
      company: "Stratforge Pvt, Ltd",
      logo: StratforgeLogo,
      role: "Front End Engineer",
      location: "Chennai (WFO)",
      duration: "June 2023 - January 2025",
      description:
        "Developed a data visualization application using React.js and AmCharts, improving user insights by 30%. Built a conversation analytics platform, optimizing data presentation for efficient analysis. Implemented TanStack Table for Pivot Table functionality, enhancing data organization. Improved application performance by reducing load time by 25% through code optimization. Worked in agile development methodology.",
    },
    {
      company: "FirstQA Systems KK",
      logo: FirstQALogo,
      role: "Analyst Developer",
      location: "Japan (WFH)",
      duration: "August 2022 - May 2023",
      description:
        "Led the development of a tracking system for web & mobile, integrating QR code scanning for enhanced logistics. Developed a real-time tracking dashboard, reducing operational delays by 20%. Worked in agile development methodology.",
    },
    {
      company: "FirstQA Systems KK",
      logo: FirstQALogo,
      role: "Trainee Developer",
      location: "Japan (WFH)",
      duration: "June 2021 - July 2022",
      description:
        "Migrated a video conferencing application from Flutter to React Native, improving cross-platform performance. Assisted in AWS Cognito authentication integration for secure user management.",
    },
    {
      company: "FirstQA Systems KK",
      logo: FirstQALogo,
      role: "Internship Trainee",
      location: "Japan (WFH)",
      duration: "January 2021 - May 2021",
      description:
        "Built an initial prototype of a video conferencing app using Flutter.",
    },
  ];

  return (
    <div
      id="experience"
      className="p-4 flex flex-col justify-center items-center bg-gray-300 gap-y-8 pt-16"
    >
      <div className="text-xl sm:text-2xl text-black font-semibold border-4 border-black p-2">
        Experience
      </div>

      <div className="sm:w-[70%] w-[90%]">
        <ol className="relative border-s border-gray-400 ml-6 sm:ml-4">
          {experienceData.map((item, idx) => (
            <li key={idx} className="mb-10 ms-10">
              <span className="absolute flex items-center justify-center w-10 h-10 bg-white rounded-full -start-5 ring-8 ring-white">
                <Image
                  src={item.logo}
                  alt="stratforge-logo"
                  width={40}
                  height={40}
                />
              </span>
              <div className="flex flex-row justify-between items-center">
                <h3 className="flex items-center mb-1 text-lg font-semibold text-black">
                  {item.company} - {item.role}
                </h3>
                <h3 className="flex items-center mb-1 text-lg font-semibold text-black">
                  {item.location}
                </h3>
              </div>
              <span className="block mb-2 text-black">{item.duration}</span>
              <p className="mb-4 text-lg text-black font-light text-justify">
                {item.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
