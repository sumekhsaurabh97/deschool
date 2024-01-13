import React, { useState, useEffect } from "react";
import Select from "react-select";

const DropDown = (props) => {
  const {
    clearFilter,
    setClearFilter,
    setActiveButtonValue,
    filterLesson,
    name,
    categoryUrl,
    timeUrl,
    setCategoryUrl
  } = props;

  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    // eslint-disable
    // eslint-disable-next-line react-hooks/exhaustive-deps
    if (!clearFilter) {
      filterLesson();
    }
  }, [categoryUrl, timeUrl]);

  useEffect(() => {
    if (clearFilter) {
      setSelectedOption(null);
      categoryUrl && setCategoryUrl("");
    }
  }, [clearFilter]);

  const options = props.options.map((option) => ({
    value: option.id,
    label: option.name,
  }));

  const handleChange = (selectedFilterOption) => {
    setClearFilter((prev) => false);
    setSelectedOption((prev) => selectedFilterOption);
    // setActiveButtonValue((prev) => "");
    if (name === "allCategories") {
      props.setCategoryUrl((prev) => `${selectedFilterOption.value}`);
    }
  };
  return (
    <Select
      value={clearFilter ? null : selectedOption}
      options={options}
      onChange={handleChange}
      placeholder={props.placeholder}
      autoFocus={false}
      className={props.className}
      classNamePrefix={props.classNamePrefix && props.classNamePrefix}
      name={props.name}
      styles={{
        control: (base, state) => ({
          ...base,
          "&:hover": { borderColor: "black" },
          boxShadow: "none",
          lineHeight: "28px",
          border: "1px solid #2e2d2d",
          fontStyle: "normal",
          fontWeight: "500",
          display: "flex",
          alignItems: "center",
        }),
        menu: (provided) => ({ ...provided, zIndex: 10000 }),
      }}
    />
  );
};
export default DropDown;
