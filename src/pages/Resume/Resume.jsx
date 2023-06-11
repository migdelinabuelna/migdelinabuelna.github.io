import React from "react";
import { Icon, Divider, Container, Image } from "semantic-ui-react";

export default function Resume() {
    return (
        <>
        <Container className="resume-container">
            <div>
                <a href="https://docs.google.com/document/d/1VOkuiwfgCKMy-CdN_JQnA6oMaXM37PmDxn9Znd75yYA/edit?usp=sharing"> <Icon name="google" color="yellow"/>RESUME</a>
            </div>
            <Divider />
            <Image src="https://i.imgur.com/W0z7ZS3.png"></Image>
        </Container>
        </>
    )
}