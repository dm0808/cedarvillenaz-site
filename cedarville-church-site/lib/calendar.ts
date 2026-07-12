export const GOOGLE_CALENDAR_ID = "info@cedarvillenaz.org";
export const GOOGLE_CALENDAR_API_KEY =
  process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY ?? "AIzaSyA-g_YPlMZGYjSWQIxzWj6EsDR8YUNMfeI";
export const GOOGLE_CALENDAR_TIME_ZONE = "America/New_York";

export type CalendarCategory =
  | "Worship"
  | "Discipleship"
  | "Study"
  | "Prayer"
  | "Outreach"
  | "Fellowship"
  | "General";

export type CalendarEvent = {
  id: string;
  title: string;
  start: string;
  end: string | null;
  isAllDay: boolean;
  location?: string;
  description?: string;
  category: CalendarCategory;
};

type GoogleCalendarItem = {
  id: string;
  summary?: string;
  description?: string;
  location?: string;
  start?: {
    date?: string;
    dateTime?: string;
  };
  end?: {
    date?: string;
    dateTime?: string;
  };
};

type GoogleCalendarResponse = {
  items?: GoogleCalendarItem[];
};

export const calendarCategoryStyles: Record<
  CalendarCategory,
  {
    screen: string;
    print: string;
    legend: string;
  }
> = {
  Worship: {
    screen: "border border-secondary/20 bg-secondary/15 text-secondary",
    print: "border-l-4 border-l-[#476b45] bg-[#eef4ed] text-[#274326]",
    legend: "bg-secondary/15 text-secondary",
  },
  Discipleship: {
    screen: "border border-accent/30 bg-accent/20 text-accent-foreground",
    print: "border-l-4 border-l-[#d9a441] bg-[#fbf3df] text-[#6f5317]",
    legend: "bg-accent/20 text-accent-foreground",
  },
  Study: {
    screen: "border border-primary/20 bg-primary/10 text-primary dark:text-white",
    print: "border-l-4 border-l-[#0e2433] bg-[#e9eef2] text-[#0e2433]",
    legend: "bg-primary/10 text-primary dark:text-white",
  },
  Prayer: {
    screen: "border border-[#74848f]/30 bg-[#74848f]/15 text-[#50606b] dark:text-[#c8d3dd]",
    print: "border-l-4 border-l-[#74848f] bg-[#eef2f4] text-[#42515a]",
    legend: "bg-[#74848f]/15 text-[#50606b] dark:text-[#c8d3dd]",
  },
  Outreach: {
    screen: "border border-[#70956a]/25 bg-[#70956a]/15 text-[#355230] dark:text-[#dce8da]",
    print: "border-l-4 border-l-[#70956a] bg-[#edf4ec] text-[#355230]",
    legend: "bg-[#70956a]/15 text-[#355230] dark:text-[#dce8da]",
  },
  Fellowship: {
    screen: "border border-[#b48a3e]/25 bg-[#d9a441]/15 text-[#7b5f27] dark:text-[#f1dfb7]",
    print: "border-l-4 border-l-[#b48a3e] bg-[#faf1df] text-[#6f5317]",
    legend: "bg-[#d9a441]/15 text-[#7b5f27] dark:text-[#f1dfb7]",
  },
  General: {
    screen: "border border-border/70 bg-card text-foreground",
    print: "border-l-4 border-l-[#74848f] bg-[#f4f7f8] text-[#33414a]",
    legend: "bg-card text-foreground",
  },
};

export function getMonthRange(date: Date) {
  const monthStart = new Date(date.getFullYear(), date.getMonth(), 1);
  const monthEnd = new Date(date.getFullYear(), date.getMonth() + 1, 1);
  return { monthStart, monthEnd };
}

export function getWeekRange(date: Date) {
  const weekStart = new Date(date);
  weekStart.setHours(0, 0, 0, 0);
  weekStart.setDate(date.getDate() - date.getDay());

  const weekEnd = new Date(weekStart);
  weekEnd.setDate(weekStart.getDate() + 7);

  return { weekStart, weekEnd };
}

