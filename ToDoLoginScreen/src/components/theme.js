import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

const theme = {

    colors: {
        text: "#000000",
        primary: "#50C2C9",
        secondary: "#F2FAF7",
        error: "#f13a59",
        lightBlue: "#049ead",
        background: "#DCEEE7",
        white: "#ffffff",
        success: "#3adb76",
        warning: "#ffae00",
        turquoise: "#03dac5",

    },
    mixins: {
        height: height,
        width: width,
    },

};
export default theme;