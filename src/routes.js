// routes.js
// Centralised route list consumed by vite-ssg.
// Every path listed here becomes a pre-rendered HTML file in /dist.

export const routes = [
  { path: '/',                    component: () => import('./pages/Home.jsx')                    },
  { path: '/evostrings',          component: () => import('./pages/EvoStrings.jsx')              },
  { path: '/trilogy-trio',        component: () => import('./pages/TrilogyTrio.jsx')             },
  { path: '/violin-solo',         component: () => import('./pages/ViolinSolo.jsx')              },
  { path: '/contact',             component: () => import('./pages/Contact.jsx')                 },
  { path: '/locations/ravello',   component: () => import('./pages/locations/Ravello.jsx')       },
  { path: '/locations/positano',  component: () => import('./pages/locations/Positano.jsx')      },
  { path: '/locations/sorrento',  component: () => import('./pages/locations/Sorrento.jsx')      },
]
