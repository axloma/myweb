import {
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  About,
} from "./components";

export const metadata = {
  title: "YASSER",
};

export default function Home() {
  return (
    // <div className="relative z-0 bg-[#050816]">
    //   <div className="bg-[url(./assets/herobg.png)] bg-cover bg-no-repeat bg-center cursor-pointer">
    //     <Navbar />
    //     <Hero />
    <div
      // className={"relative z-0 bg-[#050816] mr-[200px] gap-7"}
      style={{ marginLeft: "20px" }}
    >
      <About />
      {/* <Experience /> */}
      <Tech />
      <Works />
      {/* <Feedbacks /> */}
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
      <br />
      <br />
      <div>
        <footer></footer>
      </div>
    </div>
  );
}
