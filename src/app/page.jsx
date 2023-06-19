import Navbar from "../components/Navbar";
import PersonCard from "../components/PersonCard";
import StackContent from "../components/StackContent";
import ProjectSlide from "../components/ProjectSlide";
import Slider from "../components/Slider";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div className="space-y-12 w-5/6 m-auto">
      <div className="border-2 border-black flex justify-evenly">
        <PersonCard />
        <div className="w-1/5">
          <div className="bg-black w-full h-72">
          </div>
          <h1 className="text-black">Randel Humphrey</h1>
        </div>
      </div>
      <StackContent />
      <Slider/>
    </div>
  )
}

