export default function Achievements() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-12 sm:px-6 px-8 [text-shadow:_2px_2px_5px_var(--tw-shadow-color)] shadow-black">
      <div className="flex flex-col sm:w-1/2 text-left sm:flex-row items-center justify-center gap-4 sm:gap-8">
        <div className="flex flex-col gap-4 transition-all duration-200">
          <h1 className="text-4xl sm:text-6xl text-cyan-500">achievements</h1>
          <ul className="list-disc list-inside">
            <li>PwC Hackaday 2024 1st Runner Up (2024)</li>
            <li>CTF TCP1P International 2024 Winner (2024)</li>
            <li>Gemastik 2024 Keamanan Siber Finalist (2024)</li>
            <li>Technofair 11.0 CTF 3rd Place (2024)</li>
            <li>CTF COMPFEST 14 Finalist (2022)</li>
          </ul>
          <div className="w-fit">
            <a className="text-stone-500 hover:text-cyan-500" href="/">go back</a>
          </div>
        </div>
      </div>
    </div>
  );
}
