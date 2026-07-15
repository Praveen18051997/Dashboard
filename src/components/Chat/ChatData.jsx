const avatar1 = "https://i.pravatar.cc/150?img=12";
const avatar2 = "https://i.pravatar.cc/150?img=32";
const avatar3 = "https://i.pravatar.cc/150?img=15";
const avatar4 = "https://i.pravatar.cc/150?img=48";
const avatar5 = "https://i.pravatar.cc/150?img=25";

export const teams = [
  {
    id: 1,
    name: "#Managers",
    avatar: "M",
    color: "bg-cyan-100 text-cyan-600",
    unread: 0,
    lastMessage:
      "Hello, Mark! I am writing to introduce...",
  },

  {
    id: 2,
    name: "#Designers",
    avatar: "D",
    color: "bg-teal-100 text-teal-600",
    unread: 4,
    lastMessage:
      "Hello. Can you drop the photos...",
  },
];

export const people = [
  {
    id: 101,
    name: "Dustin Williamson",
    avatar: avatar1,
    online: true,
    unread: 0,
    role: "Manager",
    lastMessage:
      "Hello, Mark! I am writing to introduce...",
  },

  {
    id: 102,
    name: "Jane Wilson",
    avatar: avatar2,
    online: true,
    unread: 4,
    role: "Creative Director",
    lastMessage:
      "We use the Arts as a means of touching...",
  },

  {
    id: 103,
    name: "Regina Cooper",
    avatar: avatar3,
    online: true,
    unread: 0,
    role: "Project Manager",
    lastMessage:
      "The Arts play a large role in the expression...",
  },

  {
    id: 104,
    name: "Brandon Pena",
    avatar: avatar4,
    online: false,
    unread: 0,
    role: "Designer",
    lastMessage:
      "The arts allow us to be as specific...",
  },

  {
    id: 105,
    name: "Jacob Hawkins",
    avatar: avatar5,
    online: true,
    unread: 0,
    role: "Developer",
    lastMessage:
      "From dance and music to abstract...",
  },
];

export const messages = {
  102: [
    {
      id: 1,
      sender: "Jane Wilson",
      avatar: avatar2,
      type: "received",
      text: "Hi Cody, any progress on the project? 🙂",
      time: "1 day ago",
    },

    {
      id: 2,
      sender: "You",
      avatar: avatar1,
      type: "sent",
      text:
        'Hi Jane!\nYes. I just finished developing the "Chat" template.',
      time: "1 day ago",
    },

    {
      id: 3,
      sender: "Jane Wilson",
      avatar: avatar2,
      type: "received",
      text:
        "It looks amazing. 🤓\nThe customer will be very satisfied.",
      time: "1 day ago",
    },

    {
      id: 4,
      sender: "You",
      avatar: avatar1,
      type: "sent",
      text:
        "Thank you, glad you liked it.\nSend me Styles Guide.",
      time: "1 day ago",
    },

    {
      id: 5,
      sender: "Jane Wilson",
      avatar: avatar2,
      type: "received",
      text:
        "Brand Styles Guide.pdf",
      file: true,
      size: "487 KB",
      time: "2 min ago",
    },

    {
      id: 6,
      sender: "You",
      avatar: avatar1,
      type: "sent",
      text: "I'll see later.",
      time: "1 min ago",
    },
  ],
};

export const media = [
  "https://picsum.photos/100?1",
  "https://picsum.photos/100?2",
  "https://picsum.photos/100?3",
  "https://picsum.photos/100?4",
  "https://picsum.photos/100?5",
  "https://picsum.photos/100?6",
];

export const sharedFiles = [
  {
    name: "Brand Styles Guide.pdf",
    size: "487 KB",
  },

  {
    name: "Dashboard UI Kit.psd",
    size: "2.5 MB",
  },

  {
    name: "Rocket Admin Dashboard.fig",
    size: "4.2 MB",
  },
];