import {useEffect} from "react";
import {Link,} from "react-router-dom";

import TeamListSection from "@/components/shared/TeamListSection.tsx";
import {Button} from "@/components/ui/button.tsx";
import FillScreenWrapper from "@/components/utils/FiilScreenWrapper.tsx";

const TeamsDashboard = () => {
    //const {id} = useParams();

    useEffect(() => {
    }, []);
    return (
        <FillScreenWrapper>
            <nav className={'flex flex-row align-middle justify-around items-center h-16 w-11/12 mx-auto mt-18'}>
                <div className={'w-4/12'}><h1></h1></div>
                <div className={'w-4/12'}><h1 className={'font-bold text-4xl text-center mt-6 text-neutral-200 hover:text-neutral-400'}>Teams Section</h1></div>
                <div className={'w-4/12 text-end'}><Link to={`add_teams`}><Button className={'bg-green-800 hover:bg-green-300 hover:text-black mt-6'}>Create
                    a Team</Button></Link></div>
            </nav>
            <TeamListSection/>
        </FillScreenWrapper>
    );
};

export default TeamsDashboard;