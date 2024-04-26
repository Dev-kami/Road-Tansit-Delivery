import About from "@/components/About";
import GetStarted from "@/components/GetStarted";
import Home from "@/components/Home";

const Page = () => {
  return (
    <div className="h-screen w-full">
      <Home />
      <About />
      <GetStarted />
    </div>
  );
};

export default Page;
