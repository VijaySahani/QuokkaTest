import {Text, View} from 'react-native';
import React, {Component} from 'react';
import Navigation from '../Navigation/Navigation';


export default class SplashScreen extends Component {
  constructor(props:any) {
    super(props);
  }

  componentDidMount(): void {
    this.props?.navigation?.replace("Login")
  }
  render() {
    return (
      <View />
    );
  }
}
