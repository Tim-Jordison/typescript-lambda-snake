import {Coordinate} from "./Coordinate";

export interface Snake {
    id: string;
    name: string;
    health: number;
    body: Coordinate[];
    shout: string;
}