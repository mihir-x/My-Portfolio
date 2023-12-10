import { Footer } from "flowbite-react";
import { BsFacebook, BsGithub, BsTwitter } from 'react-icons/bs';


const SiteFooter = () => {
    return (
        <div>
            <Footer bgDark>
                <div className="w-full">
                    <div className="w-full bg-gray-700 px-4 py-6 sm:flex sm:items-center sm:justify-between">
                        <Footer.Copyright href="#" by="Mihir Hasan™" year={2023} />
                        <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                            <Footer.Icon href="https://facebook.com/T.X.mihir" icon={BsFacebook} />
                            <Footer.Icon href="#" icon={BsTwitter} />
                            <Footer.Icon href="https://github.com/mihir-x" icon={BsGithub} />
                        </div>
                    </div>
                </div>
            </Footer>
        </div>
    );
};

export default SiteFooter;