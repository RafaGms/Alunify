import React from 'react';
import { StyleSheet, Text as RNText, TextProps } from 'react-native';
import { colors, fontSizes, font } from '@/app/theme';

export interface Props extends TextProps {}

const Text = ({ children, style, ...rest }: Props) => {
  return (
    <RNText style={[styles.text, style]} {...rest}>
      {children}
    </RNText>
  );
};

export default React.memo(Text);

const styles = StyleSheet.create({
  text: {
    color: colors.white,
    fontSize: fontSizes.medium,
    fontFamily: font.REGULAR,
  },
});
