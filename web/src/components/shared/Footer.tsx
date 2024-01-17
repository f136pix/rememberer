import React from 'react';
import {Link} from "react-router-dom";
import {Github, Linkedin, Mail} from "lucide-react";

function Footer({hoverColor}) {
    return (
        <div className={'bg-gray-950 h-[10rem] flex flex-col content-center justify-around text-center'}>
            <h1 className={`font-mono font-bold text-[2rem] text-white hover:${hoverColor}`}>Organizer</h1>
            <ul className={'flex justify-around text-white w-[20rem] mx-auto'}>
                <li className={'border-solid border-white border-2 rounded-full p-2'}><Link to={'/home'}><Github size={25} className={`hover:${hoverColor}`}/></Link></li>
                <li className={'border-solid border-white border-2 rounded-full p-2'}><Link to={'/home'}><Linkedin size={25} className={`hover:${hoverColor}`}/></Link></li>
                <li className={'border-solid border-white border-2 rounded-full p-2'}><Link to={'/home'}><Mail size={25} className={`hover:${hoverColor}`}/></Link></li>
            </ul>
            <div className={'text-[12px]'}>
                <a className={'text-white'}>&copy; 2024 todos os direitos reservados </a> <a className={'text-text-calm-yellow'} href={'https://github.com/f136pix'} target={'_blank'}>Filipe Furlan</a>
            </div>
        </div>
    );
}

export default Footer;