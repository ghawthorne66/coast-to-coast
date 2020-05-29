const menu = [
  {
    id: 'home', name: 'HOME', url: '/', children: false,
  },
  {
    id: 'services',
    name: 'SERVICES',
    url: '/services',
    children: true,
    childs: [
      { name: 'RESIDENTIAL REFRIGERATION', url: '/services/residential-refrigeration' },
      { name: 'COMMERCIAL REFRIGERATION', url: '/services/commercial-refrigeration' },
      { name: 'MARINE REFRIGERATION', url: '/services/marine-refrigeration' },
      { name: 'ALL SERVICES', url: '/services' },
    ],
  },
  {
    id: 'service-area',
    name: 'SERVICE AREA',
    url: '/service-area',
    children: false,
  },
  {
    id: 'testimonials', name: 'TESTIMONIALS', url: '/testimonials', children: false,
  },
  {
    id: 'news', name: 'NEWS', url: '/news', children: false,
  },
  {
    id: 'contact',
    name: 'CONTACT',
    url: '/contact',
    children: true,
    childs: [
      { name: 'CONTACT', url: '/contact' },
      { name: 'CAREERS', url: '/careers' },
    ],
  },
]

export default menu
