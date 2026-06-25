import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { supabase } from "../lib/supabase"


type Client = {
  id: string;
  first_name: string;
  last_name: string;
  email: string | null;
  phone: string | null;
};


type Note = {
  id: string;
  client_id: string;
  session_id: string | null;
  note_text: string;
  created_at: string;
  updated_at: string | null;

  sessions?: {
    start_time: string;
  } | null;
};


export default function ClientNotes() {

  const { clientId } = useParams();

  const [searchParams] = useSearchParams();



  const sessionId =
    searchParams.get("sessionId");


  const [notes, setNotes] =
    useState<Note[]>([]);

const [client, setClient] =
  useState<Client | null>(null);


  const [text, setText] =
    useState("");


  const [editingId, setEditingId] =
    useState<string | null>(null);

const [addingGeneralNote, setAddingGeneralNote] = useState(false);


  const [loading, setLoading] =
    useState(false);



useEffect(() => {
  if (clientId) {
    loadClient();
    loadNotes();
  }
}, [clientId]);



// const sessionNoteExists =
//   !!sessionId &&
//   notes.some(
//     note => note.session_id === sessionId
//   );

const sessionNoteExists =
  sessionId
    ? notes.some(
        note => note.session_id === sessionId
      )
    : true;

async function loadClient() {

  if (!clientId) return;

  const { data, error } =
    await supabase
      .from("clients")
      .select(`
        id,
        first_name,
        last_name,
        email,
        phone
      `)
      .eq("id", clientId)
      .single();

  if (error) {
    alert(error.message);
    return;
  }

  setClient(data);
}

  async function loadNotes() {

    if (!clientId) return;


    setLoading(true);


const { data, error } = await supabase
  .from("session_notes")
  .select(`
    *,
    sessions (
      start_time
    )
  `)
  .eq("client_id", clientId)
  .order("created_at", {
    ascending: false,
  });


    if (error) {

      alert(error.message);

    } else {

      setNotes(data ?? []);

    }

console.log("Loaded notes:", data);

    setLoading(false);
  }





  async function saveNote() {

    if (!clientId) return;


    if (!text.trim()) {

      alert(
        "Note is empty"
      );

      return;
    }



    if (editingId) {


      const { error } =
        await supabase
          .from("session_notes")
          .update({

            note_text: text,

            updated_at:
              new Date()
                .toISOString()

          })
          .eq(
            "id",
            editingId
          );



      if (error) {

        alert(error.message);

        return;
      }


    } else {


      const { error } =
        await supabase
          .from("session_notes")
          .insert({

            client_id: clientId,

            session_id:
              sessionId ?? null,

            note_text: text

          });



      if (error) {

        alert(error.message);

        return;
      }

    }



    setText("");

    setEditingId(null);


    loadNotes();

  }






  function startEdit(note: Note) {

    setEditingId(note.id);

    setText(note.note_text);

  }






  async function deleteNote(
    id:string
  ) {


    const ok =
      window.confirm(
        "Delete this note?"
      );


    if (!ok) return;



    const { error } =
      await supabase
        .from("session_notes")
        .delete()
        .eq(
          "id",
          id
        );


    if (error) {

      alert(error.message);

      return;
    }


    loadNotes();

  }





  return (

    <div
      style={{
        
        padding:"60px 20px 20px 20px",
        maxWidth:"800px"
      }}
    >

<h2>
  Client Notes
</h2>

{client && (

  <div
    style={{
      background: "#f8f9fa",
      border: "1px solid #ddd",
      borderRadius: "8px",
      padding: "16px",
      marginBottom: "20px"
    }}
  >

    <h3
      style={{
        marginTop: 0
      }}
    >
      {client.first_name} {client.last_name}
    </h3>

    <div>
      📧 {client.email || "-"}
    </div>

    <div>
      📱 {client.phone || "-"}
    </div>

  </div>

)}


{(!sessionNoteExists || editingId !== null) && (
      <div
        style={{
          marginBottom:"25px"
        }}
      >


        <textarea

          value={text}

          onChange={(e)=>
            setText(e.target.value)
          }

          placeholder="Write note..."

          style={{

            width:"100%",

            minHeight:"120px",

            padding:"10px",

            borderRadius:"6px",

            border:"1px solid #ccc"

          }}

        />



        <button

          onClick={saveNote}

          style={{

            marginTop:"10px",

            padding:"8px 14px",

            cursor:"pointer"

          }}

        >

          {editingId
            ? "Save changes"
            : "Add session note"
          }


        </button>



        {editingId && (

          <button

            onClick={()=>{
              setEditingId(null);
              setText("");
            }}

            style={{
              marginLeft:"10px"
            }}

          >
            Cancel
          </button>

        )}



      </div>
)}

<div
  style={{
    marginBottom: "20px"
  }}
>

  {!addingGeneralNote ? (

    <button
      onClick={() => {
        setAddingGeneralNote(true);
        setEditingId(null);
        setText("");
      }}
    >
      Add custom note
    </button>

  ) : (

    <div>

      <h4>
        New client note
      </h4>


      <textarea
        value={text}
        onChange={(e) =>
          setText(e.target.value)
        }
        placeholder="Write general client note..."
        style={{
          width:"100%",
          minHeight:"120px",
          padding:"10px"
        }}
      />


      <button
        onClick={async () => {

          if (!clientId) return;

          if (!text.trim()) return;


          const { error } =
            await supabase
              .from("session_notes")
              .insert({
                client_id: clientId,

                // important:
                session_id: null,

                note_text: text
              });


          if (error) {

            alert(error.message);

            return;
          }


          setText("");

          setAddingGeneralNote(false);

          loadNotes();

        }}
      >
        Save note
      </button>


      <button
        onClick={() => {

          setAddingGeneralNote(false);

          setText("");

        }}
        style={{
          marginLeft:"8px"
        }}
      >
        Cancel
      </button>


    </div>

  )}

</div>


      <h2>
        History
      </h2>




      {loading && (
        <div>
          Loading...
        </div>
      )}





      {notes.length === 0 && !loading && (

        <div
          style={{
            color:"#888"
          }}
        >
          No notes yet
        </div>

      )}






{notes.map(note => (

  <div
    key={note.id}
    style={{
      border: "1px solid #ddd",
      borderRadius: "8px",
      padding: "15px",
      marginBottom: "12px"
    }}
  >

    {/* Session date header */}
    <h4
      style={{
        margin: 0,
        marginBottom: "10px"
      }}
    >
{note.sessions?.start_time && (
  <>
    {"Session: "}
    {new Date(
      note.sessions.start_time
    ).toLocaleDateString()}
  </>
)}
    </h4>


    {/* Note content */}
    <div
      style={{
        whiteSpace: "pre-wrap"
      }}
    >
      {note.note_text}
    </div>


    {/* Created / edited info */}
    <div
      style={{
        marginTop: "10px",
        fontSize: "12px",
        color: "#777"
      }}
    >

      Created:{" "}
      {new Date(
        note.created_at
      ).toLocaleString()}


      {note.updated_at &&
       note.updated_at !== note.created_at && (

        <>
          {" | "}
          Edited:{" "}
          {new Date(
            note.updated_at
          ).toLocaleString()}
        </>

      )}

    </div>



    <div
      style={{
        marginTop:"10px"
      }}
    >

   <button
  onClick={() => {
    startEdit(note);
    console.log("clicked", note.id);
  }}
>
  Edit
</button>


      <button
        onClick={() =>
          deleteNote(note.id)
        }
        style={{
          marginLeft:"8px",
          color:"red"
        }}
      >
        Delete
      </button>

    </div>


  </div>

))}


    </div>

  );
}