import type { SpaceEvent } from "../../types/event"

export function groupEventsByDay(events: SpaceEvent[]) {
  return events.reduce<Record<string, SpaceEvent[]>>((acc, event) => {
    const day = new Date(event.date).toISOString().split("T")[0]

    if (!acc[day]) {
      acc[day] = []
    }

    acc[day].push(event)

    return acc
  }, {})
}