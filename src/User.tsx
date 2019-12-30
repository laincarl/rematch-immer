import React, { useMemo, memo } from "react";
import { useDispatch } from "react-redux";
import { Dispatch } from "./store";
import { User as iUser } from "./models/user";

const mapDispatch = (dispatch: Dispatch) => ({
  removeUser: (value: number) => dispatch.user.removeUser(value)
});
type Props = {
  user: iUser;
};
function User({ user }: Props) {
  console.log("render");
  const dispatch: Dispatch = useDispatch();
  const { removeUser } = useMemo(() => mapDispatch(dispatch), [dispatch]);
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

export default memo(User);
