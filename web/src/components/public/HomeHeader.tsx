import React from 'react';
import {Link} from "react-router-dom";
import {Github, Linkedin, Mail, NotebookPen} from "lucide-react";

import {
    NavigationMenu, NavigationMenuContent,
    NavigationMenuItem, NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger
} from "@/components/ui/navigation-menu.tsx";
import {Separator} from "@/components/ui/separator.tsx";

function HomeHeader(props) {
    return (
        <nav className={'mx-auto w-11/12 bg-transparent items-center h-14 flex justify-around pt-2'}>
            <div className={'w-1/3 mt-1'}><h1 className={'font-mono font-bold text-[2rem]'}>Organizer</h1></div>
            <div className={'w-1/3 flex justify-between'}>
                <NavigationMenu className={'mx-auto'}>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger className={'bg-gray-950 text-gray-300'}>About me</NavigationMenuTrigger>
                            <NavigationMenuContent className={'bg-gray-950'}>
                                <NavigationMenuLink className={'flex flex-col w-[40rem] h-[16rem] text-gray-300'}>
                                    <div className={'w-full p-5'}>
                                        <h1 className={'font-bold text-xl'}>Hi, my name is Filipe</h1>
                                        <h2>This project was developed from scratch for my portifolio, feel free to
                                            explore more in the links below!</h2>
                                    </div>
                                    <Separator className={'mb-6 mt-6 w-11/12 mx-auto bg-gray-300'}/>

                                    <ul className={'flex justify-around'}>
                                        <li><Link><Github size={58} className={'hover:text-bg-calm-yellow'}/></Link></li>
                                        <li><Link><Linkedin size={58} className={'hover:text-bg-calm-yellow'}/></Link></li>
                                        <li><Link><Mail size={58} className={'hover:text-bg-calm-yellow'}/></Link></li>
                                    </ul>

                                </NavigationMenuLink>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
            <div className={'w-1/3 flex items-center'}>
                <div className={'hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6'}>
                    <Link to={'/auth'} className={'hover:text-gray-200 transition'}>Login</Link>
                    <span className={"h-6 w-[2px] bg-gray-800"} aria-hidden={true}></span>
                    <Link to={'/auth'} className={'hover:text-gray-200 transition'}>Registre-se</Link>
                </div>
            </div>
        </nav>
    );
}

export default HomeHeader;