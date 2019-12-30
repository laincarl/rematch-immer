import React from "react";
import { connect } from "react-redux";

function User({ user, removeUser }) {
  return (
    <div>
      {user.name}
      <button
        onClick={() => {
          removeUser(user.id);
        }}
      >
        remove
      </button>
    </div>
  );
}

export default connect(
  () => ({}),
  ({ user: { removeUser } }) => ({
    removeUser: value => removeUser(value)
  })
)(User);
