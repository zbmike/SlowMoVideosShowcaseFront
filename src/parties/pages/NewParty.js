import React from "react";

import Input from "../../shared/components/FormElements/Input";
import { VALIDATOR_REQUIRE } from "../../shared/util/validators";
import "./NewParty.css";

const NewParty = () => {
  return (
    <form className="party-form">
      <Input
        element="input"
        type="text"
        lable="Name"
        validator={[VALIDATOR_REQUIRE]}
        errorText="Name cannot be empty"
      />
    </form>
  );
};

export default NewParty;
