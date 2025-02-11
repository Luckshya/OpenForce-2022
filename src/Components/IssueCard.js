import React, { useEffect } from "react";
import "./styles/OrgFullPage.css";

export default function IssueCard(props) {
    useEffect(() => {
        console.log(props.data);
    }, []);

    if (props.level !== "All" && props.level !== props.data.level) return <></>;
    return (
        <div className="issueCont">
            <div className="issueLeft">
                <div className="issueNumber middle">{props.data.ind}</div>
                <div>
                    <div className="issueHeading">{props.data.title} <span class="levelTag">{props.data.level}</span></div>
                    <div className="issueTags">
                        {props.data.desc}
                    </div>
                </div>
            </div>
            <a href={props.data.repo} class="openIssue" target="_blank">
                Open
            </a>
        </div>
    );
}
