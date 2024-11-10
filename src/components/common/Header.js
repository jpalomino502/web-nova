export default function Header({ currentTime }) {
  return (
    <header className="fixed w-full top-0 p-4 flex justify-between items-center text-sm z-50">
      <div className="flex items-center gap-2">
        <span className="text-black">{currentTime}</span>
      </div>

      <nav className="flex items-center gap-6">
        <a href="#" className="text-black hover:text-gray-900">PROJECTS</a>
        <a href="#" className="text-black hover:text-gray-900">ABOUT</a>
        <a href="#" className="text-black hover:text-gray-900">CONTACT</a>
        <a href="#" className="text-black hover:text-gray-900 flex items-center gap-1">
          BOOK NOW
          <span className="rotate-45">↑</span>
        </a>
      </nav>
    </header>
  );
}
