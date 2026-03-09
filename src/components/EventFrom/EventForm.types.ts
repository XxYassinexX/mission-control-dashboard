import type { SpaceEvent } from "../../types/event"

export type EventFormValues = Omit<SpaceEvent, "id">

export type EventFormProps = {
  onSave: (values: EventFormValues) => void
  onCancel: () => void
}
