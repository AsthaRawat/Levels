import React, { useEffect, useState } from "react";
import data from "../../../components/countryCity/countryCity.json";
import Select from "react-select";
import { selectStyles } from "../../../components/common/style";
import {
  CountryData,
  Step2Props,
} from "../../../components/interface/interface";
import { Signup } from "../../../components/enum/enums";

const Step2: React.FC<Step2Props> = ({
  formData,
  setFormData,
  setButtonText,
}) => {
  const [selectedCountry, setSelectedCountry] = useState<string>(
    formData.country || ""
  );
  const [cities, setCities] = useState<string[]>([]);
  const [countryOptions, setCountryOptions] = useState<
    { value: string; label: string }[]
  >([]);

  const countriesData: CountryData = data;
  useEffect(() => {
    setButtonText?.(Signup.NEXT);
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
    } else {
      setFormData({ ...formData, city: "" });
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
          placeholder={Signup.YOUR_COUNTRY}
          styles={selectStyles}
        />
        <Select
          value={cityValue}
          onChange={handleCityChange}
          options={cities.map((city) => ({ value: city, label: city }))}
          placeholder={selectedCountry ? Signup.SELECT_REGION : Signup.NO_CITY}
          isDisabled={!selectedCountry}
          styles={selectStyles}
        />
    </div>
  );
};

export default Step2;
