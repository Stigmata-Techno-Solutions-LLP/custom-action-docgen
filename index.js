const core = require("@actions/core")
const github = require("@actions/github")

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