import React from 'react';
import {useDestroySession, useLoginUser} from "@/api/auth/authQueries.ts";
import {getCurrentUser} from "@/api/auth/authApi.ts";

function Dashboard(props) {
    const {mutateAsync: logoutUser, isPending: isAuthenticatingUser} = useDestroySession()
    getCurrentUser()
    const handleLogout = async () => {
        await
        //await logoutUser();
        await getCurrentUser()
    }

    return (
        <div>
            <button onClick={handleLogout}>TESTEE</button>
        </div>
    );
}

export default Dashboard;