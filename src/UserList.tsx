import React, { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
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

function UserList() {
  const {
    user: { data },
    loading
  } = useSelector(mapState);
  const dispatch: Dispatch = useDispatch();
  const { load } = useMemo(() => mapDispatch(dispatch), [dispatch]);
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

export default UserList;
