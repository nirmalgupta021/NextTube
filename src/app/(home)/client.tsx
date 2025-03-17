"use client"

import { trpc } from "@/trpc/client"

export const PageClient = () => {
    const [data] = trpc.hello.useSuspenseQuery({
        text: "Nirmal",
    });

    return (
        <div>
            Page Client sats: {data.greeting}
        </div>
    )
}