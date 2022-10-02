const getCurrentUserData = (state) => {
  const { user, users, publications, dialogs, } = state;

  const getUser = (id) => (
    users.find(user => user.id === id)
  );

  const getCurrentUserPublications = () => (
    publications.filter(publication => publication.userId === user.id)
  );

  const getCurrentUserDialogs = () => {
    const userDialogs = dialogs.filter(dialog => dialog.members.includes(user.id));

      return userDialogs.map(dialog => ({
      id: dialog.id,

      contact: getUser(
        dialog.members.find(member => member !== user.id)
      ).name,

      messages: dialog.messages.map(message => ({
        id: message.id,
        member: getUser(message.member).name,
        memberAvatar: getUser(message.member).avatar,
        message: message.message
      }))
    }))
  };

  return {
    ...state,
    publicationsPage: {
      publications: getCurrentUserPublications(),
      newPublicationText: state.publicationsPage.newPublicationText,
    },
    dialogsPage: {
      dialogs: getCurrentUserDialogs(),
      newMessageText: state.dialogsPage.newMessageText
    }
  }
}

export default getCurrentUserData;