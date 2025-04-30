import { PlaceOutlined } from "@mui/icons-material";
import MenuItemSelect from "../../components/MenuItem";

// const cities = ["Ahmedabad", "Surat"];

// const city = cities.map((city) => ({ label: city, value: city }));

// const cityObjects = [{ label: "", value: "Select City" }, ...city];

interface CityLocationProps {
  city?: string[];
}

const CityLocation: React.FC<CityLocationProps> = ({ city = [] }) => {
  const cityObject = [
    { label: "", value: "Select City" },
    ...city.map((city) => ({ label: city, value: city })),
  ];
  return (
    <>
      <MenuItemSelect
        record={cityObject}
        startIcon={<PlaceOutlined />}
        fontSize="20px"
        searchField
        filterKey="location"
      />
    </>
  );
};
export default CityLocation;
