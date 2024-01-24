import React from 'react';
import {useUserContext} from "@/context/AuthContext.tsx";
import {Input} from "@/components/ui/input.tsx";

function Profile({props}) {
    const {user} = useUserContext()
    return (
        <div className={'min-h-screen'}>
            <div className={'bg-bg-calm-yellow pt-8 h-[10rem]'}>
                <h1 className={'text-[3rem] text-center font-bold'}>Edit Profile</h1>
            </div>
            <section className={'flex flex-col h-[20rem]'}>
                <div className={'flex flex-row w-screen bg-bg-calm-yellow h-[15rem]'}>
                    // fazer form para editar dados
                </div>
                <div className={'flex flex-col w-screen bg-bg-calm-yellow'}>
                    // mostra estatisticas sobre o user

                </div>
            </section>
        </div>
    );
}

export default Profile;