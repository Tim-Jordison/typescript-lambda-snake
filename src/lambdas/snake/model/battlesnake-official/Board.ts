import {Coordinate} from "./Coordinate";
import {Snake} from "./Snake";

export interface Board {
    height: number;
    width: number;
    food: Coordinate[]
    snakes: Snake[]
}