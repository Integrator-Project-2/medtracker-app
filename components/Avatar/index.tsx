import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Avatar } from 'react-native-paper';

interface AvatarComponentProps {
  name: string;
  photoUrl?: string | null;
}

const AvatarComponent: React.FC<AvatarComponentProps> = ({ name, photoUrl }) => {
  return (
    <View>
      {photoUrl ? (
        <Avatar.Image size={50} source={{ uri: photoUrl }} />
      ) : (
        <Avatar.Text size={50} label={getInitials(name)} />
      )}
    </View>
  );
};

const getInitials = (name: string): string => {
  return name.charAt(0).toUpperCase();
};

export default AvatarComponent;
