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
        <span class="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-pink-500">
    <span class="relative text-white dark:text-gray-950">annoyed</span>
  </span>
      </main>
    </>
  );
}

export default App;
