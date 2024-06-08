import Image from "next/image";
import logo from "/assets/spac_logo_year_stars.svg";

export const Main = () => {
  return (
    // Grid background container
    // <div className="min-h-screen flex justify-center items-center p-4 w-full dark:bg-black bg-white dark:bg-grid-green-600/[0.5] bg-grid-black/[0.2] overflow-none">
    <div className="h-screen flex justify-center items-center p-4 w-full bg-black bg-grid-green-600/[0.5] overflow-none">
      {/* Radial gradient for the container to give a faded look */}
      {/* <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black)]"></div> */}
      <div className="h-screen absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black)]"></div>

      {/* Center box */}
      <main className="flex flex-col justify-center items-center space-y-4 h-fit border border-secondary px-4 py-8 md:px-20 md:py-16 w-full max-w-4xl rounded-lg transition-all ease-in-out duration-300 group hover:shadow-[0_0px_15px_rgba(0,202,255,1)] backdrop-blur-xs">
        <Image
          src={logo}
          alt="Main SPAC logo with year and stars"
          className="w-full max-w-lg sm:max-w-xl bobbing-animation-1 transition-all ease-in-out duration-700 group-hover:drop-shadow-[0_0px_5px_rgba(0,202,255,1)]"
        />

        {/* Text */}
        <div className="flex flex-col items-center space-y-2 text-center">
          <p className="font-semibold text-lg md:text-2xl">
            IEEE Student Professional Awareness Conference
          </p>
          <p className="text-xs md:text-xl">
            November 1<sup>st</sup> |{" "}
            <a
              href="https://maps.app.goo.gl/wk5vdFH7StaCvsJf7"
              target="_blank"
              className="link"
            >
              Brookstreet Hotel
            </a>
          </p>
        </div>

        {/* Button(s) */}
        <a href="mailto:patronage@ieeespac.ca?subject=SPAC 2024 Sponsorship Information Request&cc=lead@ieeespac.ca">
          <button className="btn btn-outline btn-accent btn-wide text-lg md:text-xl group-hover:shadow-[0_0px_10px_rgba(255,209,0,1)] uppercase">
            Become a Patron
          </button>
        </a>
      </main>
    </div>
  );
};
