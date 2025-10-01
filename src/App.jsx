import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Right_Section from "./Right_Section";
import Container from "./Container";

function App() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main section */}
      <div className="flex flex-col flex-1">
        {/* Navbar */}
        <Navbar />

        {/* Main content area */}
        <div className="flex flex-1 overflow-hidden">
          {/* Main body */}
          <div className="flex-1 overflow-y-auto ">
            <Container />
          </div>

          {/* Right section */}
          <Right_Section />
        </div>
      </div>
    </div>
  );
}

export default App;
