import Home from "../pages/Home";
import Culture from "../pages/Culture";
import Detail from "../pages/Detail";
import SearchResult from "../components/SearchResult";
import Error404 from "../pages/Error404";
const publicRoutes = [
  { path: "/", component: Home },
  { path: "/culture", component: Culture },
  { path: "/detail/:slug", component: Detail },
  { path: "/search/:slug", component: SearchResult },
  { path: "/error", component: Error404 },
];

export default publicRoutes;
