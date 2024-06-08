"use client";

import Image from "next/image";
import exclusive_masterclass_image from "@/assets/exclusive_masterclass_image.svg";
import networking_booths_image from "@/assets/networking_booths_image.svg";
import presentation_section_image from "@/assets/presentation_section_image.svg";
import professional_1_on_1_image from "@/assets/professional_1_on_1_image.svg";
import workshops_image from "@/assets/workshops_image.svg";
import CountUp from "react-countup";

// Data for "A typical SPAC" section Items
const sections = [
  {
    title: "Presentation Section",
    description:
      "A dynamic opening with key speakers introducing the event's themes and goals.",
    imgSrc: presentation_section_image,
    imgAlt: "Presentation",
  },
  {
    title: "Professional 1:1",
    description:
      "Engage in personalized discussions with industry professionals tailored to your career interests.",
    imgSrc: professional_1_on_1_image,
    imgAlt: "Professional Conversation",
  },
  {
    title: "Exclusive Masterclass",
    description:
      "Interactive sessions with experts to deepen your knowledge and enhance your skills.",
    imgSrc: exclusive_masterclass_image,
    imgAlt: "Masterclass",
  },
  {
    title: "Workshops",
    description:
      "Hands-on workshops designed to showcase practical skills and industry insights.",
    imgSrc: workshops_image,
    imgAlt: "Workshops",
  },
  {
    title: "Networking Booths",
    description:
      "Explore potential career paths and company cultures directly from the insiders.",
    imgSrc: networking_booths_image,
    imgAlt: "Networking",
  },
];

// Render events in the "A typical SPAC" section
const SectionItem = ({
  title,
  description,
  imgSrc,
  imgAlt,
  isReversed = false,
}: {
  title: string;
  description: string;
  imgSrc: string;
  imgAlt: string;
  isReversed: boolean;
}) => (
  <div
    className={`flex ${isReversed ? "flex-row-reverse" : "flex-row"} justify-between items-center w-full`}
  >
    {/* Text Container */}
    <div className="w-1/2 flex flex-col justify-center">
      <h4 className="text-xl sm:text-2xl md:text-3xl font-semibold text-base-content">
        {title}
      </h4>
      <p className="text-sm sm:text-base md:text-lg text-stone-400">
        {description}
      </p>
    </div>

    {/* Image Container */}
    <div
      className={`w-1/2 flex ${isReversed ? "justify-start mr-4" : "justify-end"} items-center `}
    >
      {imgSrc && (
        <Image
          src={imgSrc}
          alt={imgAlt}
          className="w-full max-w-[160px] h-auto"
        />
      )}
    </div>
  </div>
);

export const About = () => {
  return (
    <article className="px-3 md:px-8 max-w-3xl mx-auto space-y-10 overflow-none mt-20">
      <section className="space-y-8">
        <h2 className="text-primary text-5xl sm:text-6xl font-bold">
          About Us
        </h2>
        <p className="text-base-content">
          The IEEE Student Professional Awareness Conference (SPAC) is a formal
          networking event & dinner that serves esteemed professionals and
          allows them to engage with engineering and computer science students
          within their fields.
        </p>
        <p className="text-base-content">
          SPAC provides students, academics, and industry professionals an
          opportunity to network and bridge the gap between classrooms and
          boardrooms, thereby empowering attendees to build professional
          connections and form a bond.
        </p>

        {/* Colour Bubbles */}
        <div className="grid grid-flow-col justify-center h-[38vw] max-h-56">
          <div className="bg-accent text-accent-content h-full aspect-square rounded-full flex items-center justify-center text-center sm:-mr-1 bobbing-animation-1">
            <div>
              <h4 className="text-5xl min-[375px]:text-6xl min-[425px]:text-7xl sm:text-8xl font-bold">
                <CountUp end={100} duration={3} enableScrollSpy scrollSpyOnce />
              </h4>
              <p className="min-[375px]:text-xl min-[425px]:text-2xl sm:text-3xl font-bold">
                Companies
              </p>
            </div>
          </div>
          <div className="bg-neutral text-neutral-content h-[49%] aspect-square rounded-full flex items-center justify-center text-center self-end -mr-4 sm:-mr-8 bobbing-animation-4">
            <div>
              <h4 className="text-xl min-[375px]:text-3xl min-[425px]:text-4xl sm:text-5xl font-bold">
                <CountUp end={200} duration={3} enableScrollSpy scrollSpyOnce />
              </h4>
              <p className=" text-[0.5rem] min-[375px]:text-xs min-[425px]:text-sm sm:text-md font-bold">
                Students
              </p>
            </div>
          </div>
          <div className="bg-warning text-warning-content h-[65%] aspect-square rounded-full flex items-center justify-center text-center self-start -mr-3 sm:-mr-5 bobbing-animation-2">
            <div>
              <h4 className="text-4xl min-[425px]:text-5xl sm:text-6xl font-bold">
                <CountUp end={9} duration={3} enableScrollSpy scrollSpyOnce />
              </h4>
              <p className="min-[375px]:text-xl min-[425px]:text-2xl sm:text-3xl font-bold">
                Years
              </p>
            </div>
          </div>
          <div className="bg-secondary text-secondary-content h-[59%] aspect-square rounded-full flex items-center justify-center text-center self-end bobbing-animation-3">
            <div>
              <h4 className="text-3xl min-[375px]:text-4xl min-[425px]:text-5xl sm:text-6xl font-bold">
                <CountUp end={300} duration={3} enableScrollSpy scrollSpyOnce />
              </h4>
              <p className="text-[0.5rem] min-[375px]:text-xs min-[425px]:text-sm sm:text-md font-bold">
                Attendees
              </p>
            </div>
          </div>
        </div>

        <p className="text-base-content">
          First hosted in 1979, SPAC has manifested itself as an event where
          future professionals receive exposure to the world of employment which
          complements their ongoing studies.
        </p>
      </section>

      {/* A typical SPAC section */}
      <section className="space-y-8">
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-semibold pb-6">
          A typical SPAC...
        </h3>
        {sections.map((section, index) => (
          <SectionItem
            key={section.title}
            title={section.title}
            description={section.description}
            imgSrc={section.imgSrc}
            imgAlt={section.imgAlt}
            isReversed={index % 2 !== 0}
          />
        ))}
      </section>
    </article>
  );
};
