import Home from "../pages/Home";
import Culture from "../pages/Culture";
import Detail from "../pages/Detail";
import SearchResult from "../components/SearchResult";
const publicRoutes = [
  { path: "/", component: Home },
  { path: "/culture", component: Culture },
  { path: "/detail/:slug", component: Detail },
  { path: "/search/:slug", component: SearchResult },
];

export default publicRoutes;
