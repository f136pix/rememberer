import React from "react";
import {Link} from "react-router-dom";
import {Github, Linkedin, Mail} from "lucide-react";

import {
    NavigationMenu, NavigationMenuContent,
    NavigationMenuItem, NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger
} from "@/components/ui/navigation-menu.tsx";
import {Separator} from "@/components/ui/separator.tsx";

function AuthHeader(props) {
    return (
<nav className={'mx-auto bg-gray-950 w-11/12 items-center h-14 flex justify-around pt-2 shadow-2xl'}>
    <div className={'w-1/3 mt-1'}><Link to={'/home'}><h1 className={'font-mono font-bold text-[2rem] text-white'}>Organizer</h1></Link></div>
    <div className={'w-1/3 flex justify-between'}>

    </div>
    <div className={'w-1/3 flex items-center'}>

    </div>
</nav>
    );
}

export default AuthHeader;