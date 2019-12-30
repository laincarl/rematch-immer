import React, { useState } from "react";
import { connect } from "react-redux";

function UserInput({ addUser }) {
  const [value, setValue] = useState("");
  const handlePressEnter = () => {
    if (value && value.trim()) {
      setValue("");
      addUser(value);
    }
  };
  return (
    <input
      type="text"
      value={value}
      onChange={e => {
        setValue(e.target.value);
      }}
      onKeyDown={e => {
        if (e.keyCode === 13) {
          handlePressEnter();
        }
      }}
    />
  );
}

export default connect(
  () => ({}),
  ({ user: { addUser } }) => ({
    addUser: value => addUser(value)
  })
)(UserInput);
