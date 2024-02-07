import UserFooter from "../../components/User components/UserFooter";
import UserNavbar from "../../components/User components/UserNavbar";
import UserPropertyDetails from "../../components/User components/DetailsSubComponents/UserPropertyDetails";
import { useGlobalContext } from "../../Hooks/useGlobalContext";


const PropertiesDetails = () => {
  const {isDark} = useGlobalContext()
  return <div className={isDark ? "w-100 DarkMode" : "w-100"} style={{maxWidth: "1500px", margin: "auto"}}>
    <UserNavbar />
    <UserPropertyDetails />
    <UserFooter />
  </div>;
};

export default PropertiesDetails;
