import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBill1Wave, faCode, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faDiscord, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
      const modal = document.getElementById('contact-modal');
      if (modal) {
        modal.showModal();
        setIsModalOpen(true);
      }
    };

    const closeModal = () => {
      const modal = document.getElementById('contact-modal');
      if (modal) {
        modal.close();
        setIsModalOpen(false);
      }
    };

    return (
      <div className="grid grid-cols-1 md:grid-cols-6">
        <section className="md:col-span-1"></section>
        <div className="col-span-1 md:col-span-4 min-h-[8rem] w-full py-5 md:py-10">
          <div className="flex flex-col md:flex-row justify-between items-center pt-5 md:pt-8">
            <div className="flex flex-row">
                <div className="mb-3 mr-3 md:mb-0 md:mr-4 text-center md:text-left">
                    <p className="text-secondary hover:text-accent text-sm md:text-[12px] tracking-wide transition ease-in-out delay-50 hover:-translate-y-0.5 hover:scale-105 duration-200 cursor-pointer" onClick={isModalOpen ? closeModal : openModal}>
                      <FontAwesomeIcon icon={faEnvelope} className="icon" /> Contact
                    </p>
                    <dialog id="contact-modal" className="modal">
                      <div className="modal-box">
                        <form method="dialog">
                          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={closeModal}>✕</button>
                          <h3 className="font-medium text-secondary text-sm md:text-xl">Contact</h3>
                          <p className="py-4">Press ESC key or click on ✕ button to close</p>
                        </form>
                      </div>
                    </dialog>
                </div>
                <div className="mb-3 mr-3 md:mb-0 md:mr-4 text-center md:text-left">
                  <a href="https://ko-fi.com/rickynguyen">
                      <p className="text-secondary hover:text-accent text-sm md:text-[12px] tracking-wide transition ease-in-out delay-50 hover:-translate-y-0.5 hover:scale-105 duration-200">
                        <FontAwesomeIcon icon={faMoneyBill1Wave} className="icon" /> Support
                      </p>
                  </a>
                </div>
                <div className="mb-3 mr-3 md:mb-0 md:mr-4 text-center md:text-left">
                  <a href="https://github.com/nguyricky/keebtype">
                      <p className="text-secondary hover:text-accent text-sm md:text-[12px] tracking-wide transition ease-in-out delay-50 hover:-translate-y-0.5 hover:scale-105 duration-200">
                        <FontAwesomeIcon icon={faCode} className="icon" /> GitHub
                      </p>
                  </a>
                </div>
                <div className="mb-3 mr-3 md:mb-0 md:mr-4 text-center md:text-left">
                    <p className="text-secondary hover:text-accent text-sm md:text-[12px] tracking-wide transition ease-in-out delay-50 hover:-translate-y-0.5 hover:scale-105 duration-200 cursor-pointer">
                      <FontAwesomeIcon icon={faDiscord} className="icon" /> Discord
                    </p>
                </div>
                <div className="mb-3 mr-3 md:mb-0 md:mr-4 text-center md:text-left">
                    <p className="text-secondary hover:text-accent text-sm md:text-[12px] tracking-wide transition ease-in-out delay-50 hover:-translate-y-0.5 hover:scale-105 duration-200 cursor-pointer">
                      <FontAwesomeIcon icon={faTwitter} className="icon" /> Twitter
                    </p>
                </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-secondary text-sm md:text-[12px] tracking-wide">
                GNU 2023 © keebtype
              </p>
            </div>
          </div>
        </div>
        <section className="md:col-span-1"></section>
      </div>
    );
};

export default Footer;