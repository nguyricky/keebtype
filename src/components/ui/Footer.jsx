import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faCode } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-5">
        <section className="md:col-span-1"></section>
        <div className="col-span-1 md:col-span-3 min-h-[8rem] w-full py-5 md:py-10">
          <div className="flex flex-col md:flex-row justify-between items-center pt-5 md:pt-8">
            <div className="flex flex-row">
                <div className="mb-3 mr-3 md:mb-0 md:mr-3 text-center md:text-left">
                    <a href="https://ko-fi.com/rickynguyen">
                        <p className="text-secondary hover:text-accent text-sm md:text-md">
                        <FontAwesomeIcon icon={faHeart} className="icon" /> Support
                        </p>
                    </a>
                </div>
                <div className="mb-3 mr-3 md:mb-0 md:mr-3 text-center md:text-left">
                    <a href="https://github.com/nguyricky/keebtype">
                        <p className="text-secondary hover:text-accent text-sm md:text-md">
                        <FontAwesomeIcon icon={faCode} className="icon" /> GitHub
                        </p>
                    </a>
                </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-secondary text-sm md:text-md">
                GNU 2023 © Ricky Nguyen
              </p>
            </div>
          </div>
        </div>
        <section className="md:col-span-1"></section>
      </div>
    );
};

export default Footer;