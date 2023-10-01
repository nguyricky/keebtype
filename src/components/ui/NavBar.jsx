import MainLogo from "../../assets/LogoText.svg"

const NavBar = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-5">
        <section className="md:col-span-1"></section>
        <div className="col-span-1 md:col-span-2 min-h-[8rem] w-full py-5 md:py-10">
          <img src={MainLogo} alt="Logo" className="w-[210px] mx-auto md:mx-0" />
        </div>
        <section className="md:col-span-1"></section>
      </div>
    );
  };
  
  export default NavBar;
  