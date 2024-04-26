import { navData } from "@/data/navData";
import Button from "@/ui/RequestQuoteButton";

const NavBar = () => {
  const data = navData;
  return (
    <header className="px-36 h-14 flex bg-[rgba(40,54,24,0.3)]">
      <nav className="flex items-center h-full w-full gap-16">
        {data.map((item) => (
          <ul key={item.title}>
            <li className="cursor-pointer">{item.title}</li>
          </ul>
        ))}
      </nav>

      <Button className="bg-primary w-40">Request Quote</Button>
    </header>
  );
};

export default NavBar;
