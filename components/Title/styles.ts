import { theme } from '@/global/styles/theme';
import styled from 'styled-components/native'

interface TitleProps {
    color?: string
    size?: number
}
export const StyledTitle = styled.Text<TitleProps>`
    font-size: ${({ size }) => size || 20}px;
    color: ${({ color }) => color || theme.colors.darkBlue};
    margin-bottom: 2px;
    font-family: 'Poppins-Semibold'; 
`;