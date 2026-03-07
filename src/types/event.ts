export type SpaceEvent = {
  id: string
  title: string
  type: "launch" | "spacewalk" | "deployment" | "landing" | "maneuver" | "system-check"
  date: string
  location: string
  mission: string
}