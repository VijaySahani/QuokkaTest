import auth from '@react-native-firebase/auth';

import firebase from '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore';
export const login = (email:any,password:any,navigation:any) => {
  return async (
    dispatch: any,
  ) => {
    try {
    const response = await auth().signInWithEmailAndPassword(email, password);
    dispatch({type: 'LOGIN', payload: response?.user});
    
      if(response!=null){
        navigation.navigate("Drawer")
      }
    } catch (e: any) {
      alert(e);
    }
  };
};

export const signup = (email: any, password: any,navigation:any) => {
  return async (dispatch: any, getState: any) => {
    try {
      const response = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );

      if (response.user?.uid) {
        const user = {
          uid: response.user.uid,
          email: email,
        };
        await firestore().collection('Users').add({user}).then(()=>console.log("USER ADDED")
        )
        dispatch({type: 'LOGIN', payload: user});
        navigation.navigate("Drawer")
    }
    } catch (e: any) {
        console.log("ERROR ",e);
        
      alert(e);
    }
  };
};
