import { useEffect, useMemo, useState } from "react";

import Layout from "../components/Layout";

import ChatSidebar from "../components/Chat/ChatSidebar";
import ChatHeader from "../components/Chat/ChatHeader";
import ChatMessages from "../components/Chat/ChatMessages";
import ChatInput from "../components/Chat/ChatInput";
import ChatProfile from "../components/Chat/ChatProfile";

import {
  teams,
  people,
  messages,
} from "../components/Chat/ChatData";

const Chat = () => {
  // Contacts

  const [contacts] = useState([
    ...teams,
    ...people,
  ]);

  // Current Chat

  const [selectedChat, setSelectedChat] =
    useState(people[1]);

  // Messages

  const [chatMessages, setChatMessages] =
    useState(() => {
      const saved =
        localStorage.getItem(
          "chat-messages"
        );

      return saved
        ? JSON.parse(saved)
        : messages;
    });

  // Search

  const [search, setSearch] = useState("");

  // Save

  useEffect(() => {
    localStorage.setItem(
      "chat-messages",
      JSON.stringify(chatMessages)
    );
  }, [chatMessages]);

  // Filter Contacts

  const filteredContacts = useMemo(() => {
    return contacts.filter((item) =>
      item.name
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [contacts, search]);

  // Current Messages

  const currentMessages =
    chatMessages[selectedChat.id] || [];

  // Send Message

  const sendMessage = (text) => {
    if (!text.trim()) return;

    const newMessage = {
      id: Date.now(),
      sender: "You",
      avatar:
        "https://i.pravatar.cc/150?img=12",
      type: "sent",
      text,
      time: "Just now",
    };

    setChatMessages((prev) => ({
      ...prev,
      [selectedChat.id]: [
        ...(prev[selectedChat.id] || []),
        newMessage,
      ],
    }));
  };

  return (
    <Layout>

      <div className="flex h-[calc(100vh-90px)] overflow-hidden rounded-3xl bg-white shadow-sm">

        {/* Sidebar */}

        <ChatSidebar
          contacts={filteredContacts}
          teams={teams}
          people={people}
          selectedChat={selectedChat}
          setSelectedChat={
            setSelectedChat
          }
          search={search}
          setSearch={setSearch}
        />

        {/* Center */}

        <div className="flex flex-1 flex-col">

          <ChatHeader
            chat={selectedChat}
          />

          <ChatMessages
            messages={currentMessages}
          />

          <ChatInput
            onSend={sendMessage}
          />

        </div>

        {/* Right */}

        <ChatProfile
          chat={selectedChat}
        />

      </div>

    </Layout>
  );
};

export default Chat;
