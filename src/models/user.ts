import { createModel } from "@rematch/core";
import produce from "immer";
import { findIndex } from "lodash";
const getNextId = (list: User[]) => (list.length > 0 ? list[list.length - 1].id + 1 : 0);
export type User = {
  id: number;
  name: string;
};
export type UserState = {
  data: User[];
};
export default createModel<UserState>({
  state: {
    data: []
  },
  reducers: {
    setUsers(state: UserState, payload: User[]) {
      return produce(state, draft => {
        draft.data = payload;
      });
    },
    addUser(state, payload: string) {
      const nextId = getNextId(state.data);
      return produce(state, draft => {
        draft.data.push({
          id: nextId,
          name: payload
        });
      });
    },
    removeUser(state: UserState, payload: number) {
      const index = findIndex(state.data, user => user.id === payload);
      return produce(state, draft => {
        draft.data.splice(index, 1);
      });
    }
  },
  effects: {
    async load() {
      await new Promise(resolve => setTimeout(resolve, 1000));
      this.setUsers([
        {
          id: 1,
          name: "wang"
        }
      ]);
    }
  }
});
