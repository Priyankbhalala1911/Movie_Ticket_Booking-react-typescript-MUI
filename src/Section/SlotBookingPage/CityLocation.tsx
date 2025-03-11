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
];

const city = cities.map((city) => ({ label: city, value: city }));

const cityObjects = [{ label: "", value: "Select City" }, ...city];

const CityLocation: React.FC = () => {
  return (
    <>
      <MenuItemSelect
        record={cityObjects}
        startIcon={<PlaceOutlined />}
        fontSize="20px"
        searchField
        filterKey="location"
      />
    </>
  );
};
export default CityLocation;
