import { ReactNode } from "react"


// children type
export type TChildren = {
    children: ReactNode;
};


// children with className
export type TChildWithClassName = TChildren & {
    className: string;
}