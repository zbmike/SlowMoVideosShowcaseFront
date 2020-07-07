import React from "react";

import PartiesList from "../components/PartiesList";

const Parties = () => {
  const PARTIES = [
    {
      id: "p1",
      name: "Andy&Mai",
      image:
        "https://images.ctfassets.net/77l22z9el0aa/68X8glzRII6myuoYsI6E0S/02ceb485340fcf2ea2227e99b164be21/3963534.jpg?fm=jpg&fl=progressive&q=75&w=2000",
      videos: 3,
    },
  ];

  return <PartiesList items={PARTIES} />;
};

export default Parties;
