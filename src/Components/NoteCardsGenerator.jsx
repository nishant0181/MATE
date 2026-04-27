export default function NoteCardsGenerator() {
  return (
    <>
      <div>
        {dataSource === "local" && (
          <p className="mt-2 text-xs text-zinc-500">
            Using local notes data until Supabase env keys are configured.
          </p>
        )}

        {dataSource === "supabase" && isEmptyRemote && (
          <p className="mt-2 text-xs text-zinc-500">
            Supabase responded with 0 notes. Check your RLS select policy or
            confirm rows exist in the public schema.
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center ">
        {isLoading ? (
          <p className="text-gray-400 text-center col-span-full py-10">
            Loading notes...
          </p>
        ) : filteredData.length === 0 ? (
          <p className="text-gray-400 text-center col-span-full py-10">
            No notes found matching your criteria kindly try different filters
            or search terms.
          </p>
        ) : (
          filteredData.map((note, index) => (
            <CardofNote
              key={note.id}
              index={index}
              title={note.title}
              description={note.description}
              subject={note.subject}
              year={note.year}
              university={note.university}
              pages={note.pages}
              url={note.url}
              semester={note.semester}
              branch={note.branch}
              onViewPDF={handleViewPDF}
            />
          ))
        )}
      </div>
    </>
  );
}
