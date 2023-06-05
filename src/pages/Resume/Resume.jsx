import React from "react";
import { Icon, Divider } from "semantic-ui-react";

export default function Resume() {
    return (
        <>
        <div>
        <a href="https://docs.google.com/document/d/1VOkuiwfgCKMy-CdN_JQnA6oMaXM37PmDxn9Znd75yYA/edit?usp=sharing"> <Icon name="google"/>RESUME</a>
        </div>
        <Divider />
        <object 
            data= "https://docs.google.com/document/d/e/2PACX-1vSe06kLU1qOGg_U2nlOk_36URzrSjqilGk11sp943G2f8x6PzjYdYN6q8MiDNa-_LksjkzECpTtjrJO/pub?embedded=true" 
            width="900"
            height="1000"
            >
        </object>
        </>
    )
}