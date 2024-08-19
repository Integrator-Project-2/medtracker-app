import { theme } from '@/global/styles/theme';
import styled from 'styled-components/native'

interface SubtitleProps {
    color?: string
    size?: number
    marginBottom?: number
}
export const StyledSubtitle = styled.Text<SubtitleProps>`
    font-size: ${({ size }) => size || 14}px;
    color: ${({ color }) => color || theme.colors.navy};
    margin-bottom: ${({ marginBottom }) => marginBottom || 2}px;
    font-family: 'Poppins-Semibold'; 
`;