import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { TravelTypes } from "../components/TravelTypes";
import { Separator } from "../components/Separator";
import { Slide } from "../components/Slide";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <TravelTypes />
      <Separator />
      <Slide />
    </>
  )
}