export function getMonthGrid(date: Date) {
  const firstWeekday = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  const totalCells = Math.ceil((firstWeekday + daysInMonth) / 7) * 7;

  return { firstWeekday, daysInMonth, totalCells };
}

export function formatMonthLabel(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    year: "numeric",
  }).format(date);
}

export function formatDayLabel(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

export function formatDateKey(date: Date) {
  return [date.getFullYear(), `${date.getMonth() + 1}`.padStart(2, "0"), `${date.getDate()}`.padStart(2, "0")].join("-");
}

export function formatMonthParam(date: Date) {
  return [date.getFullYear(), `${date.getMonth() + 1}`.padStart(2, "0")].join("-");
}

export function parseMonthParam(value: string | null) {
  if (!value) {
    return null;
  }

  const [yearText, monthText] = value.split("-");
  const year = Number(yearText);
  const month = Number(monthText);

  if (!Number.isFinite(year) || !Number.isFinite(month) || month < 1 || month > 12) {
    return null;
  }

  return new Date(year, month - 1, 1);
}

export function parseDateParam(value: string | null) {
  if (!value) {
    return null;
  }

  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
}

export function formatEventTime(event: CalendarEvent) {
  if (event.isAllDay) {
    return "All day";
  }

  return new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
  }).format(new Date(event.start));
}

export function groupEventsByDay(events: CalendarEvent[]) {
  return events.reduce<Map<string, CalendarEvent[]>>((map, event) => {
    const key = formatDateKey(new Date(event.start));
    const existing = map.get(key) ?? [];
    map.set(key, [...existing, event]);
    return map;
  }, new Map<string, CalendarEvent[]>());
}

export async function fetchGoogleCalendarEvents(start: Date, end: Date) {
  if (!GOOGLE_CALENDAR_API_KEY) {
    throw new Error("Google Calendar API key is not configured.");
  }

  const params = new URLSearchParams({
    key: GOOGLE_CALENDAR_API_KEY,
    singleEvents: "true",
    orderBy: "startTime",
    timeMin: start.toISOString(),
    timeMax: end.toISOString(),
    maxResults: "250",
  });

  const response = await fetch(
    `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(GOOGLE_CALENDAR_ID)}/events?${params.toString()}`,
  );

  if (!response.ok) {
    throw new Error(`Google Calendar request failed with status ${response.status}.`);
  }

  const data = (await response.json()) as GoogleCalendarResponse;

  return (data.items ?? [])
    .filter((item) => item.start?.date || item.start?.dateTime)
    .map<CalendarEvent>((item) => {
      const isAllDay = Boolean(item.start?.date && !item.start?.dateTime);
      const start = item.start?.dateTime ?? item.start?.date ?? "";
      const end = item.end?.dateTime ?? item.end?.date ?? null;
      const title = item.summary?.trim() || "Church Event";
      const description = item.description?.trim();

      return {
        id: item.id,
        title,
        start,
        end,
        isAllDay,
        location: item.location?.trim(),
        description,
        category: categorizeEvent(title, description),
      };
    });
}

function categorizeEvent(title: string, description?: string): CalendarCategory {
  const haystack = `${title} ${description ?? ""}`.toLowerCase();

  if (haystack.includes("worship") || haystack.includes("service") || haystack.includes("sermon")) {
    return "Worship";
  }

  if (haystack.includes("bible") || haystack.includes("study") || haystack.includes("class")) {
    return "Study";
  }

  if (
    haystack.includes("discipleship") ||
    haystack.includes("kids") ||
    haystack.includes("children") ||
    haystack.includes("youth") ||
    haystack.includes("school")
  ) {
    return "Discipleship";
  }

  if (haystack.includes("prayer")) {
    return "Prayer";
  }

  if (
    haystack.includes("outreach") ||
    haystack.includes("mission") ||
    haystack.includes("serve") ||
    haystack.includes("community")
  ) {
    return "Outreach";
  }

  if (
    haystack.includes("picnic") ||
    haystack.includes("fellowship") ||
    haystack.includes("dinner") ||
    haystack.includes("lunch") ||
    haystack.includes("party") ||
    haystack.includes("vbs")
  ) {
    return "Fellowship";
  }

  return "General";
}
