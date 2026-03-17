export const sendInvitation = async (requestObject, responseObject) => {

  const { email, role } = requestObject.body;

  responseObject.json({
    message: `Invitation sent to ${email} for role ${role}`
  });
};