import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

type AvailabilitySlot = {
  id: string;
  start_time: string;
  end_time: string;
};

type Client = {
  id: string;
  // name: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
};


type Props = {
  selectedDate: Date;
  onClose: () => void;
  onSaved: () => void;
};

export default function ScheduleSessionModal({
  selectedDate,
  onClose,
  onSaved,
}: Props) {
  const [slots, setSlots] = useState<
    AvailabilitySlot[]
  >([]);

  const [clients, setClients] =
    useState<Client[]>([]);

  const [search, setSearch] =
    useState("");

  const [selectedSlotId, setSelectedSlotId] =
    useState("");

  const [selectedClientId, setSelectedClientId] =
    useState("");

  const [newName, setNewName] =
    useState("");

 const [newLastName, setNewLastName] =
    useState("");

  const [newEmail, setNewEmail] =
    useState("");

  const [newPhone, setNewPhone] =
    useState("");

  useEffect(() => {
    loadSlots();
  }, []);

  useEffect(() => {
    searchClients();
  }, [search]);

async function loadSlots() {
  const dateString = selectedDate.toDateString();

  const { data: availabilityData } =
    await supabase
      .from("availability")
      .select("*")
      .order("start_time");

  const { data: sessionsData } =
    await supabase
      .from("sessions")
      .select("availability_id");

  const bookedAvailabilityIds = new Set(
    (sessionsData || []).map(
      (s) => s.availability_id
    )
  );

  const filtered =
    availabilityData?.filter(
      (slot) =>
        new Date(
          slot.start_time
        ).toDateString() === dateString &&
        !bookedAvailabilityIds.has(
          slot.id
        )
    ) || [];

  setSlots(filtered);
}

async function searchClients() {

  let query = supabase
    .from("clients")
    .select("*")
    .order("first_name");

  console.log(
    "Searching clients:",
    search
  );

  if (search.trim()) {
    query = query.or(
      `first_name.ilike.%${search}%,last_name.ilike.%${search}%`
    );
  }

  const { data, error } =
    await query;

  if (error) {
    console.error(
      "Client search error:",
      error
    );
    return;
  }
  setClients(data || []);
}

  async function createSession() {
    if (!selectedSlotId) {
      alert("Select a slot");
      return;
    }

    let clientId = selectedClientId;

    if (!clientId) {
      if (!newName.trim()) {
        alert("Client name required");
        return;
      }

      const { data: existing } =
  await supabase
    .from("sessions")
    .select("id")
    .eq(
      "availability_id",
      selectedSlotId
    )
    .maybeSingle();

if (existing) {
  alert(
    "This slot already has a session."
  );
  return;
}

      const {
        data: client,
        error,
      } = await supabase
        .from("clients")
        .insert({
          first_name: newName,
          last_name: newLastName,   
          email: newEmail,
          phone: newPhone,
        })
        .select()
        .single();

      if (error) {
        alert(error.message);
        return;
      }

      clientId = client.id;
    }

    const slot = slots.find(
      (s) => s.id === selectedSlotId
    );

    if (!slot) {
      return;
    }

    const { error } = await supabase
      .from("sessions")
      .insert({
        client_id: clientId,
        availability_id: slot.id,
        start_time: slot.start_time,
        end_time: slot.end_time,
        status: "scheduled",
      });

    if (error) {
      alert(error.message);
      return;
    }

    alert("Session scheduled");

    onSaved();
    onClose();
  }

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background:
          "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          width: "700px",
          maxHeight: "90vh",
          overflow: "auto",
          background: "white",
          padding: "20px",
          borderRadius: "8px",
        }}
      >
        <h2>Schedule Session</h2>

        <h3>Select Slot</h3>

        <select
          value={selectedSlotId}
          onChange={(e) =>
            setSelectedSlotId(
              e.target.value
            )
          }
          style={{
            width: "100%",
            padding: "8px",
          }}
        >
          <option value="">
            Select slot
          </option>

          {slots.map((slot) => (
            <option
              key={slot.id}
              value={slot.id}
            >
              {new Date(
                slot.start_time
              ).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </option>
          ))}
        </select>

        <hr
          style={{ margin: "20px 0" }}
        />

        <h3>Existing Client</h3>

        <input
          placeholder="Search client..."
          value={search}
          onChange={(e) =>
            setSearch(
              e.target.value
            )
          }
          style={{
            width: "100%",
            padding: "8px",
          }}
        />

        <div
          style={{
            maxHeight: "200px",
            overflow: "auto",
            border:
              "1px solid #ddd",
            marginTop: "10px",
          }}
        >
          {clients.map((client) => (
            <div
              key={client.id}
              onClick={() =>
                setSelectedClientId(
                  client.id
                )
              }
              style={{
                padding: "10px",
                cursor: "pointer",
                background:
                  selectedClientId ===
                  client.id
                    ? "#e3f2fd"
                    : "white",
              }}
            >
              <strong>
                {client.first_name} {client.last_name}
           
              </strong>

              <div>
                {client.email}
              </div>
            </div>
          ))}
        </div>

        <hr
          style={{ margin: "20px 0" }}
        />

        <h3>
          Or Create New Client
        </h3>

        <input
          placeholder="Name"
          value={newName}
          onChange={(e) =>
            setNewName(
              e.target.value
            )
          }
          style={{
            width: "100%",
            marginBottom: "10px",
            padding: "8px",
          }}
        />

        <input
          placeholder="Last Name"
          value={newLastName}
          onChange={(e) =>
            setNewLastName(
              e.target.value
            )
          }
          style={{
            width: "100%",
            marginBottom: "10px",
            padding: "8px",
          }}
        />

        <input
          placeholder="Email"
          value={newEmail}
          onChange={(e) =>
            setNewEmail(
              e.target.value
            )
          }
          style={{
            width: "100%",
            marginBottom: "10px",
            padding: "8px",
          }}
        />

        <input
          placeholder="Phone"
          value={newPhone}
          onChange={(e) =>
            setNewPhone(
              e.target.value
            )
          }
          style={{
            width: "100%",
            marginBottom: "10px",
            padding: "8px",
          }}
        />

        <div
          style={{
            display: "flex",
            justifyContent:
              "flex-end",
            gap: "10px",
            marginTop: "20px",
          }}
        >
          <button
            onClick={onClose}
          >
            Cancel
          </button>

          <button
            onClick={createSession}
          >
            Schedule Session
          </button>
        </div>
      </div>
    </div>
  );
}