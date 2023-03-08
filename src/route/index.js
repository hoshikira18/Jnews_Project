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
  { path: "*", component: Error404 },
  { path: "/detail/:", component: Detail },
];

export default publicRoutes;
