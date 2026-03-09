import { useState } from "react";
import { DataGrid } from "./components/DataGrid/DataGrid"
import { TimeLine } from "./components/TimeLine/TimeLine";
import { columns } from "./eventColumns";
import { useEvents } from "./useEvents";
import EventForm from "./components/EventFrom/EventForm";
import type { EventFormValues } from "./components/EventFrom/EventForm.types";

function App() {
  const [isFormOpen, setIsFormOpen] = useState(false)
  const {events, loading, error, addEvent} = useEvents();
  const timelineEvents = events.slice(0, 30)
  const handleNewEventClick = () => {
    setIsFormOpen(true)
  }
  function handleCancel() {
    setIsFormOpen(false)
  }

  function handleSave(values: EventFormValues) {
    const newEvent = {  
      ...values,
      id: Date.now().toString(),
    }
    addEvent(newEvent)
    setIsFormOpen(false)
  }
  return (
    <>
      <div className="min-h-screen bg-slate-950 text-slate-200 py-10 px-15 flex flex-col justify-between">
        <div className="space-y-10">
          <header className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">
              Mission Control Dashboard
            </h1>

            <button className="px-4 py-2 bg-yellow-600 rounded-md hover:bg-yellow-500 transition-colors cursor-pointer" onClick={handleNewEventClick}>
              New Event
            </button>
          </header>

          <section className="bg-slate-900 rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-4">
              Timeline
            </h2>

            <div>
              <TimeLine events={timelineEvents} loading={loading} error={error} />
            </div>
          </section>

          <section className="bg-slate-900 rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-4">
              Events
            </h2>

            <div>
              <DataGrid 
                data={events}
                columns={columns}
                loading={loading}
                error={error}
              />
            </div>
          </section>
        </div>
        <footer className="mt-12 text-center text-sm text-slate-400">
          Mission Control Dashboard — React Technical Task
        </footer>
      </div>
    
      {isFormOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50" onClick={handleCancel}>
          <div className="bg-slate-900 p-6 rounded-lg w-full max-w-md" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-lg font-semibold mb-4 text-slate-200">
              New Event
            </h2>

            <EventForm
              onSave={handleSave}
              onCancel={handleCancel}
            />
          </div>
       </div>
      )}
    </>
  )
}

export default App
