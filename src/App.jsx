import Navbar from "./components/navbar.jsx";

function App() {
  let items = [
    { ref: "#", text: "Home" },
    { ref: "#", text: "Services" },
    { ref: "#", text: "Skills" },
    { ref: "#", text: "Education" },
    { ref: "#", text: "Experience" },
    { ref: "#", text: "Contact" },
  ];

  let dropdown = [
    { ref: "#", text: "Will do" },
    { text: "" },
    { ref: "#", text: "Will do" },
  ];

  return (
    <>
      <Navbar items={items} dropdown={dropdown} thickness={3} />

      <main style={{ marginTop: "3rem", paddingTop: "1rem", height: "100vh" }}>
        <p className="text-7xl text-amber-400">Hello World</p>
        <span className="flex w-full items-center justify-center">
          <span className="relative inline-block">
            <span className="absolute -inset-x-10 -inset-y-3 block -skew-y-10 bg-linear-180 from-amber-300 to-amber-700"></span>
            <span className="relative text-gray-700 hover:text-purple-500">
              testing
            </span>
          </span>
        </span>
      </main>
    </>
  );
}

export default App;
