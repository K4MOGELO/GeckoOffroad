import { useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { Appbar, Avatar, Menu, Text } from 'react-native-paper';

export default function HomeHeader({
  navigation,
  route,
  options,
  back,
}) {
  const [visible, setVisible] = useState(false);
  const openMenu = () => setVisible(true)
  const closeMenu = () => setVisible(false);

  return (
    <Appbar.Header mode='medium'>
      <View style={styles.Header}>
        <View>
          <Text variant="headlineLarge">Hi, Jaden </Text>
          <Text >welcome to your Smart Home </Text>
        </View>
        <View>
          {!back ? (
            <Menu
              visible={visible}
              onDismiss={closeMenu}
              anchor={
                <Pressable onPress={openMenu}>
                  <Avatar.Image
                    size={43} source={require('./../../assets/nickiminaj.jpg')} />
                </Pressable>}>
              <Menu.Item
                onPress={() => {

                  navigation.navigate("My Account")
                }}
                title="My Account"
              />
              <Menu.Item
                onPress={() => {
                  console.log('Option 2 was pressed');
                }}
                title="Profiles"
              />
              <Menu.Item
                onPress={() => {
                  console.log('Option 3 was pressed');
                }}
                title="Settings"
              // disabled
              />
            </Menu>
          ) : null
          }

        </View>

      </View>
    </Appbar.Header >
  );
}


const styles = StyleSheet.create({
  Header: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: "space-between",
    marginHorizontal: 10,

    alignItems: "stretch",

  },

});



