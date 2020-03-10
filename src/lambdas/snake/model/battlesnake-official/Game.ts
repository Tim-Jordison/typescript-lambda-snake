import {Snake} from "./Snake";
import {Board} from "./Board";

export interface Game {
    game: {
        id: string;
    };
    turn: number;
    board: Board;
    you: Snake;
}