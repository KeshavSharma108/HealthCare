import { StyleSheet, Text, View } from "react-native";

const Mainlayout = ({ style, children }) => {
  return (
    <>
      <View style={[styles.mainContainer, style]}>{children}</View>
      <View style={styles.footerContainer}>
        {/* <View style={styles.footer}>
      <Text>Attendance System</Text>
     </View> */}
      </View>
    </>
  );
};

export default Mainlayout;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 35,
    backgroundColor:'white'
  },
  footer: {
    justifyContent: "center",
    width: "100%",
    height: 50,
    backgroundColor: "cyan",
    alignItems: "center",
  },
  footerContainer: { justifyContent: "flex-end" },
});

// import React from 'react';
// import { Dimensions, StyleSheet, View } from 'react-native';

// // Get screen dimensions
// const { width, height } = Dimensions.get('window');

// // Custom Container Component
// const CustomContainer = ({ children, style }) => {
//   return (
//     <View style={[styles.container, style]}>
//       {children}
//     </View>
//   );
// };

// // Style the container dynamically
// const styles = StyleSheet.create({
//   container: {
//     width: width * 0.9, // Adjust width (e.g., 90% of screen width)
//     height: height * 0.8, // Adjust height (e.g., 80% of screen height)
//     padding: 10, // Add padding
//     backgroundColor: '#f0f0f0', // Background color
//     borderRadius: 10, // Optional: rounded corners
//     alignItems: 'center', // Align children
//     justifyContent: 'center', // Center children
//     shadowColor: '#000', // Optional: Add shadow
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 3,
//   },
// });

// // Example usage
// const App = () => {
//   return (
//     <CustomContainer style={{ backgroundColor: '#e0e0e0' }}>
//       {/* Add children components here */}
//     </CustomContainer>
//   );
// };

// export default App;
