import { useEffect, useMemo, useState } from "react";

import Layout from "../components/Layout";

import MailSidebar from "../components/Mail/MailSidebar";
import MailToolbar from "../components/Mail/MailToolbar";
import MailList from "../components/Mail/MailList";
import ComposeModal from "../components/Mail/ComposeModal";

import { defaultMails } from "../components/Mail/MailData";

const Mail = () => {
  // Mail Data
  const [mails, setMails] = useState(() => {
    const saved = localStorage.getItem("mail-data");
    return saved ? JSON.parse(saved) : defaultMails;
  });

  // Current Folder
  const [folder, setFolder] = useState("Inbox");

  // Search
  const [search, setSearch] = useState("");

  // Compose Modal
  const [showCompose, setShowCompose] =
    useState(false);

  // Save LocalStorage
  useEffect(() => {
    localStorage.setItem(
      "mail-data",
      JSON.stringify(mails)
    );
  }, [mails]);

  // Filter
  const filteredMails = useMemo(() => {
    return mails.filter((mail) => {
      const folderMatch =
        folder === "Starred"
          ? mail.starred
          : folder === "Bookmarked"
          ? mail.bookmarked
          : mail.folder === folder;

      const searchMatch =
        mail.sender
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        mail.subject
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        mail.preview
          .toLowerCase()
          .includes(search.toLowerCase());

      return folderMatch && searchMatch;
    });
  }, [mails, folder, search]);

  // Compose Mail
  const addMail = (mail) => {
    setMails((prev) => [
      {
        id: Date.now(),
        ...mail,
        folder: "Sent",
        selected: false,
        starred: false,
        bookmarked: false,
      },
      ...prev,
    ]);
  };

  // Delete
  const deleteMail = (id) => {
    setMails((prev) =>
      prev.map((mail) =>
        mail.id === id
          ? {
              ...mail,
              folder: "Deleted",
            }
          : mail
      )
    );
  };

  // Star
  const toggleStar = (id) => {
    setMails((prev) =>
      prev.map((mail) =>
        mail.id === id
          ? {
              ...mail,
              starred: !mail.starred,
            }
          : mail
      )
    );
  };

  // Bookmark
  const toggleBookmark = (id) => {
    setMails((prev) =>
      prev.map((mail) =>
        mail.id === id
          ? {
              ...mail,
              bookmarked:
                !mail.bookmarked,
            }
          : mail
      )
    );
  };

  // Checkbox
  const toggleSelect = (id) => {
    setMails((prev) =>
      prev.map((mail) =>
        mail.id === id
          ? {
              ...mail,
              selected: !mail.selected,
            }
          : mail
      )
    );
  };

  // Select All
  const selectAll = () => {
    const allSelected =
      filteredMails.every(
        (mail) => mail.selected
      );

    setMails((prev) =>
      prev.map((mail) =>
        filteredMails.find(
          (m) => m.id === mail.id
        )
          ? {
              ...mail,
              selected: !allSelected,
            }
          : mail
      )
    );
  };

  return (
    <Layout>

      <div className="flex min-h-[calc(100vh-90px)] flex-col overflow-hidden rounded-3xl bg-white shadow-sm xl:h-[calc(100vh-90px)] xl:flex-row">

        {/* Sidebar */}

        <div className="w-full border-b border-gray-200 xl:w-[300px] xl:border-b-0 xl:border-r">

          <MailSidebar
            folder={folder}
            setFolder={setFolder}
            onCompose={() =>
              setShowCompose(true)
            }
            mails={mails}
          />

        </div>

        {/* Content */}

        <div className="flex min-w-0 flex-1 flex-col">

          <MailToolbar
            search={search}
            setSearch={setSearch}
            selectAll={selectAll}
          />

          <div className="flex-1 overflow-auto">

            <MailList
              mails={filteredMails}
              toggleStar={toggleStar}
              toggleBookmark={
                toggleBookmark
              }
              toggleSelect={toggleSelect}
              deleteMail={deleteMail}
            />

          </div>

        </div>

      </div>

      <ComposeModal
        open={showCompose}
        onClose={() =>
          setShowCompose(false)
        }
        onSend={addMail}
      />

    </Layout>
  );
};

export default Mail;