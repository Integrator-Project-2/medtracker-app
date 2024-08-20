import styled from 'styled-components/native'

export const Label = styled.Text<{ color?: string, fontSize?: number }>`
    font-size: ${({ fontSize }) => fontSize || 16}px;
    color: ${({ color }) => color || '#212C5B'};
    margin-bottom: 2px;
    font-family: 'Poppins-Medium'; 
`;