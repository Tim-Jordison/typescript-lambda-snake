import * as cassava from "cassava";

export const router = new cassava.Router();

router.route("/start")
    .method("POST")
    .handler(evt => {
        console.log("start\n" + JSON.stringify(evt));
        return {
            statusCode: cassava.httpStatusCode.success.OK,
            body: {
                "color": "#ffa203",
                "headType": "bendr",
                "tailType": "pixel"
            }
        }
    });

router.route("/move")
    .method("POST")
    .handler(evt => {
        return {
            statusCode: cassava.httpStatusCode.success.OK,
            body: {
                "move": "right",
                "shout": "I am moving left!"
            }
        }
    });

router.route("/end")
    .method("POST")
    .handler(evt => {
        return {
            statusCode: cassava.httpStatusCode.success.NO_CONTENT,
            body: null
        }
    });

router.route("/ping")
    .method("POST")
    .handler(evt => {
        return {
            statusCode: cassava.httpStatusCode.success.OK,
            body: null
        }
    });

/**
 * Export the handler so it can be called.
 */
export const handler = router.getLambdaHandler();
