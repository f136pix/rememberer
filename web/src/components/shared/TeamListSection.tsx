import {cn} from "@/lib/utils.tsx";

type IProps = {
    className?: string;
}
function TeamListSection({className}: IProps) {
    return (
        <div className={cn('mt-16',className)}>
            <h1 className={"text-center text-bold"}>TeamListSection</h1>
        </div>
    );
}

export default TeamListSection;