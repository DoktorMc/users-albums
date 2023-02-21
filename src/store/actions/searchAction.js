export const ACTION_SEARCH_CONTACT = "ACTION_SEARCH_CONTACT";

export const searchContact = (payload) => {
  return {
    type: ACTION_SEARCH_CONTACT,
    payload
  }
}