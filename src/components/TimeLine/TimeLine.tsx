import React from "react"
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
  function handleKeyDown(e: React.KeyboardEvent<HTMLLIElement>) {
    if (e.key === "ArrowDown" || e.key === "ArrowRight") {
      e.preventDefault()
      const next =
        e.currentTarget.nextElementSibling ??
        e.currentTarget.parentElement?.parentElement?.nextElementSibling?.querySelector("li")

      if (next instanceof HTMLElement) {
        next.focus()
      }
    }

    if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
      e.preventDefault()

      const prev =
        e.currentTarget.previousElementSibling ??
        e.currentTarget.parentElement?.parentElement?.previousElementSibling?.querySelector("li:last-child")

        if (prev instanceof HTMLElement) {
          prev.focus()
        }
    }
  }

  return (
    <section aria-label="Space events timeline">

      {days.map(day => (
        <div key={day}>

          <h3 id={`day-${day}`} className="font-bold text-lg mb-2">
            {day}
          </h3>

          <ul className="space-y-2" aria-labelledby={`day-${day}`}>

            {groupedEvents[day].map(event => (
              <li
                key={event.id}
                tabIndex={0}
                className="p-3 border rounded focus:outline focus:outline-yellow-500"
                onKeyDown={handleKeyDown}
              >
                {event.title}
              </li>
            ))}

          </ul>

        </div>
      ))}

    </section>
  )
}