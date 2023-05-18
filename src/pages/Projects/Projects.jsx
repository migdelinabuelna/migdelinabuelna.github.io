import React from "react";
import { Grid, Card, Image } from 'semantic-ui-react';

export default function Projects() {
    return (

<Grid columns='two'>
    <Grid.Row>
        <Grid.Column>
            <Card >
                <Image src='https://i.imgur.com/y1dVEhe.png' wrapped ui={false} />
                <Card.Content>
                    <Card.Header>
                        <a href="https://mig-n-plants.onrender.com/"> LEAFY </a>
                    </Card.Header>
                </Card.Content>
                <Card.Content>
                    <Card.Description>
                        Project Description
                    </Card.Description>
                 </Card.Content>
            </Card>
        </Grid.Column>

        <Grid.Column>
            <Card>
                <Image src='https://i.imgur.com/bYyoZFt.png' wrapped ui={false} />
                <Card.Content>
                    <Card.Header>
                        <a href="https://harvest-homestead.fly.dev/"> HARVESTHOMESTEAD </a>
                    </Card.Header>
                </Card.Content>
                <Card.Content>
                    <Card.Description>
                        Project Description
                    </Card.Description>
                 </Card.Content>
            </Card>
        </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column>

            <Card>
                <Image src='https://i.imgur.com/DHnaUN0.png' wrapped ui={false} />
                <Card.Content>
                    <Card.Header>
                        <a href="https://dull-rose-rooster-kilt.cyclic.app/">PSYCHIATRY</a>
                    </Card.Header>
                </Card.Content>
                <Card.Content>
                    <Card.Description>
                        Project Description
                    </Card.Description>
                 </Card.Content>
            </Card>
        </Grid.Column>

        <Grid.Column>
            <Card>
                <Image src='https://i.imgur.com/8CRtkcY.png' wrapped ui={false} />
                <Card.Content>
                    <Card.Header>
                        <a href="https://migdelinabuelna.github.io/GAMBLER/">GAMBLER</a>
                    </Card.Header>
                </Card.Content>
                <Card.Content>
                    <Card.Description>
                        <div>
                        Project Description</div>
                    </Card.Description>
                 </Card.Content>
            </Card>
        </Grid.Column>
    </Grid.Row>
</Grid>

    );
}


