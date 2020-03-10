import * as cassava from "cassava";
import {Game} from "./model/battlesnake-official/Game";
import {getAllowedMoves} from "./behaviors/basicSnake";

export const router = new cassava.Router();

router.route("/start")
    .method("POST")
    .handler(evt => {
        console.log("start\n" + JSON.stringify(evt));
        const game: Game = evt.body;
        console.log("BOARD: " + JSON.stringify(game.board, null, 4));
        console.log("YOU: " + JSON.stringify(game.you, null, 4));
        return {
            statusCode: cassava.httpStatusCode.success.OK,
            body: {
                "color": "#ffa203",
                "headType": "bendr",
                "tailType": "pixel"
            }
        };
    });

router.route("/move")
    .method("POST")
    .handler(evt => {
        const game: Game = evt.body;
        console.log("Game: " + JSON.stringify(game, null, 4));
        const moves = getAllowedMoves(game);

        return {
            statusCode: cassava.httpStatusCode.success.OK,
            body: {
                "move": moves[Math.floor(Math.random() * moves.length)],
                "shout": "I am moving left!"
            }
        };
    });

router.route("/end")
    .method("POST")
    .handler(evt => {
        return {
            statusCode: cassava.httpStatusCode.success.NO_CONTENT,
            body: null
        };
    });

router.route("/ping")
    .method("POST")
    .handler(evt => {
        return {
            statusCode: cassava.httpStatusCode.success.OK,
            body: null
        };
    });

/**
 * Export the handler so it can be called.
 */
export const handler = router.getLambdaHandler();
