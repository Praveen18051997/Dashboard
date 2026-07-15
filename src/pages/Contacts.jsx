import { useEffect, useMemo, useState } from "react";

import Layout from "../components/Layout";

import ContactToolbar from "../components/Contacts/ContactToolbar";
import ContactGrid from "../components/Contacts/ContactGrid";
import AddContactModal from "../components/Contacts/AddContactModal";

import { defaultContacts } from "../components/Contacts/ContactData";

const Contacts = () => {
  // Load Contacts

  const [contacts, setContacts] = useState(() => {
    try {
      const saved = localStorage.getItem("contacts");

      if (!saved) return defaultContacts;

      const parsed = JSON.parse(saved);

      return Array.isArray(parsed)
        ? parsed
        : defaultContacts;
    } catch {
      return defaultContacts;
    }
  });

  // Search

  const [search, setSearch] = useState("");

  // Modal

  const [showModal, setShowModal] =
    useState(false);

  // Editing Contact

  const [editingContact, setEditingContact] =
    useState(null);

  // Save

  useEffect(() => {
    localStorage.setItem(
      "contacts",
      JSON.stringify(contacts)
    );
  }, [contacts]);

  // Filter

  const filteredContacts = useMemo(() => {
    return contacts.filter((contact) => {
      const text = search.toLowerCase();

      return (
        contact.name
          .toLowerCase()
          .includes(text) ||
        contact.email
          .toLowerCase()
          .includes(text) ||
        contact.role
          .toLowerCase()
          .includes(text)
      );
    });
  }, [contacts, search]);

  // Add

  const addContact = (contact) => {
    setContacts((prev) => [
      {
        id: Date.now(),
        ...contact,
      },
      ...prev,
    ]);
  };

  // Edit

  const editContact = (contact) => {
    setEditingContact(contact);
    setShowModal(true);
  };

  // Update

  const updateContact = (updatedContact) => {
    setContacts((prev) =>
      prev.map((contact) =>
        contact.id === updatedContact.id
          ? updatedContact
          : contact
      )
    );

    setEditingContact(null);
  };

  // Delete

  const deleteContact = (id) => {
    if (
      window.confirm(
        "Delete this contact?"
      )
    ) {
      setContacts((prev) =>
        prev.filter(
          (contact) => contact.id !== id
        )
      );
    }
  };

  return (
    <Layout>

      <div className="space-y-6">

        <ContactToolbar
          search={search}
          setSearch={setSearch}
          onAdd={() => {
            setEditingContact(null);
            setShowModal(true);
          }}
        />

        <ContactGrid
          contacts={filteredContacts}
          onEdit={editContact}
          onDelete={deleteContact}
        />

      </div>

      <AddContactModal
        open={showModal}
        onClose={() => {
          setShowModal(false);
          setEditingContact(null);
        }}
        onAdd={
          editingContact
            ? updateContact
            : addContact
        }
        contact={editingContact}
      />

    </Layout>
  );
};

export default Contacts;