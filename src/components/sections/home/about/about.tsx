'use client'

import Image from 'next/image'
import CountUp from 'react-countup'

import exclusive_masterclass_image from '@root/public/assets/exclusive_masterclass_image.svg'
import networking_booths_image from '@root/public/assets/networking_booths_image.svg'
import presentation_section_image from '@root/public/assets/presentation_section_image.svg'
import professional_1_on_1_image from '@root/public/assets/professional_1_on_1_image.svg'
import workshops_image from '@root/public/assets/workshops_image.svg'

// Data for "A typical SPAC" section Items
const sections = [
  {
    title: 'Presentation Section',
    description:
      'A dynamic opening with key speakers introducing the event\'s themes and goals.',
    imgSrc: presentation_section_image,
    imgAlt: 'Presentation',
  },
  {
    title: 'Professional 1:1',
    description:
      'Engage in personalized discussions with industry professionals tailored to your career interests.',
    imgSrc: professional_1_on_1_image,
    imgAlt: 'Professional Conversation',
  },
  {
    title: 'Exclusive Masterclass',
    description:
      'Interactive sessions with experts to deepen your knowledge and enhance your skills.',
    imgSrc: exclusive_masterclass_image,
    imgAlt: 'Masterclass',
  },
  {
    title: 'Workshops',
    description:
      'Hands-on workshops designed to showcase practical skills and industry insights.',
    imgSrc: workshops_image,
    imgAlt: 'Workshops',
  },
  {
    title: 'Networking Booths',
    description:
      'Explore potential career paths and company cultures directly from the insiders.',
    imgSrc: networking_booths_image,
    imgAlt: 'Networking',
  },
]

// Render events in the "A typical SPAC" section
function SectionItem({
  title,
  description,
  imgSrc,
  imgAlt,
  isReversed = false,
}: {
  title: string
  description: string
  imgSrc: string
  imgAlt: string
  isReversed: boolean
}) {
  return (
    <div
      className={`flex ${isReversed ? 'flex-row-reverse' : 'flex-row'} w-full items-center justify-between`}
    >
      {/* Text Container */}
      <div className="flex w-1/2 flex-col justify-center">
        <h4 className="text-xl font-semibold text-base-content sm:text-2xl md:text-3xl">
          {title}
        </h4>
        <p className="text-sm dark:text-stone-400 text-stone-600 sm:text-base md:text-lg">
          {description}
        </p>
      </div>

      {/* Image Container */}
      <div
        className={`flex w-1/2 ${isReversed ? 'mr-4 justify-start' : 'justify-end'} items-center `}
      >
        {imgSrc && (
          <Image
            src={imgSrc}
            alt={imgAlt}
            className="h-auto w-full max-w-[160px]"
          />
        )}
      </div>
    </div>
  )
}

export function About() {
  return (
    <article
      id="about"
      className="overflow-none mx-auto mt-20 max-w-3xl space-y-10 px-3 md:px-8"
    >
      <section className="space-y-8">
        <h2 className="text-5xl font-bold text-primary sm:text-6xl">
          About Us
        </h2>
        <p>
          The IEEE Student Professional Awareness Conference (SPAC) is a formal
          networking event & dinner that serves esteemed professionals and
          allows them to engage with engineering and computer science students
          within their fields.
        </p>
        <p>
          SPAC provides students, academics, and industry professionals an
          opportunity to network and bridge the gap between classrooms and
          boardrooms, thereby empowering attendees to build professional
          connections and form a bond.
        </p>

        {/* Colour Bubbles */}
        <div className="grid h-[38vw] max-h-56 grid-flow-col justify-center">
          <div className="bobbing-animation-1 flex aspect-square h-full items-center justify-center rounded-full bg-tertiary text-center text-tertiary-foreground sm:-mr-1">
            <div>
              <h4 className="text-5xl font-bold min-[375px]:text-6xl min-[425px]:text-7xl sm:text-8xl text-background">
                <CountUp end={100} duration={3} enableScrollSpy scrollSpyOnce />
              </h4>
              <p className="font-bold min-[375px]:text-xl min-[425px]:text-2xl sm:text-3xl text-background">
                Companies
              </p>
            </div>
          </div>
          <div className="bobbing-animation-4 -mr-4 flex aspect-square h-[49%] items-center justify-center self-end rounded-full bg-neutral text-center sm:-mr-8">
            <div>
              <h4 className="text-xl font-bold min-[375px]:text-3xl min-[425px]:text-4xl sm:text-5xl text-background">
                <CountUp end={200} duration={3} enableScrollSpy scrollSpyOnce />
              </h4>
              <p className=" sm:text-md text-[0.5rem] font-bold min-[375px]:text-xs min-[425px]:text-sm text-background">
                Students
              </p>
            </div>
          </div>
          <div className="bobbing-animation-2 -mr-3 flex aspect-square h-[65%] items-center justify-center self-start rounded-full bg-warning text-center text-warning-foreground sm:-mr-5">
            <div>
              <h4 className="text-4xl font-bold min-[425px]:text-5xl sm:text-6xl text-background">
                <CountUp end={9} duration={3} enableScrollSpy scrollSpyOnce />
              </h4>
              <p className="font-bold min-[375px]:text-xl min-[425px]:text-2xl sm:text-3xl text-background">
                Years
              </p>
            </div>
          </div>
          <div className="bobbing-animation-3 flex aspect-square h-[59%] items-center justify-center self-end rounded-full bg-auxiliary text-center text-auxiliary-content">
            <div>
              <h4 className="text-3xl font-bold min-[375px]:text-4xl min-[425px]:text-5xl sm:text-6xl text-background">
                <CountUp end={300} duration={3} enableScrollSpy scrollSpyOnce />
              </h4>
              <p className="sm:text-md text-[0.5rem] font-bold min-[375px]:text-xs min-[425px]:text-sm text-background">
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
        <h3 className="pb-6 text-3xl font-semibold sm:text-4xl md:text-5xl">
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
  )
}
