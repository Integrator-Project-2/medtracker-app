import styled from 'styled-components/native';
import { Card } from 'react-native-paper';
import { theme } from '@/global/styles/theme';


interface StyledCardProps {
  height?: number;
  width?: number;
  bgColor?: string;
  border?: boolean;
}

export const StyledCard = styled(Card)<StyledCardProps>`
  min-height: ${(props) => `${props.height || 80}px`};
  min-width: ${(props) => `${props.width || 316}px`};
  padding: 14px;
  justify-content: center;
  border-radius: 14px;
  background-color: ${(props) => props.bgColor || theme.colors.white};

  ${(props) =>
  props.border &&
  `
  border-width: 2px;
  border-color: ${ theme.colors.lightBlue};
  `}
`;

export const CardContent = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const LeftSection = styled.View`
  margin-right: 20px;
`;

export const CenterSection = styled.View`
  flex: 1;
`;

interface TitleProps {
  color?: string;
  fontSize?: number;
}

export const Title = styled.Text<TitleProps>`
  font-size: ${(props) => props.fontSize || 16}px;
  font-family: 'Poppins-Semibold';
  color: ${(props) => props.color || theme.colors.lightBlue};
`;

interface SubtitleProps {
  color?: string;
  fontSize?: number;
}

export const Subtitle = styled.Text<SubtitleProps>`
  font-size: ${(props) => props.fontSize || 16}px;
  color: ${(props) => props.color || theme.colors.lightPurple};
  font-family: 'Poppins-Medium';
`;

export const AdditionalInfoContainer = styled.View`
  margin-right: 5px;
  margin-left: 10px;
  flex-direction: column;
  align-items: center;
`;

interface AdditionalInfoTextProps {
  color?: string;
  fontSize?: number;
}

export const AdditionalInfoPrimaryText = styled.Text<AdditionalInfoTextProps>`
  font-size: ${(props) => props.fontSize || 14}px;
  font-family: 'Poppins-Semibold';
  color: ${(props) => props.color || theme.colors.lightBlue};
  margin-bottom: 2px;
`;

export const AdditionalInfoSecondaryText = styled.Text<AdditionalInfoTextProps>`
  font-size: 16px;
  font-family: 'Poppins-Semibold';
  color: ${(props) => props.color || theme.colors.lightPurple};
`;

export const RightSection = styled.View`
  margin-left: auto;
`;
