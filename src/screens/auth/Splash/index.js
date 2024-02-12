import React from "react";
import{
    Text,
    View,
    Image,
    Pressable
} from "react-native"
import Button from "../../../components/Button"
import {styles} from "./styles"

const Splash = () => {
    return (
        <View style={styles.container}>
            <Image resizeMode="contain" style={styles.Image} source={require('/Users/student/AwesomeProject/src/assets/splash_image.png')}></Image>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>You'll Find</Text>
                <Text style={[styles.title, styles.innerTitle]}>All you need </Text>
                <Text style={styles.title}>Here!</Text>
            </View>



            <Button title="Sign Up"/>
            <Pressable hitSlop={20}>
                <Text style={styles.footerText}>Sign In</Text>
            </Pressable>
        </View>
    )
}
export default Splash
