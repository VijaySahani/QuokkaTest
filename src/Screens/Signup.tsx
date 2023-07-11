import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {Component} from 'react';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import { signup} from '../Redux/action/user'
import { connect } from 'react-redux'
import { AnyAction, bindActionCreators, Dispatch }  from 'redux'
import CheckBox from 'react-native-check-box';

const passReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
const emailReg =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

interface props {
  signup:any
  navigation:any
  email: any,
  password: any,
}
import InpuText from '../Components/Textinput';

 class Signup extends Component <props>  {
  constructor(props: any) {
    super(props);
    this.state = {
      email: '',
      password: '',
      toggleCheck: false,
      isemailErrorText: false,
      ispasswordErrorText: false,
    };
  }
  onSubmit = () => {
    const {email, password, toggleCheck} = this.state;
    if (email?.toLowerCase().match(emailReg)) {
      console.log("password.match(passReg) ",password.match(passReg),password);
      
      if (password.match(passReg)) {
        if (toggleCheck) {
          this.props?.signup(this.state.email,this.state.password,this.props.navigation);
        } else {
          alert('Please accept Terms & conditions');
        }
      } else {
        this.setState({ispasswordErrorText: true});
      }
    } else {
      this.setState({isemailErrorText: true});
    }
  };
  render() {
    const {
      email,
      password,
      toggleCheck,
      isemailErrorText,
      ispasswordErrorText,
    } = this.state;
    
    return (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <SafeAreaView>
          {/* Header View */}
          <View
            style={{
              marginTop: RFPercentage(15),
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: RFValue(25), color: '#000'}}>Signup</Text>
          </View>
          {/* Form View */}
          <View style={{marginTop: RFPercentage(15)}}>
            {/* Email View */}
            <View style={styles.emailView}>
              <InpuText
                style={{
                  borderWidth: 1,
                  height: RFValue(40),
                  width: RFPercentage(45),
                  fontSize: RFValue(14),
                  paddingHorizontal: RFValue(10),
                  borderRadius: RFValue(5),
                }}
                onChangeText={(value: any) => this.setState({email: value,isemailErrorText:false})}
                placeholder={'Please enter email'}
                placeholderTextColor={ 'grey'}
                keyboardType="email-address"
                value={email}
              />
            </View>
            {isemailErrorText ? (
              <View
                style={{
                  marginTop: RFValue(5),
                  paddingLeft: RFValue(20),
                  height: RFPercentage(2),
                }}>
                <Text style={{color:'red',fontSize:RFValue(14)}}>Please enter correct email</Text>
              </View>
            ) : (
              <View
                style={{
                  marginTop: RFValue(5),
                  paddingLeft: RFValue(20),
                  height: RFPercentage(2),
                }}>
                <Text></Text>
              </View>
            )}
            {/* Password View */}
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: RFPercentage(4),
              }}>
              <InpuText
                style={{
                  borderWidth: 1,
                  height: RFValue(40),
                  width: RFPercentage(45),
                  fontSize: ispasswordErrorText ? RFValue(11) : RFValue(14),
                  paddingHorizontal: RFValue(10),
                  borderRadius: RFValue(5),
                }}
                onChangeText={(value: any) => this.setState({password: value,ispasswordErrorText:false})}
                placeholder={'Please enter password'}
                placeholderTextColor={ 'grey'}
                keyboardType="default"
                secureTextEntry={true}
              />
            </View>
            {ispasswordErrorText ? (
              <View
                style={{
                  marginTop: RFValue(5),
                  paddingLeft: RFValue(20),
                  height: RFPercentage(2),
                }}>
                <Text style={{color:'red',fontSize:RFValue(11.5)}}>Password must contain 8 characters ,1 uppercase,1 letter</Text>
              </View>
            ) : (
              <View
                style={{
                  marginTop: RFValue(5),
                  paddingLeft: RFValue(20),
                  height: RFPercentage(2),
                }}>
                <Text></Text>
              </View>
            )}
            <View
              style={{
                flexDirection: 'row',
                marginTop: RFPercentage(5),
                alignItems: 'flex-start',
              }}>
              <CheckBox
                style={{paddingLeft: RFValue(15), paddingRight: RFValue(5)}}
                onClick={() => {
                  this.setState({
                    toggleCheck: !this.state.toggleCheck,
                  });
                }}
                isChecked={this.state.toggleCheck}
              />
              <Text style={{color: '#000', fontSize: RFValue(12)}}>
                By logging in, I accept the terms & conditions of the platform
              </Text>
            </View>

            {/* Login Button  */}
            <View
              style={{
                marginTop: RFPercentage(10),
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <TouchableOpacity
                style={{
                  borderWidth: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: RFPercentage(6),
                  width: RFPercentage(25),
                  borderRadius: RFValue(8),
                  backgroundColor: '#000',
                }}
                onPress={() => this.onSubmit()}
                >
                <Text
                  style={{
                    fontSize: RFValue(18),
                    color: '#fff',
                    fontWeight: '500',
                  }}>
                  Signup
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </View>
    );
  }
}
const mapDispatchToProps = (dispach: Dispatch<AnyAction>) => {
  return bindActionCreators({ signup }, dispach)
}

const mapstateToProps = (state: { user: any }) => {
  return {
      user: state.user,
  }
}
export default connect (mapstateToProps, mapDispatchToProps)(Signup)

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff'},
  headerView: {
    marginTop: RFPercentage(15),
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {fontSize: RFValue(25), color: '#000'},
  emailView: {alignItems: 'center', justifyContent: 'center'},
});
