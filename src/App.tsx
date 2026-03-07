import { DataGrid } from "./components/DataGrid/DataGrid"
import { columns } from "./eventColumns";
import { useEvents } from "./useEvents";

function App() {
  const {events, loading, error} = useEvents();
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 py-10 px-15 flex flex-col justify-between">
      <div className="space-y-10">
        <header className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">
            Mission Control Dashboard
          </h1>

          <button className="px-4 py-2 bg-yellow-600 rounded-md hover:bg-yellow-500 transition-colors cursor-pointer">
            New Event
          </button>
        </header>

        <section className="bg-slate-900 rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4">
            Timeline
          </h2>

          <div>
            {/* Timeline component will go here */}
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
  )
}

export default App
