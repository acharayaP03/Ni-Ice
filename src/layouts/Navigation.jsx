import { hamburger } from '../assets/icons';
import { headerLogo } from '../assets/images';
import { navigationLinks } from '../constants';
import NavLinks from '../components/NavLinks';

export default function Navigation() {
  return (
    <header className="padding-x absolute z-10 w-full py-8">
      <nav className="max-container flex items-center justify-between">
        {/* <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a> */}
        <a href="/" className="font-palanquin font-bold leading-4">
          <span className="text-3xl font-bold text-coral-red">[ Ni-Ice ]</span>
        </a>
        <ul className="flex flex-1 items-center justify-center gap-16 max-lg:hidden">
          {navigationLinks.map((link) => (
            <NavLinks link={link} key={link.label} />
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <img src={hamburger} alt="Hamburger menu" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
}
