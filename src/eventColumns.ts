import type { Column } from "./components/DataGrid/DataGrid.types";
import type { SpaceEvent } from "./types/event";

export const columns: Column<SpaceEvent>[] = [
  {
    id: "title",
    label: "Title",
    accessor: "title"
  },
  {
    id: "mission",
    label: "Mission",
    accessor: "mission"
  },
  {
    id: "date",
    label: "Date",
    accessor: "date"
  },
  {
    id: "type",
    label: "Type",
    accessor: "type"
  }
]