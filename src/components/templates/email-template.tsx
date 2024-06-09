export const EmailTemplate: React.FC<
  Readonly<{
    fullName?: string;
    subject?: string;
    message: string;
    toTeam: boolean;
  }>
> = ({ fullName, subject, message, toTeam }) => {
  return (
    <>
      {/* Message to SPAC 2024 Team from sender */}
      {toTeam ? (
        <p>{message}</p>
      ) : (
        <div>
          {/* Message to sender from SPAC 2024 Team */}
          <p>Hello {fullName},</p>
          <p>
            Thank you for taking the time to fill out the form on our website.
            We&apos;ve received your message and will get back to you as soon as
            possible if a response is required! If you have any questions,
            concerns, or clarifications, replying to this email will send your
            message to the SPAC 2024 team.
          </p>
          <p>Here is a copy of your message.</p>
          <p>
            <strong>Subject: </strong>
            {subject}
          </p>
          <p>
            <strong>Message: </strong>
            {message}
          </p>
        </div>
      )}
    </>
  );
};
