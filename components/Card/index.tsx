import React from 'react';
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
import { FontAwesome5, Fontisto, MaterialCommunityIcons, FontAwesome6 } from '@expo/vector-icons';
import { theme } from '@/global/styles/theme';
import { IconButton, RadioButton } from 'react-native-paper';
import { TouchableOpacity } from 'react-native';

interface MenuOption {
  label: string;
  onPress: () => void;
}

interface CardComponentProps {
  title: string;
  subtitle?: string;
  downloadButton?: boolean;
  height?: number;
  width?: number;
  bgColor?: string;
  border?: boolean;
  titlefontSize?: number;
  subTitlefontSize?: number;
  additionalInfoPrimaryfontSize?: number;
  titleColor?: string;
  subtitleColor?: string;
  additionalInfoPrimary?: string;
  additionalInfoSecondary?: string;
  additionalInfoPrimaryColor?: string;
  additionalInfoSecondaryColor?: string;
  menuOptions?: MenuOption[];
  iconName?: 'tablet' | 'pill' | 'liquid' | 'drops' | 'injection' | 'prescription' | 'solution';
  select?: boolean;
  selected?: boolean;
  onPress?: (value: string) => void;
  downloadPress?: (value: string) => void;
  value?: string;
}

const CardComponent: React.FC<CardComponentProps> = ({
  title,
  subtitle,
  downloadButton,
  height,
  width,
  bgColor,
  border,
  titlefontSize,
  subTitlefontSize,
  additionalInfoPrimaryfontSize,
  titleColor,
  subtitleColor,
  additionalInfoPrimary,
  additionalInfoSecondary,
  additionalInfoPrimaryColor,
  additionalInfoSecondaryColor,
  menuOptions,
  iconName,
  select = false,
  selected = false,
  onPress,
  downloadPress,
  value
}) => {
  const renderIcon = () => {
    const iconColor = titleColor || theme.colors.lightBlue;

    switch (iconName) {
      case 'tablet':
        return <Fontisto name="tablets" size={24} color={iconColor} />;
      case 'pill':
        return <MaterialCommunityIcons name="pill" size={24} color={iconColor} />;
      case 'liquid':
        return <FontAwesome6 name="glass-water" size={24} color={iconColor} />;
      case 'solution':
        return <FontAwesome6 name="glass-water-droplet" size={24} color={iconColor} />;
      case 'drops':
        return <FontAwesome5 name="tint" size={24} color={iconColor} />;
      case 'injection':
        return <FontAwesome5 name="syringe" size={24} color={iconColor} />;
      case 'prescription':
        return <FontAwesome5 name="notes-medical" size={24} color={iconColor} />;
    }
  };

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => select && onPress && value && onPress(value)}
    >
      <StyledCard
        height={height}
        width={width}
        bgColor={bgColor}
        border={border}
      >
        <CardContent>
          <LeftSection>{renderIcon()}</LeftSection>

          <CenterSection>
            <Title fontSize={titlefontSize} color={titleColor}>{title}</Title>
            <Subtitle fontSize={subTitlefontSize} color={subtitleColor}>{subtitle}</Subtitle>
          </CenterSection>

          {(additionalInfoPrimary || additionalInfoSecondary) && (
            <AdditionalInfoContainer>
              {additionalInfoPrimary && (
                <AdditionalInfoPrimaryText fontSize={additionalInfoPrimaryfontSize} color={additionalInfoPrimaryColor}>
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
            {select ? (
              <RadioButton
                value={value || ''}
                status={selected ? 'checked' : 'unchecked'}
                color={theme.colors.lightBlue}
              />
            ) : downloadButton ? (
              <IconButton
                icon="download"
                iconColor={theme.colors.lightBlue}
                onPress={() => downloadPress && downloadPress(value || '')}
              />
            ) : menuOptions ? (
              <MenuButton options={menuOptions} iconColor={titleColor} />
            ) : (
              <IconButton
              icon="check"
              iconColor={titleColor}
              onPress={() => onPress && onPress(value || '')}
            />
            )}
          </RightSection>
        </CardContent>
      </StyledCard>
    </TouchableOpacity>
  );
};

export default CardComponent;
