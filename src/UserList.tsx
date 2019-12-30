import React, { useEffect } from "react";
import { connect } from "react-redux";
import { iRootState, Dispatch } from "./store";
import UserInput from "./UserInput";
import User from "./User";

const mapState = (state: iRootState) => {
  return {
    user: state.user,
    loading: state.loading.effects.user.load // true when the `login/submit` effect is running
    // or
    // loading: state.loading.models.login, // true when ANY effect on the `login` model is running
  };
};
const mapDispatch = (dispatch: Dispatch) => ({
  load: () => dispatch.user.load()
});

type connectedProps = ReturnType<typeof mapState> &
  ReturnType<typeof mapDispatch>;
// to include additional typings
// use `type Props = connectedProps & { ...additionalTypings }
type Props = connectedProps;

function UserList({ user: { data }, loading, load }: Props) {
  useEffect(() => {
    load();
  }, [load]);
  return (
    <div>
      <UserInput />
      {loading ? (
        "loading..."
      ) : (
        <ul>
          {data.map(user => (
            <li key={user.id}>
              <User user={user} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default connect(
  mapState,
  mapDispatch
)(UserList);
