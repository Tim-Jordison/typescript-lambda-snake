import {Board} from "../battlesnake-official/Board";
import {GraphNode, NodeType} from "./Node";
import {Coordinate} from "../battlesnake-official/Coordinate";

export class GameGraph {
    board: GraphNode[][];

    constructor(board: Board) {
        this.board = [];
        for (let x = 0; x < board.width; x++) {
            this.board[x] = [];
            for (let y = 0; y < board.height; y++) {
                this.board[x][y] = {
                    x: x,
                    y: y,
                    type: "empty"
                }
            }
        }

        for (let food of board.food) {
            this.board[food.x][food.y].type = "food";
        }

        for (let snake of board.snakes) {
            for (let i = 0; i < snake.body.length; i++) {
                let bodyPartType: NodeType = "snake_body";
                if (i === 0) {
                    bodyPartType = "snake_head"
                } else if (i === snake.body.length - 1 && snake.health < 100 /* if health is 100 then tail won't disappear */) {
                    bodyPartType = "snake_tail"
                }
                const bodyPartCoord: Coordinate = snake.body[i];
                this.board[bodyPartCoord.x][bodyPartCoord.y].type = bodyPartType;
            }
        }
    }
}