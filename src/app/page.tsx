import Image from "next/image";
import { Hero } from "@/components/sections/home/hero/hero";
import { Header } from "@/components/layout/header/header";
import { Footer } from "@/components/layout/footer/footer";
import { About } from "@/components/sections/home/about/about";
import {Contact} from "@/components/sections/home/contact/contact";
import { PastPatrons } from "@/components/sections/home/past-patrons/past-patrons";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <PastPatrons />
      <Contact />
      <Footer />
    </>
  );
}
