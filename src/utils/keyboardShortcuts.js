export const handleKeyShortcuts = (e, deleteItem, openReplyBox) => {
  if (e.key === 'D' || e.key === 'd') {
    deleteItem();
  } else if (e.key === 'R' || e.key === 'r') {
    openReplyBox();
  }
};
