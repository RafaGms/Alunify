import React from 'react';
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
  Text,
  TextStyle,
} from 'react-native';

import { colors } from '@/app/theme';

export interface ButtonProps extends TouchableOpacityProps {
  children: string;
  outlined?: boolean;
  size?: 'xSmall' | 'small' | 'medium' | 'large';
  textStyle?: StyleProp<TextStyle>;
}

const Button: React.FC<ButtonProps> = ({
  children,
  size = 'medium',
  style,
  textStyle,
  outlined,
  disabled,
  ...props
}) => {
  const buttonSizeStyle = styles[size] || styles.medium;
  const buttonStyle = [
    styles.buttonBase,
    outlined && styles.buttonOutlined,
    disabled && styles.buttonDisabled,
    buttonSizeStyle,
    style,
  ];

  return (
    <TouchableOpacity
      style={buttonStyle}
      activeOpacity={0.8}
      disabled={disabled}
      {...props}
    >
      <Text style={[styles.text, outlined && styles.textOutlined, textStyle]}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default React.memo(Button);

const styles = StyleSheet.create({
  xSmall: {
    width: 60,
    padding: 5,
  },
  small: {
    width: 80,
  },
  medium: {
    width: 150,
  },
  large: {
    width: 250,
  },
  buttonBase: {
    borderRadius: 25,
    backgroundColor: colors.green.primary,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    shadowColor: colors.grays.gray900,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1125,
    shadowRadius: 3.5,
  },
  buttonOutlined: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: colors.green.primary,
  },
  buttonDisabled: {
    backgroundColor: colors.grays.gray400,
  },
  text: {
    color: colors.background.primary,
    fontSize: 16,
    fontWeight: 'bold',
  },
  textOutlined: {
    color: colors.green.primary,
  },
});
