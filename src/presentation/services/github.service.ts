import { GitHubIssuePayload, GitHubStarPayload } from "../../interfaces";

export class GitHubService {


    constructor() { }


    onStar(payload: GitHubStarPayload): string {

        const { sender, action, repository } = payload;

        return `User ${sender.login} ${action} star on ${repository.name}`;

    }

    onIssue(payload: GitHubIssuePayload): string {

        const { action, issue } = payload;

        return `An issue was ${action} with this title ${issue.title}`;

    }


}