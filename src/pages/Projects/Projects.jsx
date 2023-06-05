import React from "react";
import { Grid, Card, Image } from 'semantic-ui-react';

export default function Projects() {
    return (
        <Grid columns='two' centered>
            <Grid.Row style={{ maxWidth: 800 }}  >
                <Grid.Column >
                    <a href="https://mig-n-plants.onrender.com/" >
                        <Card fluid link extends >
                        <Image src='https://i.imgur.com/y1dVEhe.png' wrapped ui={false} className="card-image"/>
                            <Card.Content textAlign="center">
                                <Card.Header>
                                    LEAFY 
                                </Card.Header>
                            </Card.Content>
                            <Card.Content>
                                <Card.Description>
                                    <p>Leafy is a social media application designed exclusively for plant enthusiasts, providing them with a captivating platform to showcase their remarkable plant collections on their profile page. In the bio section, users have the opportunity to share a glimpse of their growing journey and highlight their favorite plants. With each post, Leafy empowers users to share a plant of their choice, accompanied by valuable details about its care, ensuring that fellow enthusiasts can learn and grow alongside them. To enhance the culture of plants, cuttings, and seed exchange within the gardening community, users can also indicate whether they are open to trading the featured plant, by marking it with a distinctive ribbon. This innovative feature allows users to diversify their collections. Furthermore, Leafy's comment section, which accompanies each post, serves as a virtual hub where users can engage in negotiations, share knowledge, seek advice, and compliment one another.</p>
                                </Card.Description>
                            </Card.Content>
                        </Card>
                    </a>
                </Grid.Column>

                <Grid.Column>
                    <a href="https://harvest-homestead.fly.dev/">
                        <Card fluid link textAlign="center">
                        <Image src='https://i.imgur.com/bYyoZFt.png' wrapped ui={false} />
                            <Card.Content textAlign="center">
                                <Card.Header>
                                    HARVESTHOMESTEAD 
                                </Card.Header>
                            </Card.Content>
                            <Card.Content>
                                <Card.Description>
                                    <p>Our farming resource app provides admin users with the ability to add animals, crops, and equipment with photos and relevant information. We have designed the app to allow admin users to perform these functions from the application site rather than just the admin section, ensuring that admin users can enjoy the full range of application features.
                                        While the general public can access our page and information, they can only participate in the community by creating a personal account. By signing up, users can create their own profiles and add their farm names as well as any animals they currently own or intend to acquire.
                                        The app also features a comment section for each element in our resources. Users can create new suggestion comments under their username and delete any comments that belong to them.
                                    </p>
                                </Card.Description>
                            </Card.Content>
                        </Card>
                    </a>
                </Grid.Column>
            </Grid.Row>

            <Grid.Row style={{ maxWidth: 800 }}>
                <Grid.Column>
                    <a href="https://dull-rose-rooster-kilt.cyclic.app/">
                        <Card fluid link>
                        <Image src='https://i.imgur.com/DHnaUN0.png' wrapped ui={false} />
                            <Card.Content textAlign="center">
                                <Card.Header>
                                    PSYCHIATRY
                                </Card.Header>
                            </Card.Content>
                            <Card.Content>
                                <Card.Description>
                                    <p>Scheduling system for a medical facility that allows patients to book appointments for mental health services. Patients are allowed to book as many appointments as they need in advance. Scheduled appointments by a single patient can only be viewed, scheduled, updated, and canceled by the patient themselves, for privacy purposes.</p>
                                </Card.Description>
                            </Card.Content>
                        </Card>
                    </a>
                </Grid.Column>

                <Grid.Column>
                    <a href="https://migdelinabuelna.github.io/GAMBLER/">
                        <Card fluid link>
                        <Image src='https://i.imgur.com/8CRtkcY.png' wrapped ui={false} />
                            <Card.Content textAlign="center">
                                <Card.Header>
                                    GAMBLER
                                </Card.Header>
                            </Card.Content>
                            <Card.Content>
                                <Card.Description>
                                    <p>Gambler is a slot machine game that you initiate by clicking the "BET" button. Once the button is clicked the screen will randomly display three images. If three of the same images appear on the screen, you win the game! Otherwise, you loose, but you get to try again for as many rounds as you'd like.</p>
                                </Card.Description>
                            </Card.Content>
                        </Card>
                    </a>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
}


