import Input from "../Input/Input";
import Select from "../Select/Select";
import React, { useState } from "react";
const FilterComponent = (props) => {
  const [docNumber, setDocNumber] = useState("");
  const [test, setTest] = useState("");
  const { name, fields } = props;

  return (
    <>
      <div>
        <Input
          label="Username"
          name="username"
          type="text"
          value={docNumber}
          setState={setDocNumber}
        />
        <Select
          label="Username"
          name="username"
          value={test}
          setState={setTest}
          options={[
            { value: 1, label: "uno" },
            { value: 2, label: "dos" },
          ]}
        />
      </div>
    </>
  );
};

export default FilterComponent;

// [
//   {
//     name:
//   }
// ]
