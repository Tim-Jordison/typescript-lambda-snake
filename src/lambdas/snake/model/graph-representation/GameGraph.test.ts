import {Board} from "../battlesnake-official/Board";
import {GameGraph} from "./GameGraph";

describe("/GameGraph", () => {
    it("can parse Board", async () => {
        const board: Board = {
            "height": 5,
            "width": 5,
            "food": [
                {
                    "x": 2,
                    "y": 2
                }
            ],
            "snakes": [
                {
                    "id": "snake-id-string",
                    "name": "Sneky Snek",
                    "health": 90,
                    "body": [
                        {
                            "x": 1,
                            "y": 3
                        },
                        {
                            "x": 2,
                            "y": 3
                        }
                        , {
                            "x": 3,
                            "y": 3
                        }
                    ],
                    "shout": "Hello my name is Sneky Snek"
                }
            ]
        };
        const gameGraph = new GameGraph(board);
        console.log(JSON.stringify(gameGraph, null, 4));
    });
});
