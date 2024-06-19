import { selector } from 'recoil';

export const filteredConversationsState = selector({
  key: 'filteredConversationsState',
  get: ({ get }) => {
    const conversations = get(conversationsState);
    const search = get(searchState).toLowerCase();
    if (!search) return conversations;

    return conversations.filter((conversation) =>
      conversation.fullName.toLowerCase().includes(search)
    );
  },
});
