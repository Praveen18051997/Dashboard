import MailItem from "./MailItem";

const MailList = ({
  mails,
  toggleStar,
  toggleBookmark,
  toggleSelect,
  deleteMail,
}) => {
  if (mails.length === 0) {
    return (
      <div className="flex flex-1 items-center justify-center bg-white p-6">

        <div className="text-center">

          <h2 className="text-xl font-bold text-gray-600 sm:text-2xl">
            No mails found
          </h2>

          <p className="mt-2 text-sm text-gray-400 sm:text-base">
            Try another folder or search keyword.
          </p>

        </div>

      </div>
    );
  }

  return (
    <div className="flex-1 overflow-x-hidden overflow-y-auto bg-white">

      {mails.map((mail) => (

        <MailItem
          key={mail.id}
          mail={mail}
          toggleStar={toggleStar}
          toggleBookmark={toggleBookmark}
          toggleSelect={toggleSelect}
          deleteMail={deleteMail}
        />

      ))}

    </div>
  );
};

export default MailList;