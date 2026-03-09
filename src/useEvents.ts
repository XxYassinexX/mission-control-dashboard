import { useEffect, useState } from "react"
import type { SpaceEvent } from "./types/event"
import { fetchMockEvents } from "./data/fetchMockEvents"

export function useEvents() {
  const [events, setEvents] = useState<SpaceEvent[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchMockEvents()
      .then(setEvents)
      .catch(() => setError("Failed to load events"))
      .finally(() => setLoading(false))
  }, [])

  function addEvent(event: SpaceEvent) {
    setEvents(prev => [event, ...prev])
  }


  return { events, loading, error, addEvent }
}