import React, { useState } from "react";

function HookCounter3() {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  console.log(name.firstName, name.lastName);
  return (
    <div>
      {/* useState() does not update and merge objects manually instead it just sets the assigned value only */}
      {/* Copy the name value using spread operator(...) and then change firstName or LastName */}
      <input
        value={name.firstName}
        type="text"
        onChange={e => setName({ ...name, firstName: e.target.value })}
      />
      <input
        value={name.lastName}
        type="text"
        onChange={e => setName({ ...name, lastName: e.target.value })}
      />
      <h2>Your first name is - {name.firstName}</h2>
      <h2>Your last name is - {name.lastName}</h2>
    </div>
  );
}

export default HookCounter3;
