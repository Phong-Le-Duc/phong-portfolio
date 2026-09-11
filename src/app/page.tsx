import HeroV3 from "@/components/hero-v3";
import Link from "next/link";
import GalleryFade from "@/components/gallery-fade";
import GallerySlide from "@/components/gallery-slide";

export default function Page() {
  return (
    <main className="mx-4">

      <HeroV3 />

      <div className="border-b border-gray-700  max-[768px]:-mx-4 max-[768px]:w-[calc(100%+2rem)]"></div>



      <div className="-mx-4">
        <GallerySlide />
      </div>


      <div className="mt-8">
        <GalleryFade />
      </div>

      <Link href="/my-projects" className="my-4 block text-center text-blue-500 hover:text-blue-700">
        View Project list
      </Link>
    </main>
  )

}
