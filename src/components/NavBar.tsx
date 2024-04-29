import { navData } from "@/data/navData";
import RequestQuoteButton from "@/ui/RequestQuoteButton";

const NavBar = () => {
  const data = navData;
  return (
    <header className="lg:px-36 px-10 h-14 flex bg-[rgba(40,54,24,0.3)]">
      <nav className="flex items-center h-full w-full lg:gap-16 gap-5">
        {data.map((item) => (
          <ul key={item.title}>
            <li className="cursor-pointer">{item.title}</li>
          </ul>
        ))}
      </nav>

      <RequestQuoteButton className="bg-primary w-40 ml-5 hidden sm:block">
        Request Quote
      </RequestQuoteButton>
    </header>
  );
};

export default NavBar;
