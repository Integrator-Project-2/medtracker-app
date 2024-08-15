import * as React from 'react';
import { IconButton } from 'react-native-paper';
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
}

export default function CardComponent({
  title,
  subtitle,
  icon,
  button,
  height,
  width,
  roundness,
  bgColor,
  titleColor,
  subtitleColor,
  border,
  additionalInfoPrimary,
  additionalInfoSecondary, 
  additionalInfoPrimaryColor,
  additionalInfoSecondaryColor,
}: CardComponentProps) {
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
          {button || <IconButton icon="dots-horizontal" iconColor={titleColor} onPress={() => {}} />}
        </RightSection>
      </CardContent>
    </StyledCard>
  );
}
