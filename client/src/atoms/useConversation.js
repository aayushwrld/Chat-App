import { atom } from 'recoil';

export const selectedConversationState = atom({
  key: 'selectedConversationState',
  default: null,
});

export const messagesState = atom({
  key: 'messagesState',
  default: [],
});