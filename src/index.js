import * as core from "@actions/core"
import * as github from  "@actions/github"
//  below is an anonymous function
(
    async () => {
        try {
            core.notice("checking for readme blah blah blah...");
        } catch (error) {
            core.setFailed(error.message);
        }
    }
)();