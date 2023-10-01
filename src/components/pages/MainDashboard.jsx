import { Outlet } from "react-router-dom";

import { NavBar } from "../index"

const MainDashboard = () => {
    return <>

        <NavBar />

        <div className="bg-base-100 min-h-full ">
            <section className="relative pt-5">
                <div className="w-full max-w-screen-2xl mx-auto">
                    <Outlet />
                </div>
            </section>
        </div>

    </>
}

export default MainDashboard