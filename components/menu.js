export const menuItems = [
  {
    id: 1,
    label: 'menuitems.navigation.text',
    isTitle: true,
  },
  {
    id: 2,
    label: 'Kasir Pintar',
    icon: 'fe-grid',
    isMenuCollapsed: false,
    subItems: [
      {
        id: 3,
        label: 'Exercise 1',
        link: '/dashboard/by-id',
      },
      {
        id: 4,
        label: 'Exercise 2',
        link: '/dashboard/by-kota-id',
      },
    ],
  },
]
