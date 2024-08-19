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
import { IconButton, RadioButton } from 'react-native-paper';
import { TouchableOpacity } from 'react-native';

interface CardComponentProps {
  title: string;
  subtitle: string;
  downloadButton?: boolean;
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
  select?: boolean;
  selected?: boolean;
  onPress?: (value: string) => void;
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
  value
}) => {

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
            {select ? (
              <RadioButton
                value={value || ''}
                status={selected ? 'checked' : 'unchecked'}
                color={theme.colors.lightBlue}
              />
            ) : (
              (downloadButton && <IconButton icon="download" iconColor={theme.colors.lightBlue} onPress={() => { }} />) ||
              (menuOptions && <MenuButton options={menuOptions} iconColor={titleColor} />)
            )}
          </RightSection>
        </CardContent>
      </StyledCard>
    </TouchableOpacity>
  );
};

export default CardComponent;
