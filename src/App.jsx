// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "./components/navbar.jsx";
import About from "./components/About.jsx";
import "./App.css";

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

            <main
                style={{
                    marginTop: "3rem",
                    paddingTop: "1rem",
                    height: "100vh",
                }}
            >
               <About />

                <span className="flex w-full items-center justify-center mt-100">
                    <span className="relative inline-block">
                        <span className="absolute -inset-x-10 -inset-y-3 block -skew-y-10 bg-linear-180 from-amber-300 to-amber-700"></span>
                        <span className="relative text-2xl font-bold text-gray-700 hover:text-purple-500">
                            testing
                        </span>
                    </span>
                </span>

                <div className="">
                    <h2 className="text-xl text-black ">Heading</h2>
                    <p className="text-black  not-hover:bg-amber-400">
                        Hover over this paragraph to change the color of the
                        next one.
                    </p>
                    <p className="text-black ">
                        This paragraph will turn red when the previous one is
                        hovered.
                    </p>
                    <p className="text-black ">
                        This paragraph will turn red when the previous one is
                        hovered.
                    </p>
                    <p className="text-black ">
                        This paragraph will turn red when the previous one is
                        hovered.
                    </p>
                    <p className="text-black ">
                        This paragraph will turn red when the previous one is
                        hovered.
                    </p>
                </div>
            </main>
        </>
    );
}

export default App;
