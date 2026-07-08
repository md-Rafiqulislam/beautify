"use client";

import { TChildren } from "@/types/child.type";
import { useEffect, useState } from "react";

const ClientWrapper = ({ children }: TChildren) => {
    const [mount, setMount] = useState<boolean>(false);

    useEffect(() => {
        setMount(true);
    }, []);

    if (!mount) {
        return null;
    }

    return <>{children}</>;
};

export default ClientWrapper;
