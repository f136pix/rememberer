import React from 'react';
import {useDestroySession, useLoginUser} from "@/api/auth/authQueries.ts";
import {getCurrentUser} from "@/api/auth/authApi.ts";

function Dashboard(props) {
    const {mutateAsync: logoutUser, isPending: isAuthenticatingUser} = useDestroySession()
    const handleLogout = async () => {
        await logoutUser();
    }

    return (
        <div>
            <button onClick={handleLogout}></button>
        </div>
    );
}

export default Dashboard;