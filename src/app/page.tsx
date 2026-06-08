import FeaturedProjects from "@/components/featured-projects";
import Hero from "@/components/hero";
import Image from "next/image";

export default function Page() {
  return (
    <main className="mx-4">

      <Hero />

      <div className="border-b border-gray-700  max-[768px]:-mx-4 max-[768px]:w-[calc(100%+2rem)]"></div>

      <FeaturedProjects />
    </main>
  )

}
