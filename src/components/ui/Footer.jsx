import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faCode } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return (
        <div className="grid grid-cols-5">
            <section class="col-span-1"></section>
            <div className="col-span-3 min-h-[8rem] w-full py-10">
                <div className="flex flex-row justify-between">
                    <div className="flex flex-row">
                        <div className="mr-3 text-sm">
                            <a href="https://ko-fi.com/rickynguyen">
                                <p className="text-secondary hover:text-accent">
                                    <FontAwesomeIcon icon={faHeart} className="icon" /> Support
                                </p>
                            </a>
                        </div>
                        <div className="mr-3 text-sm">
                            <a href="https://github.com/nguyricky/keebtype">
                                <p className="text-secondary hover:text-accent">
                                    <FontAwesomeIcon icon={faCode} className="icon" /> GitHub
                                </p>
                            </a>
                        </div>
                    </div>
                    <div>
                        <p className="text-secondary text-sm">Copyright © 2023 - All right reserved by Ricky Nguyen</p>
                    </div>
                </div>
            </div>
            <section class="col-span-1"></section>
        </div>
    )
};

export default Footer;