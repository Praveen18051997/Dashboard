import ContactCard from "./ContactCard";

const ContactGrid = ({
  contacts = [],
  onEdit,
  onDelete,
}) => {
  if (!contacts.length) {
    return (
      <div className="flex h-96 items-center justify-center rounded-3xl bg-white shadow-sm">

        <div className="text-center">

          <h2 className="text-2xl font-bold text-gray-700">
            No Contacts Found
          </h2>

          <p className="mt-2 text-gray-400">
            Try another search or add a new contact.
          </p>

        </div>

      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

      {contacts.map((contact) => (
        <ContactCard
          key={contact.id}
          contact={contact}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}

    </div>
  );
};

export default ContactGrid;