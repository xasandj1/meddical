import { About } from "../pages/about";
import { Home } from "../pages/home";
import { Contact } from '../pages/contact'
import { Doctor } from '../pages/doctors'
import { News } from '../pages/news'
import { Service } from '../pages/service'


export const main_pages = [
  {
    component: <Home />,
  },
  {
    component: <About />,
    path: "about",
  },
  {
    component: <Service />,
    path: "service",
  },
  {
    component: <Doctor />,
    path: "doctor",
  },
  {
    component: <News />,
    path: "news",
  },
  {
    component: <Contact />,
    path: "contact",
  },
];
