import { mockEvents } from "./mockEvents"
import type { SpaceEvent } from "../types/event"

export function fetchMockEvents(): Promise<SpaceEvent[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockEvents)

      // we could also test error state:
      // reject(new Error("Failed to load events"))
    }, 1000)
  })
}