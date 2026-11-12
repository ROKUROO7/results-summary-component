interface ComponentType {
    icon: string;
    category: string;
    score: number;
    color: string;
    bg: string;
}

export function Component({icon, category, score, color, bg}: ComponentType) {

    return (
        <article className="flex justify-between ps-4 pe-4 pbs-2 pbe-2 rounded-2xl" style={{backgroundColor: bg}}>
            <header className="flex gap-2">
                <img src={icon} alt="" />
                <h3 className="text-[1rem] font-medium" style={{color: color}}>{category}</h3>
            </header>
            <p className="flex gap-1.5">
                <span className="text-[1rem] font-bold text-[hsl(224,30%,27%)]">{score}</span>
                <span className="text-[1rem] font-bold text-[hsl(241,100%,89%)]">/</span>
                <span className="text-[1rem] font-bold text-[hsl(241,100%,89%)]">100</span>
            </p>
        </article>
    )
}
