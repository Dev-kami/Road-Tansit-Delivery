import NavBar from "./NavBar";
import RequestQuoteButton from "@/ui/RequestQuoteButton";

const HomePage = () => {
  return (
    <section className="h-full w-full bg-home-image bg-cover bg-center text-white">
      <NavBar />

      <div className="lg:px-36 px-10 pt-32 h-[calc(100vh-3.5rem)]">
        <h1 className="font-lobster lg:text-6xl sm:text-5xl text-4xl pl-4 relative before:h-[calc(100%-1.5rem)] before:w-1 before:bg-gradient-to-b from-primary to-white before:absolute before:left-1">
          We will move anything <br /> into any direction you <br /> want.
        </h1>
        <RequestQuoteButton className="ml-4 mt-5 bg-primary p-3 rounded-lg">
          Request Quote
        </RequestQuoteButton>
      </div>
    </section>
  );
};

export default HomePage;
