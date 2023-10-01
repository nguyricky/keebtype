import { NavBar } from "../index"
import { Footer } from "../index"

const MainDashboard = () => {
    return (
      <div className="flex flex-col min-h-screen">
        <NavBar />
  
        <div className="flex-grow bg-base-100">
          <section className="relative pt-5">
            <div className="w-full max-w-screen-2xl mx-auto">
              
            </div>
          </section>
        </div>
  
        <Footer />
      </div>
    );
  };
  

export default MainDashboard