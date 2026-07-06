import { ViteReactSSG } from 'vite-react-ssg'
import { routes } from './App.jsx'
import './styles/globals.css'

export const createRoot = ViteReactSSG({ routes })
