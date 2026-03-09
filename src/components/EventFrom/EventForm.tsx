import { useState } from 'react';
import type { EventFormProps, EventFormValues } from './EventForm.types'
import { EVENT_TYPES } from './constants';

const defaultValues: EventFormValues = {
  title: "",
  type: "launch",
  date: "",
  location: "",
  mission: ""
}

function EventForm({ onSave, onCancel }: EventFormProps) {

  const [values, setValues] = useState<EventFormValues>(defaultValues)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value } = e.target

    setValues((prev) => ({
        ...prev,
        [name]: value
    }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    onSave(values)
    setValues(defaultValues)
  }

  function handleCancel() {
    setValues(defaultValues)
    onCancel()
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">

      <div>
        <label htmlFor="title" className="mb-1 block text-sm font-medium text-slate-200">
          Title
        </label>
        <input
          id="title"
          name="title"
          type="text"
          value={values.title}
          onChange={handleChange}
          className="w-full rounded-md border border-slate-700 bg-slate-800/70 px-3 py-2 text-sm text-slate-100 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20"
          placeholder="Event title"
        />
      </div>

      <div>
        <label htmlFor="type" className="mb-1 block text-sm font-medium text-slate-200">
          Event Type
        </label>
        <select
          id="type"
          name="type"
          value={values.type}
          onChange={handleChange}
          className="w-full rounded-md border border-slate-700 bg-slate-800/70 px-3 py-2 text-sm text-slate-100 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20"
        >
          {EVENT_TYPES.map((type) => (
            <option key={type} value={type}>
              {type.replace("-", " ")}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="date" className="mb-1 block text-sm font-medium text-slate-200">
          Date
        </label>
        <input
          id="date"
          name="date"
          type="date"
          value={values.date}
          onChange={handleChange}
          className="w-full rounded-md border border-slate-700 bg-slate-800/70 px-3 py-2 text-sm text-slate-100 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20"
        />
      </div>

      <div>
        <label htmlFor="location" className="mb-1 block text-sm font-medium text-slate-200">
          Location
        </label>
        <input
          id="location"
          name="location"
          type="text"
          value={values.location}
          onChange={handleChange}
          className="w-full rounded-md border border-slate-700 bg-slate-800/70 px-3 py-2 text-sm text-slate-100 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20"
          placeholder="Launch site or facility"
        />
      </div>

      <div>
        <label htmlFor="mission" className="mb-1 block text-sm font-medium text-slate-200">
          Mission
        </label>
        <input
          id="mission"
          name="mission"
          type="text"
          value={values.mission}
          onChange={handleChange}
          className="w-full rounded-md border border-slate-700 bg-slate-800/70 px-3 py-2 text-sm text-slate-100 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20"
          placeholder="Mission name"
        />
      </div>

      <div className="flex justify-end gap-2 pt-2">
        <button
          type="button"
          onClick={handleCancel}
          className="rounded-md border border-slate-700 px-4 py-2 text-sm font-medium text-slate-200 transition hover:bg-slate-800 cursor-pointer "
        >
          Cancel
        </button>
        <button
          type="submit"
          className="bg-yellow-600 rounded-md hover:bg-yellow-500 transition-colors cursor-pointer px-4 py-2 text-sm font-semibold text-slate-200"
        >
          Save
        </button>
      </div>

    </form>
  )
}

export default EventForm