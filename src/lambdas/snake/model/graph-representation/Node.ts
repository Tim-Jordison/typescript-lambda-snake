import {Coordinate} from "../battlesnake-official/Coordinate";

export interface GraphNode extends Coordinate {
    type: NodeType;
}

export type NodeType = "empty" | "food" | "snake_head" | "snake_body" | "snake_tail";