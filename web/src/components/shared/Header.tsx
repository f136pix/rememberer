import {useEffect, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {CommandSeparator} from "cmdk";
import {ArrowLeftFromLine, Bolt} from "lucide-react";

import {Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList} from "@/components/ui/command.tsx";
import {toast} from "@/components/ui/use-toast.ts";
import {FEATURES_LIST} from "@/lib/config/index.tsx";
import {cn, trimFirstName} from "@/lib/utils.tsx";
import {useDestroySession} from "@/services/api/auth/authQueries.ts";


function Header({className, user}) {
    const navigate = useNavigate();
    const [searchValue, setSearchValue] = useState('');
    const [userName, setUserName] = useState(" ");
    const {mutateAsync: logoutUser, isPending: isAuthenticatingUser} = useDestroySession();
    useEffect(() => {
        setUserName(user.name);
    }, [user]);
    const destroySeason = async () => {
        const res = await logoutUser();
        if (res == true) {
            return window.location.href = '/auth';
        }
        toast({
            title: 'Houve um erro'
        });
    };


    return (
        <div className={cn(className, 'flex flex-row w-screen pt-4 fixed top-0 bg-border bg-gray-900 min-h-[4rem] z-40')}>
            <div className={'w-4/12 mb-[1rem] text-center'}>
                <Link to={'/home'}><h1
                    className={'font-mono font-bold text-[2rem] text-white'}>Organizer</h1></Link>
            </div>
            <Command className={'bg-bg-calm-yellow w-4/12 h-auto mb-[1rem]'}>
                <CommandInput placeholder="Type a command or search..." onValueChange={(e) => setSearchValue(e)}/>
                {searchValue.length > 0 ?
                    <CommandList>
                        <CommandEmpty>No results found.</CommandEmpty>
                        <CommandGroup heading="Suggestions">
                            {FEATURES_LIST.map((feature) => {
                                if(feature.href.slice(-1) == '/' && feature.href.length>1) {
                                    feature.href += `${user.id}`;
                                }
                                return <Link to={feature.href}><CommandItem className={'cursor-pointer'}>{feature.title}</CommandItem></Link>;
                            })}
                        </CommandGroup>
                        <CommandSeparator/>
                    </CommandList>
                    :
                    <div>

                    </div>
                }
            </Command>
            <div className={'w-3/12 flex flex-row justify-center content-center mx-auto max-h-[4rem] mb-[1rem]'}>
                <div className={'flex w-[50%] my-auto'}>
                    <h1 className={'text-neutral-400 italic mr-1 hover:underline'}>Welcome, </h1>
                    <h1 className={'text-neutral-200 font-bold'}>{trimFirstName(userName)}</h1>
                </div>
                <div className={'flex w-[50%] my-auto justify-around'}>
                    <Link to={`profile/${user.id}`}><Bolt
                        className={'text-neutral-300 hover:underline hover:text-neutral-400 transition cursor-pointer'}/></Link>
                    <ArrowLeftFromLine
                        className={'text-neutral-300 hover:underline hover:text-neutral-400 transition cursor-pointer'}
                        onClick={destroySeason}/>
                </div>

            </div>
        </div>
    );
}

export default Header;