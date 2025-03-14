import Button from '@/components/shareable/button';
import Text from '@/components/shareable/text';
import { View, StyleSheet } from 'react-native';
import { colors } from './theme';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View>
        <Text>Alunify</Text>
      </View>
      <View>
        <Button size="large">Login</Button>
        <Button size="large">cadastro</Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background.primary,
  },
});
