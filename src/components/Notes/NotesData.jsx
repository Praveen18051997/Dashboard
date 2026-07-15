const today = new Date().toLocaleDateString("en-GB", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

export const defaultNotes = [
  {
    id: 1,
    title: "The title of a note",
    description:
      "Lorem ipsum dolor sit amet, ullamcous cididunt consectetur adipisicing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels aliqua. Ut enim ad nesi utminim veniam, quis nostrud eiusmod exercitation ullamco labori is amco commodo consequat.",
    date: today,
    pinned: true,
    color: "yellow",
  },

  {
    id: 2,
    title: "Meeting Notes",
    description:
      "Discuss project timeline, assign tasks, review UI progress and prepare next sprint planning for the development team.",
    date: today,
    pinned: false,
    color: "blue",
  },

  {
    id: 3,
    title: "Shopping List",
    description:
      "Laptop stand, mechanical keyboard, USB hub, notebook, coffee, and stationery items for office setup.",
    date: today,
    pinned: true,
    color: "green",
  },

  {
    id: 4,
    title: "Ideas",
    description:
      "Create a modern dashboard with reusable React components and smooth animations using Tailwind CSS.",
    date: today,
    pinned: false,
    color: "purple",
  },

  {
    id: 5,
    title: "Reminder",
    description:
      "Complete dashboard pages before deployment and verify responsiveness on desktop and tablet devices.",
    date: today,
    pinned: false,
    color: "red",
  },

  {
    id: 6,
    title: "Daily Goals",
    description:
      "Finish Notes module, test CRUD functionality, update GitHub repository and deploy latest version.",
    date: today,
    pinned: true,
    color: "orange",
  },

  {
    id: 7,
    title: "Client Feedback",
    description:
      "Improve spacing, add hover animations, refine typography and match the Figma design more closely.",
    date: today,
    pinned: false,
    color: "cyan",
  },

  {
    id: 8,
    title: "Quick Note",
    description:
      "Remember to backup the project before making major changes to the application.",
    date: today,
    pinned: false,
    color: "pink",
  },

  {
    id: 9,
    title: "Travel Plan",
    description:
      "Book train tickets, reserve hotel, prepare documents and create itinerary for the upcoming trip.",
    date: today,
    pinned: true,
    color: "indigo",
  },
];