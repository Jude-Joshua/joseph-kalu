import React from "react";

import Links from "./Links.tsx";
import {ArrowUpRight} from "@phosphor-icons/react";

interface FooterProps {

}

const Footer: React.FC<FooterProps> = () => {

    return (
        <footer className={'footer flex flex-col justify-center items-center w-full'}>
            <div className="footer-contact w-full flex flex-col justify-center items-center">
                <span className={"footer-contact-background s1"}>mrjosephkalu@gmail.com</span>
                <div className="footer-contact-title">
                    <h4 className="h4">
                        Let’s create magic together
                    </h4>
                </div>
                <Links to={'mailto:mrjosephkalu@gmail.com'} classes="footer-contact-email" border={false}>
                    <span className="h1">
                          mrjosephkalu@gmail.com
                    </span>
                    <div className="link-icon flex justify-center items-center">
                        <ArrowUpRight size={32} weight={'light'}/>
                    </div>
                </Links>
            </div>
            <div className="footer-info w-full flex flex-row items-center justify-center">
                <div className="footer-info-holder flex flex-row items-center justify-center w-full">
                    <span className="p2 footer-info-holder-data copyright">
                        &copy; 2024 Joseph Kalu. All rights reserved.
                    </span>
                    <span className="p2 footer-info-holder-data">
                        Tallinn, Estonia
                    </span>
                    <Links to={'https://www.linkedin.com/in/josephkalu/'} classes="p2 footer-info-holder-data" border={false}>
                        Connect on LinkedIn
                    </Links>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
