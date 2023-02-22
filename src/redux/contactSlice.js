import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    filter: '',
  },
  reducers: {
    addContact: {
      reducer({ contacts }, action) {
        contacts.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            name,
            number,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact({ contacts }, action) {
      const index = contacts.findIndex(
        contact => contact.id === action.payload
      );
      contacts.splice(index, 1);
    },
    getFilterContact(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { addContact, deleteContact, getFilterContact } =
  contactSlice.actions;
export const contactsReducer = contactSlice.reducer;
