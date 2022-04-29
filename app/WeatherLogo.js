import Icon from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import Font from "react-native-vector-icons/FontAwesome5";
import Material from "react-native-vector-icons/MaterialCommunityIcons";
import Ant from "react-native-vector-icons/AntDesign";

const icon = (params, size) => {
  switch (params) {
    case "01d":
      return <Icon name="md-sunny" size={size} color="rgb(255, 196, 0)" />;
    case "01n":
      return <Icon name="moon-outline" color="white" size={size} />;
    case "02d":
      return <Icon name="partly-sunny-outline" color="white" size={size} />;
    case "02n":
      return <Icon name="md-cloudy-night-outline" color="white" size={size} />;
    case "03d":
      return <Icon name="md-cloudy-outline" color="white" size={size} />;
    case "03n":
      return <Icon name="md-cloudy-outline" color="white" size={size} />;
    case "04d":
      return <Icon name="md-cloudy-outline" color="white" size={size} />;
    case "04n":
      return <Icon name="md-cloudy-outline" color="white" size={size} />;
    case "09d":
      return <Feather name="cloud-drizzle" color="white" size={size} />;
    case "09n":
      return <Feather name="cloud-drizzle" color="white" size={size} />;
    case "10d":
      return <Icon name="rainy-outline" color="white" size={size} />;
    case "10n":
      return <Icon name="rainy-outline" color="white" size={size} />;
    case "011d":
      return <Font name="cloud-showers-heavy" color="white" size={size} />;
    case "011n":
      return <Font name="cloud-showers-heavy" color="white" size={size} />;
    case "13d":
      <Icon name="snow-outline" color="white" size={size} />;
    case "13n":
      <Icon name="snow-outline" color="white" size={size} />;
    case "50d":
      return <Material name="weather-fog" color="white" size={size} />;
    case "50n":
      return <Material name="weather-fog" color="white" size={size} />;
    default:
      return <Ant name="question" color="white" size={size} />;
  }
};

export default icon;
