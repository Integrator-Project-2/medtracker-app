import styled from 'styled-components/native'

export const Label = styled.Text<{ color?: string }>`
    font-size: 16px;
    color: ${({ color }) => color || '#212C5B'};
    margin-bottom: 2px;
    font-family: 'Poppins-Medium'; 
`;