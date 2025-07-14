import "./App.css";
import Me from "./components/me/me";
import Experience from "./components/experience/experience";

function App() {
  return (
    <>
      <div className="flex justify-center w-screen h-full bg-radial from-slate-900 to-black text-gray-100 ">
        <div className="w-200">
          <Me />

          <div className="py-14 mx-2">
            <Experience />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
