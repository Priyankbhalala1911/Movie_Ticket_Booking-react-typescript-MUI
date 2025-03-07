import { PlaceOutlined } from "@mui/icons-material";
import MenuItemSelect from "../../components/MenuItem";

const cities = [
  "Ahmedabad",
  "Surat",
  "Vadodara",
  "Rajkot",
  "Bhavnagar",
  "Jamnagar",
  "Gandhinagar",
  "Junagadh",
  "Anand",
  "Navsari",
  "Bharuch",
  "Mehsana",
  "Morbi",
  "Nadiad",
  "Gandhidham",
];

const cityObjects = cities.map((city) => ({ label: city, value: city }));

const CityLocation: React.FC = () => {
  return (
    <>
      <MenuItemSelect
        record={cityObjects}
        startIcon={<PlaceOutlined />}
        fontSize="20px"
        searchField
      />
    </>
  );
};
export default CityLocation;
