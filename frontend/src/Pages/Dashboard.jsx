import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Right_Section from "../components/Right_Section";
import Container from "../components/Container";

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [rightSectionOpen, setRightSectionOpen] = useState(true);

  return (
    <div className="flex h-screen overflow-x-hidden">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main section */}
      <div className="flex flex-col flex-1 min-w-0">
        {/* Navbar */}
        <Navbar onMenuClick={() => setSidebarOpen(true)} />

        {/* Main content area */}
        <div className="flex flex-col xl:flex-row flex-1 overflow-hidden min-w-0">
          {/* Main body */}
          <div className="flex-1 overflow-y-auto min-w-0 ">
            <Container />

            {/* Right section - below container on mobile/tablet */}
            <div className="xl:hidden">
              <Right_Section
                isOpen={rightSectionOpen}
                onClose={() => setRightSectionOpen(false)}
              />
            </div>
          </div>

          {/* Right section - side by side on desktop */}
          <div className="hidden xl:block">
            <Right_Section
              isOpen={rightSectionOpen}
              onClose={() => setRightSectionOpen(false)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
