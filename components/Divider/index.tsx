import * as React from 'react';
import { Container, Divider, Text } from './styles';

export default function CustomDivider() {
    return (
        <Container>
            <Divider />
            <Text>or</Text>
            <Divider />
        </Container>
    );
}