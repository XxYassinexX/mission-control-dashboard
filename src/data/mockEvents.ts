import { type SpaceEvent } from "../types/event"

const titles = [
  "Rocket Launch",
  "Satellite Deployment",
  "Orbital Maneuver",
  "Spacewalk",
  "System Diagnostics",
  "Docking Procedure",
  "Landing Sequence"
]
const missions = [
  "Artemis I",
  "Voyager III",
  "Apollo Next",
  "Lunar Gateway",
  "Mars Pathfinder II",
  "Starlink Batch",
  "Europa Explorer"
]
const locations = [
  "Cape Canaveral",
  "Baikonur Cosmodrome",
  "Kennedy Space Center",
  "Vandenberg",
  "Low Earth Orbit",
  "International Space Station",
  "Moon Orbit"
]

const types: SpaceEvent["type"][] = [
  "launch",
  "spacewalk",
  "deployment",
  "landing",
  "maneuver",
  "system-check"
]

function randomItem<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)]
}

function randomDate() {
  const start = new Date(2025, 0, 1).getTime()
  const end = new Date(2026, 11, 31).getTime()

  const date = new Date(start + Math.random() * (end - start))

  return date.toISOString()
}

export const mockEvents: SpaceEvent[] = Array.from({ length: 200 }, (_, i) => ({
  id: `event-${i + 1}`,
  title: randomItem(titles),
  type: randomItem(types),
  mission: randomItem(missions),
  location: randomItem(locations),
  date: randomDate()
}))