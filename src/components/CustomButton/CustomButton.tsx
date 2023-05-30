import React from 'react';
import { View, Text, StyleSheet, Pressable, PressableProps, TextStyle } from 'react-native';

interface CustomButtonProps extends PressableProps {
  type?: 'PRIMARY' | 'TERTIARY';
  bgColor?: string;
  fgColor?: string;
  text: string;
  onPress: () => void;
}

interface CustomTextStyle extends TextStyle {
  [key: string]: any;
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 15,
    marginVertical: 5,
    alignItems: 'center',
    borderRadius: 5,
  },

  container_PRIMARY: {
    backgroundColor: '#3B71F3',
  },

  container_TERTIARY: {
    backgroundColor: 'transparent',
    borderWidth: 0,
  },

  text: {
    fontWeight: 'bold',
    color: 'white',
  },

  text_TERTIARY: {
    color: 'gray',
  },
});

const CustomButton: React.FC<CustomButtonProps> = ({
  onPress,
  text,
  type = 'PRIMARY',
  bgColor = '#3B71F3',
  fgColor = 'white',
  ...props
}) => {
  const containerStyle = StyleSheet.flatten([
    styles.container,
    styles[`container_${type}` as keyof typeof styles],
    bgColor ? { backgroundColor: bgColor } : {},
  ]) || {};

  const textStyle = styles[`text_${type}` as keyof typeof styles] || styles.text;
  const customTextStyle: TextStyle = { color: fgColor };

  return (
    <Pressable onPress={onPress} style={containerStyle} {...props}>
      <Text style={[styles.text, textStyle, customTextStyle]}>
        {text}
      </Text>
    </Pressable>
  );
};

export default CustomButton;
