import React from 'react';
import { Container } from 'semantic-ui-react';

export default (props) => {
    return (

        <Container>
            <head>
            <link async rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.2.12/dist/semantic.min.css" />
            </head>
            {props.children}
        </Container>
    );
};