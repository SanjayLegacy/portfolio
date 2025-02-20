export default function AboutMe() {
  return (
    <div
      id="about-me"
      className="p-4 flex flex-col justify-center items-center bg-gray-300 gap-y-8 pt-16"
    >
      <div className="text-xl sm:text-2xl text-black font-semibold border-4 border-black p-2">
        About Me
      </div>
      <div className="text-lg text-black font-light sm:w-[70%] w-[90%] text-justify">
        Front-end engineer with expertise in ReactJS, optimizing performance and
        user experience. Proven track record in building analytics platforms,
        tracking systems, and video conferencing apps. Skilled in JavaScript,
        TypeScript, and modern web technologies. Passionate about creating
        efficient and scalable solutions for complex problems.
      </div>
    </div>
  );
}
