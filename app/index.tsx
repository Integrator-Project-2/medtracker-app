import RegistryScreen from "@/screens/Registry";


export default function Registry() {
  return (
    <RegistryScreen/>
  )
}


// import { PrimaryButton } from "@/components/PrimaryButton";
// import { useRouter } from "expo-router";
// import { View, Image } from "react-native";

// export default function Welcome() {
//   const router = useRouter();

//   function handlePress() {
//     router.push('/(tabs)');
//   }
  
//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//         gap: 10
//       }}
//     >
//       <PrimaryButton
//         text="Get started"
//         bgColor="#354DB0"
//         width={316} 
//         height={52}
//         onPress={handlePress}
//       />

//       <PrimaryButton
//         text="I already have an account"
//         bgColor="transparent"
//         width={316} 
//         height={52}
//         textColor="#4D80F9"
//         border="1px solid #4D80F9"
//         onPress={() => console.log('Button Pressed')}
//       />

//       <PrimaryButton
//         text="Sign up with Google"
//         bgColor="transparent"
//         width={316} 
//         height={52}
//         textColor="#4D80F9"
//         icon={
//           <Image source={require('../assets/images/devicon_google.png')} style={{ marginRight: 10 }} />
//         }
//         border="1px solid #4D80F9"
//         onPress={() => console.log('Button Pressed')}
//       />
//     </View>
//   );
// }
