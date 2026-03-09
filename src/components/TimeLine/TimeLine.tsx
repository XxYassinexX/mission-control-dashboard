import type { SpaceEvent } from "../../types/event"
import { groupEventsByDay } from "./groupEventsByDay"

type TimeLineProps = {
  events: SpaceEvent[]
  loading?: boolean
  error?: string | null
}

export function TimeLine({ events, loading, error }: TimeLineProps) {

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  if (events.length === 0) {
    return <div>No data available</div>
  }

  const groupedEvents = groupEventsByDay(events)
  const days = Object.keys(groupedEvents)

  return (
    <div className="space-y-6">

      {days.map(day => (
        <div key={day}>

          <h3 className="font-bold text-lg mb-2">
            {day}
          </h3>

          <ul className="space-y-2">

            {groupedEvents[day].map(event => (
              <li
                key={event.id}
                className="p-3 border rounded"
              >
                {event.title}
              </li>
            ))}

          </ul>

        </div>
      ))}

    </div>
  )
}