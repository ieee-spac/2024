import type { StaticImageData } from "next/image";
import Image from "next/image";
import nokia_logo from "./assets/nokia_logo.svg";
import fdm_logo from "./assets/fdm_logo.svg";
import ciena_logo from "./assets/ciena_logo.svg";
import public_service_commission_of_canada_logo from "./assets/public_service_commission_of_canada_logo.svg";
import drdc_canada_logo from "./assets/drdc_canada_logo.svg";
import ross_video_logo from "./assets/ross_video_logo.svg";
import uber_logo from "./assets/uber_logo.svg";
import general_dynamics_logo from "./assets/general_dynamics_logo.svg";
import { Spotlight } from "./Spotlight";

// Logo and Tier types
type Logo = {
  src: StaticImageData;
  alt: string;
  url: string;
  overrides: string;
};

type Tier = {
  [key: string]: Logo[];
};

const patronsData: Tier = {
  partner: [
    {
      src: nokia_logo,
      alt: "Nokia logo",
      url: "https://www.nokia.com",
      overrides: "w-full bobbing-animation-1",
    },
  ],
  gold: [
    {
      src: fdm_logo,
      alt: "FDM Group logo",
      url: "https://www.fdmgroup.com",
      overrides: "w-1/3 bobbing-animation-2",
    },
    {
      src: ciena_logo,
      alt: "Ciena logo",
      url: "https://www.ciena.com",
      overrides: "w-1/3 bobbing-animation-3",
    },
    {
      src: public_service_commission_of_canada_logo,
      alt: "Public Service Commission of Canada logo",
      url: "https://www.canada.ca/en/public-service-commission.html",
      overrides: "w-1/3 bobbing-animation-4",
    },
  ],
  silver: [
    {
      src: drdc_canada_logo,
      alt: "DRDC Canada logo",
      url: "https://www.canada.ca/en/defence-research-development.html",
      overrides: "w-1/4 bobbing-animation-1",
    },
    {
      src: ross_video_logo,
      alt: "Ross Video logo",
      url: "https://www.rossvideo.com",
      overrides: "w-1/4 bobbing-animation-2",
    },
    {
      src: uber_logo,
      alt: "Uber logo",
      url: "https://www.uber.com",
      overrides: "w-1/4 bobbing-animation-4",
    },
    {
      src: general_dynamics_logo,
      alt: "General Dynamics logo",
      url: "https://www.gd.com",
      overrides: "w-1/4 bobbing-animation-3",
    },
  ],
};

interface LogoSectionProps {
  title: string;
  titleColor: string;
  logos: Logo[];
  gradientClass: string;
}

// Render logos for each section
const LogoSection = ({
  title,
  titleColor,
  logos,
  gradientClass,
}: LogoSectionProps) => (
  <>
    <h3
      className={`text-3xl sm:text-4xl md:text-5xl font-semibold ${titleColor} mb-4`}
    >
      {title}
    </h3>
    <span
      className={`block bg-gradient-to-r ${gradientClass} p-[0.5px] mb-4`}
    />
    <div className="flex items-end mb-8">
      {logos.map((logo) => (
        <a
          key={logo.alt}
          href={logo.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex justify-center items-center ${logo.overrides} p-2`}
        >
          <Image
            src={logo.src}
            alt={logo.alt}
            className="transition-all duration-700 hover:scale-110"
          />
        </a>
      ))}
    </div>
  </>
);

export const PastPatrons = () => {
  return (
    <div className="px-3 md:px-8 max-w-3xl mx-auto mt-20">
      <h2 className="text-primary text-5xl sm:text-6xl font-bold mb-10">
        Past Patrons
      </h2>
      <Spotlight
        className="top-[150rem] -left-20 md:left-10 md:top-[140rem]"
        fill="LightGoldenRodYellow"
      />
      <LogoSection
        title="Partner"
        titleColor="text-warning"
        logos={patronsData.partner}
        gradientClass="from-warning via-accent to-black"
      />
      <LogoSection
        title="Gold"
        titleColor="text-accent"
        logos={patronsData.gold}
        gradientClass="from-accent via-secondary to-black"
      />
      <LogoSection
        title="Silver"
        titleColor="text-slate-50"
        logos={patronsData.silver}
        gradientClass="from-primary via-secondary to-black"
      />
      {/* Button(s) */}
      <a href="mailto:patronage@ieeespac.ca?subject=SPAC 2024 Sponsorship Information Request&cc=lead@ieeespac.ca">
        <button className="btn btn-outline btn-accent btn-lg w-full text-lg md:text-xl hover:shadow-[0_0px_10px_rgba(255,209,0,1)] uppercase">
          Become a Patron
        </button>
      </a>
    </div>
  );
};
