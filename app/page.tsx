import SectionWrapper from "@/components/SectionWrapper";
import { cursive, heading } from "./layout";
import { BsSearch } from "react-icons/bs";

export default function Home() {
  return (
    <SectionWrapper>
      <section className="flex justify-center text-center items-center min-h-screen relative">
        {/* Animations */}
        <div className="w-96 h-96 dark:bg-purple-800 bg-purple-300 absolute rounded-full z-[-3] translate-x-8 blur-3xl -translate-y-8 animation-first"></div>
        <div className="w-96 h-96 dark:bg-rose-700 bg-rose-200 absolute rounded-full z-[-3] blur-3xl translate-y-8 animation-second"></div>
        {/* Animations end */}
        <div>
          <h2
            className={`text-5xl mx-auto w-[500px] p-2 ${cursive.className} text-primary`}
          >
            Let&apos;s Journey into Unmatched Comfort and Luxury.
          </h2>
          <h1 className={`${heading.className} p-2 max-w-4xl mx-auto`}>
            Explore, Book, and Unwind - Your Ideal Stay Awaits!
          </h1>
          <p className="dark:text-zinc-400 text-zinc-700 max-w-4xl mx-auto p-2">
            Welcome to our hotel booking platform, where every click leads you
            to a tailored experience. Find your dream destination, book with
            ease, and indulge in unforgettable moments of relaxation and
            adventure.
          </p>
          <div className="my-4 max-w-4xl px-4 py-3 mx-auto">
            <div className="shadow-lg dark:shadow-zinc-900 rounded-full overflow-hidden h-12 flex items-center justify-between">
              <form className="shadow-inner relative w-full dark:shadow-zinc-900 text-start h-full">
                <input
                  aria-label="name"
                  type="text"
                  name="place"
                  id="place"
                  placeholder="Place Name or City"
                  className="bg-transparent px-6 py-2 flex-1 !outline-none !border-none dark:text-white text-zinc-900 w-full h-full"
                />
                <BsSearch
                  className="p-2 absolute -translate-y-1/2 top-1/2 right-2 z-[2] cursor-pointer bg-primary rounded-full text-white hover:bg-purple-500 duration-300"
                  size={30}
                />
              </form>
            </div>
          </div>
        </div>
      </section>
    </SectionWrapper>
  );
}
