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
          url: "/dashboard/default",
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
          id: "sample-page1",
          title: "JAN TV",
          type: "item",
          url: "/sample-page1",
          classes: "nav-item",
          icon: "feather icon-sidebar",
        },
        {
          id: "sample-page2",
          title: "MPLAD",
          type: "item",
          url: "/sample-page2",
          classes: "nav-item",
          icon: "feather icon-sidebar",
        },
        {
          id: "sample-page3",
          title: "Update",
          type: "item",
          url: "/sample-page3",
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
          id: "sample-page4",
          title: "Calender",
          type: "item",
          url: "/sample-page4",
          classes: "nav-item",
          icon: "feather icon-sidebar",
        },
      ],
    },
    {
      id: "navigation",
      title: "MODERATOR",
      type: "group",
      icon: "icon-navigation",
      children: [
        {
          id: "add-moderator",
          title: "Moderators",
          type: "item",
          url: "/add-moderator",
          classes: "nav-item",
          icon: "feather icon-sidebar",
        },
      ],
    },
    // {
    //     id: 'ui-element',
    //     title: 'TASK',
    //     type: 'group',
    //     icon: 'icon-ui',
    //     children: [
    //         {
    //             id: 'basic',
    //             title: 'JAN TV',
    //             type: 'collapse',
    //             icon: 'feather icon-box',
    //             children: [
    //                 {
    //                     id: 'button',
    //                     title: 'Button',
    //                     type: 'item',
    //                     url: '/basic/button'
    //                 },
    //                 {
    //                     id: 'badges',
    //                     title: 'Badges',
    //                     type: 'item',
    //                     url: '/basic/badges'
    //                 },
    //                 {
    //                     id: 'breadcrumb-pagination',
    //                     title: 'Breadcrumb & Pagination',
    //                     type: 'item',
    //                     url: '/basic/breadcrumb-paging'
    //                 },
    //                 {
    //                     id: 'collapse',
    //                     title: 'Collapse',
    //                     type: 'item',
    //                     url: '/basic/collapse'
    //                 },
    //                 {
    //                     id: 'tabs-pills',
    //                     title: 'Tabs & Pills',
    //                     type: 'item',
    //                     url: '/basic/tabs-pills'
    //                 },
    //                 {
    //                     id: 'typography',
    //                     title: 'Typography',
    //                     type: 'item',
    //                     url: '/basic/typography'
    //                 }
    //             ]
    //         }
    //     ]
    // },
    // {
    //     id: "ui-forms",
    //     title: "TASK",
    //     type: "group",
    //     icon: "icon-group",
    //     children: [
    //         {
    //             id: "form-basic",
    //             title: "JAN TV",
    //             type: "item",
    //             url: "/forms/form-basic",
    //             icon: "feather icon-file-text",
    //         },
    //         {
    //             id: "bootstrap",
    //             title: "MP LAD",
    //             type: "item",
    //             icon: "feather icon-server",
    //             url: "/tables/bootstrap",
    //         },
    //         {
    //             id: "bootstrap",
    //             title: "DATE AVAILABLE",
    //             type: "item",
    //             icon: "feather icon-server",
    //             url: "/tables/bootstrap",
    //         },
    //         {
    //             id: "bootstrap",
    //             title: "SPEECHES",
    //             type: "item",
    //             icon: "feather icon-server",
    //             url: "/tables/bootstrap",
    //         },
    //     ],
    // },
    // {
    //     id: 'chart-maps',
    //     title: 'Chart & Maps',
    //     type: 'group',
    //     icon: 'icon-charts',
    //     children: [
    //         {
    //             id: 'charts',
    //             title: 'Charts',
    //             type: 'item',
    //             icon: 'feather icon-pie-chart',
    //             url: '/charts/nvd3'
    //         },
    //         {
    //             id: 'maps',
    //             title: 'Map',
    //             type: 'item',
    //             icon: 'feather icon-map',
    //             url: '/maps/google-map'
    //         }
    //     ]
    // },
    // {
    //     id: 'pages',
    //     title: 'Pages',
    //     type: 'group',
    //     icon: 'icon-pages',
    //     children: [
    //         {
    //             id: 'auth',
    //             title: 'Authentication',
    //             type: 'collapse',
    //             icon: 'feather icon-lock',
    //             badge: {
    //                 title: 'New',
    //                 type: 'label-danger'
    //             },
    //             children: [
    //                 {
    //                     id: 'signup-1',
    //                     title: 'Sign up',
    //                     type: 'item',
    //                     url: '/auth/signup-1',
    //                     target: true,
    //                     breadcrumbs: false
    //                 },
    //                 {
    //                     id: 'signin-1',
    //                     title: 'Sign in',
    //                     type: 'item',
    //                     url: '/auth/signin-1',
    //                     target: true,
    //                     breadcrumbs: false
    //                 }
    //             ]
    //         },
    //         {
    //             id: 'sample-page',
    //             title: 'Sample Page',
    //             type: 'item',
    //             url: '/sample-page',
    //             classes: 'nav-item',
    //             icon: 'feather icon-sidebar'
    //         },
    //         {
    //             id: 'docs',
    //             title: 'Documentation',
    //             type: 'item',
    //             url: '/docs',
    //             classes: 'nav-item',
    //             icon: 'feather icon-help-circle'
    //         },
    //         {
    //             id: 'menu-level',
    //             title: 'Menu Levels',
    //             type: 'collapse',
    //             icon: 'feather icon-menu',
    //             children: [
    //                 {
    //                     id: 'menu-level-1.1',
    //                     title: 'Menu Level 1.1',
    //                     type: 'item',
    //                     url: '#!',
    //                 },
    //                 {
    //                     id: 'menu-level-1.2',
    //                     title: 'Menu Level 2.2',
    //                     type: 'collapse',
    //                     children: [
    //                         {
    //                             id: 'menu-level-2.1',
    //                             title: 'Menu Level 2.1',
    //                             type: 'item',
    //                             url: '#',
    //                         },
    //                         {
    //                             id: 'menu-level-2.2',
    //                             title: 'Menu Level 2.2',
    //                             type: 'collapse',
    //                             children: [
    //                                 {
    //                                     id: 'menu-level-3.1',
    //                                     title: 'Menu Level 3.1',
    //                                     type: 'item',
    //                                     url: '#',
    //                                 },
    //                                 {
    //                                     id: 'menu-level-3.2',
    //                                     title: 'Menu Level 3.2',
    //                                     type: 'item',
    //                                     url: '#',
    //                                 }
    //                             ]
    //                         }
    //                     ]
    //                 }
    //             ]
    //         },
    //         {
    //             id: 'disabled-menu',
    //             title: 'Disabled Menu',
    //             type: 'item',
    //             url: '#',
    //             classes: 'nav-item disabled',
    //             icon: 'feather icon-power'
    //         },
    //         /*{
    //             id: 'buy-now',
    //             title: 'Buy Now',
    //             type: 'item',
    //             icon: 'feather icon-user',
    //             classes: 'nav-item',
    //             url: 'https://codedthemes.com',
    //             target: true,
    //             external: true,
    //             badge: {
    //                 title: 'v1.0',
    //                 type: 'label-primary'
    //             }
    //         }*/
    //     ]
    // }
  ],
};
