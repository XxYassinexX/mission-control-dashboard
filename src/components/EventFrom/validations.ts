import type { EventFormError, EventFormValues } from "./EventForm.types"

export function validate(values: EventFormValues) {
  const errors: EventFormError = {}

  if (!values.title.trim()) {
    errors.title = "Title is required"
  }

  if (!values.date) {
    errors.date = "Date is required"
  } else if (isNaN(Date.parse(values.date))) {
    errors.date = "Invalid date"
  }

  return errors
}