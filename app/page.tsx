import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-dvh flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col text-center sm:text-left sm:flex-row items-center justify-center gap-4 sm:gap-8 [text-shadow:_2px_2px_5px_var(--tw-shadow-color)] shadow-black">
        <div className="size-36 relative hover:drop-shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all duration-200">
          <Image
            src="/static/profile.png"
            alt="Logo"
            fill
            className="rounded-full"
          />
        </div>
        <div className="flex flex-col gap-4 group-hover:drop-shadow-2xl transition-all duration-200">
          <h1 className="text-6xl text-cyan-500">k3ng</h1>
          <p className="text-stone-500">tags: forensics, web exploitation</p>
          <div className="flex gap-4 justify-center sm:justify-start">
            <a href="/about" className="hover:text-cyan-500 transition-all duration-200">about</a>
            <a href="/achievements" className="hover:text-cyan-500 transition-all duration-200">achievements</a>
            <a href="https://writeups.k3ng.xyz" className="hover:text-cyan-500 transition-all duration-200">writeups</a>
          </div>
        </div>
      </div>
    </div>
  );
}
