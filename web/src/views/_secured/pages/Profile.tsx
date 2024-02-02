import React from 'react';
import EditUserForm from "@/components/forms/EditUserForm.tsx";

function Profile() {
    return (
        <div className={'min-h-screen'}>
            <div className={'bg-bg-calm-yellow pt-8 h-[7rem]'}>
                <h1 className={'text-[3rem] text-center font-bold'}>Edit Profile</h1>
            </div>
            <section className={'flex flex-col h-auto'}>
                <div className={'flex flex-row w-screen bg-bg-calm-yellow h-auto justify-center text-center'}>
                    <EditUserForm/>
                </div>
                <div className={'flex flex-col w-screen bg-gray-900'}>
                    <h1></h1>
                </div>
            </section>
        </div>
    );
}

export default Profile;