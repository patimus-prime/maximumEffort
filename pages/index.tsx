import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { NavbarMinimal } from '../components/NavBar';
import { HeaderAction } from '../components/Header';
import { HeroContentLeft } from '../components/HeroLeft';

export default function HomePage() {
  return (
    <>
      {/* <NavbarMinimal /> */}
      <HeroContentLeft />
      {/* <HeaderAction /> FIXME NEED LINKS */}
      {/* <Welcome /> */}
      <ColorSchemeToggle />
    </>
  );
}
