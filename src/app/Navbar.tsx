import Link from 'next/link'

const Navbar = () => {
    return (
      <div className="sticky top-0 z-50 bg-black text-white mb-4 px-8">
        <div className="flex justify-between items-center">
          <div className="flex justify-start">
            <img src="/images/bitmoji.png" alt="Apple bitmoji of myself" className="w-32 h-32"/>
          </div>
          <div className="flex justify-end space-x-8">
            <Link href="/">Home</Link>
            <Link href="/experience">Experience</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/readings">Readings</Link>
          </div>
        </div>
      </div>
    );
  }
  
  export default Navbar;
  