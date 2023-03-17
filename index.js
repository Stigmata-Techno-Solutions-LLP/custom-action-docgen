import { core } from "@actions/core"
import { github } from "@actions/github"

//  below is an anonymous function
(
    async () => {
        try {
            core.notice("checking for readme...");
        } catch (error) {
            core.setFailed(error.message);
        }
    }
)();