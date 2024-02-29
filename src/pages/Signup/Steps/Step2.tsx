import React, { useEffect, useState } from "react";
import data from "../../../components/countryCity/countryCity.json";
import Select from "react-select";
import { selectStyles } from "../../../components/common/style";
import { CountryData, Step2Props } from "../../../components/interface/interface";


const Step2: React.FC<Step2Props> = ({
  formData,
  setFormData,
  setButtonText,
}) => {
  const [selectedCountry, setSelectedCountry] = useState<string>(
    formData.country || ""
  );
  const [cities, setCities] = useState<string[]>([]);
  const [selectedCity, setSelectedCity] = useState<string>(formData.city || "");
  const [countryOptions, setCountryOptions] = useState<
    { value: string; label: string }[]
  >([]);

  const countriesData: CountryData = data;
  useEffect(() => {
    setButtonText?.("Next");
    const countryOptions = Object.keys(countriesData).map((country) => ({
      value: country,
      label: country,
    }));
    setCountryOptions(countryOptions);
  }, []);

  const handleCountryChange = (
    selectedOption: { value: string; label: string } | null
  ) => {
    if (selectedOption) {
      setFormData({ ...formData, country: selectedOption.value });
      setSelectedCountry(selectedOption.value);
      setCities(countriesData[selectedOption.value] || []);
    } else {
      setFormData({ ...formData, country: "" });
      setSelectedCountry("");
      setCities([]);
    }
  };

  const handleCityChange = (
    selectedOption: { value: string; label: string } | null
  ) => {
    if (selectedOption) {
      setFormData({ ...formData, city: selectedOption.value });
      setSelectedCity(selectedOption.value);
    } else {
      setFormData({ ...formData, city: "" });
      setSelectedCity("");
    }
  };

  const countryValue = countryOptions.find(
    (option) => option.value === selectedCountry
  );
  const cityValue = formData.city
  ? { value: formData.city, label: formData.city }
  : null;
  
  return (
    <div className="step2-container">
      <Select
        value={countryValue}
        onChange={handleCountryChange}
        options={countryOptions}
        placeholder="Your Country"
        styles={selectStyles}
      />

      <Select
        value={cityValue}
        onChange={handleCityChange}
        options={cities.map((city) => ({ value: city, label: city }))}
        placeholder={selectedCountry ? "Select Region" : "No cities available"}
        isDisabled={!selectedCountry}
        styles={selectStyles}
      />
    </div>
  );
};

export default Step2;
