import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase"

type Client = {
  id: string;
  first_name: string;
  last_name: string;
  email: string | null;
  phone: string | null;
};
export default function ClientsPage() {

const [clients, setClients] =
  useState<Client[]>([]);

const [selectedClient, setSelectedClient] =
  useState<Client | null>(null);

const navigate = useNavigate();


useEffect(() => {
  loadClients();
}, []);


async function loadClients() {

  const { data, error } =
    await supabase
      .from("clients")
      .select("*")
      .order("last_name");

  if (error) {
    alert(error.message);
    return;
  }

  setClients(data ?? []);

  if (data?.length && !selectedClient) {
    setSelectedClient(data[0]);
  }
}

async function saveClient() {

  if (!selectedClient) return;

  const { error } =
    await supabase
      .from("clients")
      .update({
        first_name:
          selectedClient.first_name,
        last_name:
          selectedClient.last_name,
        email:
          selectedClient.email,
        phone:
          selectedClient.phone
      })
      .eq("id", selectedClient.id);

  if (error) {
    alert(error.message);
    return;
  }

  alert("Saved");
}

async function deleteClient() {

  if (!selectedClient) return;

  const ok = window.confirm(
    "Delete client?"
  );

  if (!ok) return;

  const { error } =
    await supabase
      .from("clients")
      .delete()
      .eq("id", selectedClient.id);

  if (error) {
    alert(error.message);
    return;
  }

  setSelectedClient(null);

  loadClients();
}
return (
<div
  style={{
    display: "flex",
    gap: "20px",
    padding: "20px"
  }}
>

  {/* LEFT */}

  <div
    style={{
      width: "300px",
      borderRight: "1px solid #ddd"
    }}
  >

    <h2>Clients</h2>

    {clients.map(client => (

      <div
        key={client.id}
        onClick={() =>
          setSelectedClient(client)
        }
        style={{
          padding: "10px",
          cursor: "pointer",
          background:
            selectedClient?.id === client.id
              ? "#e6f4ff"
              : undefined
        }}
      >

        <div>
          {client.first_name}
          {" "}
          {client.last_name}
        </div>

        <small>
          {client.email}
        </small>

      </div>

    ))}

  </div>


  {/* RIGHT */}

  <div
    style={{
      flex: 1
    }}
  >

    {selectedClient && (

      <>

        <h2>
          Client Details
        </h2>

        <input
          value={
            selectedClient.first_name
          }
          onChange={e =>
            setSelectedClient({
              ...selectedClient,
              first_name:
                e.target.value
            })
          }
        />

        <br />
        <br />

        <input
          value={
            selectedClient.last_name
          }
          onChange={e =>
            setSelectedClient({
              ...selectedClient,
              last_name:
                e.target.value
            })
          }
        />

        <br />
        <br />

        <input
          value={
            selectedClient.email ?? ""
          }
          onChange={e =>
            setSelectedClient({
              ...selectedClient,
              email:
                e.target.value
            })
          }
        />

        <br />
        <br />

        <input
          value={
            selectedClient.phone ?? ""
          }
          onChange={e =>
            setSelectedClient({
              ...selectedClient,
              phone:
                e.target.value
            })
          }
        />

        <br />
        <br />

        <button
          onClick={saveClient}
        >
          Save
        </button>

        <button
          style={{
            marginLeft: "10px"
          }}
          onClick={() =>
            navigate(
              `/clients/${selectedClient.id}/notes`
            )
          }
        >
          Notes
        </button>

        <button
          style={{
            marginLeft: "10px",
            color: "red"
          }}
          onClick={deleteClient}
        >
          Delete
        </button>

      </>

    )}

  </div>

</div>

)

}
