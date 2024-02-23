import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {X} from "lucide-react";
import {ITask, ITeam} from "src/types";

import {TeamCard} from "@/components/shared/TeamCard.tsx";
import {Card} from "@/components/ui/card.tsx";
import {useUserContext} from "@/context/AuthContext.tsx";
import {useGetCurrUserTeams} from "@/services/api/graphQl/graphQlQueries.ts";

function TeamSection({user}) {
    const {mutateAsync: getCurrTeams, isPending: isGettingTeams} = useGetCurrUserTeams();
    const [data, setData] = useState([]);
    const setTeamsData = async () => {
        const res: boolean | [ITeam] = await getCurrTeams({id: user.id, bool: true});
        if (res !== false) {
            setData(res);
        }
    };
    useEffect(() => {
        setTeamsData();
    }, [user]);
    return (
        <div className={'bg-gray-800 h-auto pb-[2rem]'}>
            <div className={'flex justify-between content-center items-center'}>
                <h1 className={'text-neutral-200 pt-6 text-[3rem] font-bold ml-[2%] align-middle'}>Your teams</h1>
                <Link to={'/teams'} className={'text-neutral-200 pt-6 text-[1rem] italic mr-[4%] underline hover:text-black transition'}>See more</Link>
            </div>
            <div className={'flex justify-around h-auto'}>
                {data.length > 0 ?
                    data.map((team: ITeam) => {
                        const slicedTasks: ITask[] = team.tasks.slice(0, 3);
                        return (
                            <TeamCard key={team.id} className={'mt-10'} name={team.name} users={team.users.length}
                                      tasks={slicedTasks}/>
                        );
                    }) :
                    <div>
                        <X size={200} className={'text-neutral-200'}></X>
                        <h3 className={'text-neutral-200 text-xl italic'}>You aren´t in any team</h3>
                    </div>
                }
            </div>
        </div>
    );
}

export default TeamSection;