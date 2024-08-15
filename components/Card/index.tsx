import * as React from 'react';
import {
  StyledCard,
  CardContent,
  LeftSection,
  CenterSection,
  Title,
  Subtitle,
  AdditionalInfoContainer,
  RightSection,
  AdditionalInfoPrimaryText,
  AdditionalInfoSecondaryText,
} from './styles';
import MenuButton from '../MenuButton';

interface CardComponentProps {
  title: string;
  subtitle: string;
  icon?: React.ReactNode;
  button?: React.ReactNode;
  height?: number;
  width?: number;
  roundness?: number;
  bgColor?: string;
  border?: boolean;
  titleColor?: string;
  subtitleColor?: string;
  additionalInfoPrimary?: string;
  additionalInfoSecondary?: string;
  additionalInfoPrimaryColor?: string;
  additionalInfoSecondaryColor?: string;
  menuOptions?: { label: string; onPress: () => void }[];
}

const CardComponent: React.FC<CardComponentProps> = ({
  title, subtitle, icon, button, height, width, roundness, bgColor, titleColor, subtitleColor, border, additionalInfoPrimary, additionalInfoSecondary, additionalInfoPrimaryColor, additionalInfoSecondaryColor, menuOptions }) => {
  return (
    <StyledCard
      height={height}
      width={width}
      roundness={roundness}
      bgColor={bgColor}
      border={border}
    >
      <CardContent>
        <LeftSection>{icon}</LeftSection>
        <CenterSection>
          <Title color={titleColor}>{title}</Title>
          <Subtitle color={subtitleColor}>{subtitle}</Subtitle>
        </CenterSection>

        {(additionalInfoPrimary || additionalInfoSecondary) && (
          <AdditionalInfoContainer>
            {additionalInfoPrimary && (
              <AdditionalInfoPrimaryText color={additionalInfoPrimaryColor}>
                {additionalInfoPrimary}
              </AdditionalInfoPrimaryText>
            )}
            {additionalInfoSecondary && (
              <AdditionalInfoSecondaryText color={additionalInfoSecondaryColor}>
                {additionalInfoSecondary}
              </AdditionalInfoSecondaryText>
            )}
          </AdditionalInfoContainer>
        )}

        <RightSection>
          {button || (menuOptions && <MenuButton options={menuOptions} iconColor={titleColor} />)}
        </RightSection>
      </CardContent>
    </StyledCard>
  );
};

export default CardComponent;
