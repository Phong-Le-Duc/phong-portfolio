import HeroV3 from "@/components/hero-v3";
import Link from "next/link";
import Skillset from "@/components/skillset";
import GalleryFade from "@/components/gallery-fade";
import GallerySlide from "@/components/gallery-slide";

export default function Page() {
  return (
    <main className="mx-4 ">

      <HeroV3 />

      {/* <div className="border-b border-gray-700 shadow-[0_18px_28px_rgba(255,255,255,0.85)] max-[768px]:-mx-4 max-[768px]:w-[calc(100%+2rem)]"></div> */}



      <div className="-mx-4 mt-12">
        <GallerySlide />
      </div>


      <div className="mt-24">
        <GalleryFade />
      </div>

      <div className="text-center">
        <Link href="/my-projects" className="view-projects-link mt-8 inline-block border-b-2 border-blue-700 p-2 text-sm text-white">
          View Project list
        </Link>
      </div>


      <div className="max-w-275 mx-auto mt-24">
        <Skillset />
      </div>
    </main>
  )

}
