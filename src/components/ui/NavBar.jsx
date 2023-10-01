import MainLogo from "../../assets/LogoText.svg"

const NavBar = () => {
    return (
        <div className="grid grid-cols-5 ">
            <section class="col-span-1"></section>
            <div className="col-span-3 min-h-[8rem] w-full py-10">
                <img src={MainLogo} className="w-[210px]"></img>
            </div>
            <section class="col-span-1"></section>
        </div>
    )
};

export default NavBar;