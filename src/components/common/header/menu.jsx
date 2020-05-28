export const menu = [
  {
    id: 'home', name: 'Home', url: '/', children: false,
  },
  {
    id: 'services',
    name: 'Services',
    url: '/services',
    children: true,
    childs: [
      { name: 'Residential Refrigeration', url: '/services/residential-refrigeration' },
      { name: 'Commercial Refrigeration', url: '/services/commercial-refrigeration' },
      { name: 'Marine Refrigeration', url: '/services/marine-refrigeration' },
      { name: 'All Services', url: '/services' },
    ],
  },
  {
    id: 'service-area',
    name: 'Service Area',
    url: '/service-area',
    children: false,
  },
  {
    id: 'testimonials', name: 'Testimonials', url: '/testimonials', children: false,
  },
  {
    id: 'news', name: 'News', url: '/news', children: false,
  },
  {
    id: 'contact',
    name: 'Contact',
    url: '/contact',
    children: true,
    childs: [
      { name: 'Contact', url: '/contact' },
      { name: 'Careers', url: '/careers' },
    ],
  },
]

export default menu
