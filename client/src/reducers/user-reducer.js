import { ADD_CONTACT, FETCH_CONTACTS } from "../constants/type";

function empReducer(state = { contacts: [] }, action) {
  switch (action.type) {
    case FETCH_CONTACTS: {
      return { ...state, contacts: action.data };
    }
    case ADD_CONTACT: {
      let contacts = [...state.contacts];
      contacts.push(action.data);
      return { ...state, contacts };
    }
    default:
      break;
  }
}
export default empReducer;
