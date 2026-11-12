import { useEffect } from "react";
import { useState } from "react";

interface Data {
    "category": string;
    "score": number;
    "icon": string;
    "color": string;
    "background": string;
}

function validData(data: unknown): data is Data {
    return (
        data != null && typeof data === "object" &&
        "category" in data && typeof data.category === "string" &&
        "score" in data && typeof data.score === "number" &&
        "icon" in data && typeof data.icon === "string" &&
        "color" in data && typeof data.color === "string" &&
        "background" in data && typeof data.background === "string"
    )
}

function validDataArray(data: unknown): data is Data[] {
    return (
        Array.isArray(data) && data.every(validData)
    )
}

export function FetchData(): Data[] {
    const [data, setData] = useState<Data[]>([])

    useEffect(
        () => {
            (async () => {
                try {
                    const response = await fetch("./../data.json"); 
                    if(!response.ok) throw new Error(`HTTPS Error ${response.status}`);

                    const recievedData: unknown = await response.json()
                    if(!validDataArray(recievedData)) throw new Error("data is invalid")

                    setData(recievedData)
                } catch(error: unknown) {
                    console.error(error)
                }
            })(); //IIFE
        },[]
    )

    return data;
}