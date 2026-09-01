import FeaturedProjects from "@/components/featured-projects";
import Hero from "@/components/hero";
import HeroV2 from "@/components/hero-v2";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <main className="mx-4">

      <Hero />

      <div className="border-b border-gray-700  max-[768px]:-mx-4 max-[768px]:w-[calc(100%+2rem)]"></div>

      <FeaturedProjects />

      <Link href="/my-projects" className="my-4 block text-center text-blue-500 hover:text-blue-700">
        View All Projects
      </Link>
    </main>
  )

}
