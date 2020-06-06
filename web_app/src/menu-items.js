export default {
  items: [
    {
      id: "navigation",
      title: "HOME",
      type: "group",
      icon: "icon-navigation",
      children: [
        {
          id: "dashboard",
          title: "DASHBOARD",
          type: "item",
          url: "/",
          icon: "feather icon-home",
        },
      ],
    },
    {
      id: "navigation",
      title: "UPLOAD CENTER",
      type: "group",
      icon: "icon-navigation",
      children: [
        {
          id: "jantv",
          title: "JAN TV",
          type: "item",
          url: "/jantv",
          classes: "nav-item",
          icon: "feather icon-sidebar",
        },
        {
          id: "mplad",
          title: "MPLAD",
          type: "item",
          url: "/mplad",
          classes: "nav-item",
          icon: "feather icon-sidebar",
        },
        {
          id: "update",
          title: "UPDATES",
          type: "item",
          url: "/update",
          classes: "nav-item",
          icon: "feather icon-sidebar",
        },
      ],
    },
    {
      id: "navigation",
      title: "INVITES",
      type: "group",
      icon: "icon-navigation",
      children: [
        {
          id: "calendar",
          title: "CALENDAR",
          type: "item",
          url: "/calendar",
          classes: "nav-item",
          icon: "feather icon-sidebar",
        },
      ],
    },
    // {
    //   id: "navigation",
    //   title: "MODERATOR",
    //   type: "group",
    //   icon: "icon-navigation",
    //   children: [
    //     {
    //       id: "add-moderator",
    //       title: "MODERATORS",
    //       type: "item",
    //       url: "/add-moderator",
    //       classes: "nav-item",
    //       icon: "feather icon-sidebar",
    //     },
    //   ],
    // },
  ],
};
