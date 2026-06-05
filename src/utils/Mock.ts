type Booking = {
  id: string;
  name: string;
  email: string;
  start_time: string;
  end_time: string;
};
type MockTable = {
  select: () => Promise<any>;
  insert: (data: any) => Promise<any>;
};

let mockBookings: Booking[] = [
  {
    id: "1",
    name: "Test User",
    email: "test@test.com",
    start_time: new Date().toISOString(),
    end_time: new Date(Date.now() + 60 * 60000).toISOString(),
  },
];
let mockAvailability = [
  {
    id: "1",
    weekday: new Date().getDay(), // today
    start_time: "09:00",
    end_time: "17:00",
    slot_minutes: 60,
  },
];

export const supabase: {
  from: (table: string) => MockTable;
} = {
  from: (table: string) => {
    if (table === "bookings") {
      return {
        select: async () => ({ data: mockBookings, error: null }),

        insert: async (newBooking: any) => {
          const booking = {
            id: Math.random().toString(36).substring(2),
            ...newBooking,
          };

          mockBookings.push(booking);

          return { data: booking, error: null };
        },
      };
    }

    if (table === "availability") {
      return {
        select: async () => ({ data: mockAvailability, error: null }),
        insert: async () => ({ data: null, error: null }),
      };
    }

    return {
      select: async () => ({ data: [], error: null }),
      insert: async () => ({ data: null, error: null }),
    };
  },
};