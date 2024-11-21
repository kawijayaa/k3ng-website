export default function About() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-12 sm:px-6 px-8">
      <div className="flex flex-col sm:w-1/2 text-left sm:flex-row items-center justify-center gap-4 sm:gap-8">
        <div className="flex flex-col gap-4 transition-all duration-200">
          <h1 className="text-6xl text-cyan-500">about</h1>
          <p>hello, i am an indonesian ctf player currently playing for CSUI, an academic team from Universitas Indonesia. participated in ctfs since 2022 and mainly solve web exploitation and forensic challenges. i also create challenges sometimes, an archive is available <a href="https://github.com/kawijayaa/ctf-challenges" className="hover:text-cyan-500 transition-all duration-200">here</a>.</p>
          <p>currently looking for a team, any inquiries can be sent to my <a href="https://discordapp.com/users/243690464795033601" className="hover:text-cyan-500 transition-all duration-200">discord</a>.</p>
          <div className="w-fit">
            <a className="text-stone-500 hover:text-cyan-500" href="/">go back</a>
          </div>
        </div>
      </div>
    </div>
  );
}
