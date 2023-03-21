import { notice, setFailed } from "@actions/core";
const github = require("@actions/github")

//  below is an anonymous function
(
    async () => {
        try {
            notice("checking for readme...");
        } catch (error) {
            setFailed(error.message);
        }
    }
)();