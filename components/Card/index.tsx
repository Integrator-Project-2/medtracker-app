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
import { FontAwesome5, Fontisto, MaterialCommunityIcons } from '@expo/vector-icons';
import { theme } from '@/global/styles/theme';
import { IconButton } from 'react-native-paper';

interface CardComponentProps {
  title: string;
  subtitle: string;
  dowloadButton?: boolean;
  height?: number;
  width?: number;
  bgColor?: string;
  border?: boolean;
  titleColor?: string;
  subtitleColor?: string;
  additionalInfoPrimary?: string;
  additionalInfoSecondary?: string;
  additionalInfoPrimaryColor?: string;
  additionalInfoSecondaryColor?: string;
  menuOptions?: { label: string; onPress: () => void }[];
  iconName?: string;
}

const CardComponent: React.FC<CardComponentProps> = ({
  title, subtitle, dowloadButton, height, width, bgColor, titleColor, subtitleColor, border, additionalInfoPrimary, additionalInfoSecondary, additionalInfoPrimaryColor, additionalInfoSecondaryColor, menuOptions, iconName }) => {

    const renderIcon = () => {
      const iconColor = titleColor || theme.colors.lightBlue;

      if (iconName === 'tablet') {
        return <Fontisto name="tablets" size={24} color={iconColor} />;
      }
      if (iconName === 'pill') {
        return <MaterialCommunityIcons name="pill" size={24} color={iconColor} />;
      }
      if (iconName === 'injection') {
        return <FontAwesome5 name="syringe" size={24} color={iconColor} />;
      }
      if (iconName === 'prescription') {
        return <FontAwesome5 name="notes-medical" size={24} color={theme.colors.lightBlue} />;
      }
    }
  return (
    <StyledCard
      height={height}
      width={width}
      bgColor={bgColor}
      border={border}
    >
      <CardContent>

        <LeftSection>{renderIcon()}
        </LeftSection>

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
          { 
            (dowloadButton && <IconButton icon="download" iconColor={theme.colors.lightBlue} onPress={() => {}} />)|| (menuOptions && <MenuButton options={menuOptions} iconColor={titleColor} />)
          }
        </RightSection>
      </CardContent>
    </StyledCard>
  );
};

export default CardComponent;
