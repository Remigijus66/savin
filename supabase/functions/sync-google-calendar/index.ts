// // Follow this setup guide to integrate the Deno language server with your editor:
// // https://deno.land/manual/getting_started/setup_your_environment
// // This enables autocomplete, go to definition, etc.

// // Setup type definitions for built-in Supabase Runtime APIs
// import "@supabase/functions-js/edge-runtime.d.ts";
// import { withSupabase } from "@supabase/server";

// console.log("Hello from Functions!");

// // This endpoint uses 'publishable' | 'secret' access, apiKey is required.
// // Use publishable for Client-facing, key-validated endpoints
// // Use secret for Server-to-server, internal calls
// export default {
//   fetch: withSupabase({ auth: ["publishable", "secret"] }, async (req, ctx) => {
//     // Called by another service with a secret key
//     // ctx.supabaseAdmin bypasses RLS — use for privileged operations
//     /*
//     if (ctx.authMode === "secret") {
//       const { user_id } = await req.json();
//       const { data } = await ctx.supabaseAdmin.auth.admin.getUserById(user_id);

//       return Response.json({
//         email: data?.user?.email,
//       });
//     }
//     */

//     const { name } = await req.json();

//     return Response.json({
//       message: `Hello ${name}!`,
//     });
//   }),
// };

// /* To invoke locally:

//   1. Run `supabase start` (see: https://supabase.com/docs/reference/cli/supabase-start)
//   2. Make an HTTP request:

//   curl -i --location --request POST 'http://127.0.0.1:54321/functions/v1/sync-google-calendar' \
//     --header 'apiKey: sb_publishable_ACJWlzQHlZjBrEguHvfOxg_3BJgxAaH' \
//     --data '{"name":"Functions"}'

// */


// v1 tested and failing 


// import { serve } from "https://deno.land/std@0.224.0/http/server.ts";
// import { google } from "npm:googleapis@105";

// serve(async (req) => {
//   try {
//     const {
//       CLIENT_ID,
//       CLIENT_SECRET,
//       REFRESH_TOKEN,
//     } = Deno.env.toObject();

//     const oauth2Client = new google.auth.OAuth2(
//       CLIENT_ID,
//       CLIENT_SECRET
//     );

//     oauth2Client.setCredentials({
//       refresh_token: REFRESH_TOKEN,
//     });

//     const calendar = google.calendar({
//       version: "v3",
//       auth: oauth2Client,
//     });

//     const body = await req.json();

//     const { summary, start_time, end_time } = body;

//     const event = await calendar.events.insert({
//       calendarId: "primary",
//       requestBody: {
//         summary,
//         start: {
//           dateTime: start_time,
//         },
//         end: {
//           dateTime: end_time,
//         },
//       },
//     });

//     return new Response(
//       JSON.stringify(event.data),
//       {
//         headers: { "Content-Type": "application/json" },
//       }
//     );
//   } catch (error) {
//     return new Response(
//       JSON.stringify({
//         error: error.message,
//       }),
//       { status: 500 }
//     );
//   }
// });


// v2 not tested 

// import { serve } from "https://deno.land/std@0.224.0/http/server.ts";

// serve(async (req) => {
//   try {
//     const {
//       CLIENT_ID,
//       CLIENT_SECRET,
//       REFRESH_TOKEN,
//     } = Deno.env.toObject();

//     const body = await req.json();

//     const { summary, start_time, end_time } = body;

//     // 1. Get access token from refresh token
//     const tokenRes = await fetch(
//       "https://oauth2.googleapis.com/token",
//       {
//         method: "POST",
//         headers: {
//           "Content-Type":
//             "application/x-www-form-urlencoded",
//         },
//         body: new URLSearchParams({
//           client_id: CLIENT_ID,
//           client_secret: CLIENT_SECRET,
//           refresh_token: REFRESH_TOKEN,
//           grant_type: "refresh_token",
//         }),
//       }
//     );

//     const tokenData = await tokenRes.json();

//     const access_token =
//       tokenData.access_token;

//     if (!access_token) {
//       throw new Error(
//         "Failed to get access token"
//       );
//     }

//     // 2. Create calendar event
//     const eventRes = await fetch(
//       "https://www.googleapis.com/calendar/v3/calendars/primary/events",
//       {
//         method: "POST",
//         headers: {
//           Authorization:
//             `Bearer ${access_token}`,
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           summary,
//           start: {
//             dateTime: start_time,
//           },
//           end: {
//             dateTime: end_time,
//           },
//         }),
//       }
//     );

//     const eventData =
//       await eventRes.json();

//     return new Response(
//       JSON.stringify(eventData),
//       {
//         headers: {
//           "Content-Type":
//             "application/json",
//         },
//       }
//     );
//   } catch (err) {
//     return new Response(
//       JSON.stringify({
//         error: err.message,
//       }),
//       { status: 500 }
//     );
//   }
// });


// v3
import { serve } from "https://deno.land/std@0.224.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

serve(async (req) => {
  // ✅ HANDLE PREFLIGHT REQUEST
  if (req.method === "OPTIONS") {
    return new Response("ok", {
      headers: corsHeaders,
    });
  }

  try {
    // const body = await req.json();
    const { summary, start_time, end_time } = await req.json();

    const {
  CLIENT_ID,
  CLIENT_SECRET,
  REFRESH_TOKEN,
} = Deno.env.toObject();

const tokenRes = await fetch(
  "https://oauth2.googleapis.com/token",
  {
    method: "POST",
    headers: {
      "Content-Type":
        "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      refresh_token: REFRESH_TOKEN,
      grant_type: "refresh_token",
    }),
  }
);

const tokenData = await tokenRes.json();

if (!tokenData.access_token) {
  return new Response(
    JSON.stringify(tokenData),
    { status: 400 }
  );
}

const accessToken =
  tokenData.access_token;


 const eventRes = await fetch(
  "https://www.googleapis.com/calendar/v3/calendars/primary/events",
  {
    method: "POST",
    headers: {
      Authorization:
        `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      summary,
      start: {
  dateTime: start_time,
},
end: {
  dateTime: end_time,
},
//     start: {
//   dateTime: start_time,
//   timeZone: "Europe/Vilnius",
// },
// end: {
//   dateTime: end_time,
//   timeZone: "Europe/Vilnius",
// },
      // timeZone: "Europe/Vilnius",
    }),
  }
);

const event = await eventRes.json(); 

if (!eventRes.ok) {
  const error = await eventRes.text();

  return new Response(
    JSON.stringify({
      ok: false,
      googleError: error,
    }),
    {
      status: 400,
      headers: corsHeaders,
    }
  );
}

    return new Response(
    //  JSON.stringify({ ok: true, recieved: { summary, start_time, end_time }}),
     JSON.stringify({
    ok: true,
    googleEventId: event.id,
    htmlLink: event.htmlLink,
    summary: event.summary,
  }),
  {
    headers: {
          ...corsHeaders,
      "Content-Type": "application/json",
    },
  }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({
        error: err.message,
      }),
      {
        status: 500,
        headers: corsHeaders,
      }
    );
  }
});