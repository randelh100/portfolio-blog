import Navbar from "../components/Navbar";
import PersonCard from "../components/PersonCard";
import StackContent from "../components/StackContent";
import ProjectSlide from "../components/ProjectSlide";
import Slider from "../components/Slider";
import Contact from "../components/Contact";
import blog from '../../public/blog-profile.jpg'
import Image from "next/image";

export default function Home() {
  return (
    <div className="space-y-12 w-5/6 m-auto">
      <div className="border-1 border-black flex justify-evenly rounded bg-gradient-to-r from-metopolis to-metopolis2">
        <PersonCard />
        <div className="w-1/5">
          <div className="bg-black w-full h-72">
            <Image
            src={blog}
            alt="Picture of the author"
            width={500}
            height={500}
            />
          </div>
          <h1 className="text-black">Randel Humphrey</h1>
        </div>
      </div>
      <StackContent />
      <Slider/>
    </div>
  )
}

