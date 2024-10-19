import { AppPage } from "@/shared/core/Page";
import { LIST_MOVIES_PATH } from "./Path";
import ListMoviesView from "../components/ListMoviesView/ListMoviesView";

export const ListMoviesPage = new AppPage({
  element: <ListMoviesView />,
  path: LIST_MOVIES_PATH,
});
