import {cn} from "@/lib/utils.tsx"
import {Button} from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {useState} from "react";
import {CARD_COLORS} from "@/config/preseted-data/Index.tsx";
import {ChevronLast} from "lucide-react";

export function TeamCard({className, name, tasks, users, ...props}: CardProps) {

    return (
        <Card className={cn("w-[380px]", className)} {...props}>
            <CardHeader>
                <CardTitle>{name}</CardTitle>
                <CardDescription>You and {users} other members.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4 mb-[6rem]">
                <div className={'h-[10rem]'}>
                    {tasks.map((task, index) => (
                        <div
                            key={index}
                            className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                        >
                            <span
                                className={cn("flex h-2 w-2 translate-y-1 rounded-full", `bg-${CARD_COLORS[index].color}`)}/>
                            <div className="space-y-1">
                                <p className="text-sm font-medium leading-none">
                                    {task.title}
                                </p>
                                <p className="text-sm text-muted-foreground h-[2rem]">
                                    {task.description.substring(0, 65) + '...'}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
            <CardFooter>
                <Button className="w-full">
                    <ChevronLast></ChevronLast>
                </Button>
            </CardFooter>
        </Card>
    )
}
