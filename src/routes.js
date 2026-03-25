// routes.js
// Centralised route list consumed by vite-ssg.
// Every path listed here becomes a pre-rendered HTML file in /dist.

export const routes = [
  { path: '/',             component: () => import('./pages/Home.jsx')        },
  { path: '/evostrings',   component: () => import('./pages/EvoStrings.jsx')  },
  { path: '/trilogy-trio', component: () => import('./pages/TrilogyTrio.jsx') },
  { path: '/violin-solo',  component: () => import('./pages/ViolinSolo.jsx')  },
  { path: '/contact',      component: () => import('./pages/Contact.jsx')     },
]
