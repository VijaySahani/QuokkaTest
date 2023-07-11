import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {RFValue} from 'react-native-responsive-fontsize';

function CustomDrawer({props, navigation}: any) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.safeView}>
        <DrawerContentScrollView {...props}>
          <View style={{flex: 1}}>
            <TouchableOpacity style={styles.touchableHome}>
              <Text>Home</Text>
            </TouchableOpacity>
          </View>
        </DrawerContentScrollView>
        <View style={styles.bottomView}>
          <Text style={styles.versionText}>
            Version 1.0.0
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  safeView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  touchableHome: {
    backgroundColor: 'lightgrey',
    height: RFValue(50),
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  versionText: {
    color: '#000',
    fontSize: RFValue(12),
  },
});
export default CustomDrawer;
