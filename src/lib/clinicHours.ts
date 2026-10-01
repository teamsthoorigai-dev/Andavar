export type ClinicStatus = {
  isOpen: boolean;
  pillLabelEn: string;
  pillLabelTa: string;
  callLabelEn: string;
  callLabelTa: string;
};

export const SESSIONS = [
  { start: 10 * 60, end: 14 * 60 },
  { start: 17 * 60, end: 19 * 60 },
];

function istParts(date: Date) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Kolkata",
    weekday: "short",
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  }).formatToParts(date);

  const weekday = parts.find((p) => p.type === "weekday")?.value ?? "Sun";
  const hour = Number(parts.find((p) => p.type === "hour")?.value ?? "0");
  const minute = Number(parts.find((p) => p.type === "minute")?.value ?? "0");
  return { weekday, minutesOfDay: hour * 60 + minute };
}

function formatClock(minutesOfDay: number, lang: "en" | "ta" = "en") {
  const h24 = Math.floor(minutesOfDay / 60) % 24;
  const m = minutesOfDay % 60;
  
  if (lang === "ta") {
    const suffix = h24 >= 12 && h24 < 16 ? "மதியம்" : h24 >= 16 ? "மாலை" : "காலை";
    const h12 = h24 % 12 === 0 ? 12 : h24 % 12;
    return m === 0 ? `${suffix} ${h12}:00` : `${suffix} ${h12}:${String(m).padStart(2, "0")}`;
  } else {
    const suffix = h24 >= 12 ? "PM" : "AM";
    const h12 = h24 % 12 === 0 ? 12 : h24 % 12;
    return m === 0 ? `${h12}:00 ${suffix}` : `${h12}:${String(m).padStart(2, "0")} ${suffix}`;
  }
}

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const WEEKDAYS_TA: Record<string, string> = {
  Sun: "ஞாயிறு",
  Mon: "திங்கள்",
  Tue: "செவ்வாய்",
  Wed: "புதன்",
  Thu: "வியாழன்",
  Fri: "வெள்ளி",
  Sat: "சனி",
};

export function getClinicStatus(date: Date = new Date()): ClinicStatus {
  const { weekday, minutesOfDay } = istParts(date);
  const isSunday = weekday === "Sun";

  if (!isSunday) {
    const activeSession = SESSIONS.find(
      (s) => minutesOfDay >= s.start && minutesOfDay < s.end
    );
    if (activeSession) {
      return {
        isOpen: true,
        pillLabelEn: `Open now · closes ${formatClock(activeSession.end, "en")}`,
        pillLabelTa: `தற்போது திறந்துள்ளது · ${formatClock(activeSession.end, "ta")}க்கு மூடும்`,
        callLabelEn: "04259 221 000",
        callLabelTa: "04259 221 000",
      };
    }

    const nextSessionToday = SESSIONS.find((s) => minutesOfDay < s.start);
    if (nextSessionToday) {
      return {
        isOpen: false,
        pillLabelEn: `Closed · opens ${formatClock(nextSessionToday.start, "en")}`,
        pillLabelTa: `மூடப்பட்டுள்ளது · ${formatClock(nextSessionToday.start, "ta")}க்கு திறக்கும்`,
        callLabelEn: `Opens ${formatClock(nextSessionToday.start, "en")}`,
        callLabelTa: `${formatClock(nextSessionToday.start, "ta")}க்கு திறக்கும்`,
      };
    }
  }

  const todayIndex = WEEKDAYS.indexOf(weekday);
  let nextOpenDay = WEEKDAYS[(todayIndex + 1) % 7];
  if (nextOpenDay === "Sun") {
    nextOpenDay = "Mon";
  }
  const dayLabelEn = nextOpenDay === weekday ? "" : `${nextOpenDay} `;
  const dayLabelTa = nextOpenDay === weekday ? "" : `${WEEKDAYS_TA[nextOpenDay]} `;

  return {
    isOpen: false,
    pillLabelEn: `Closed · opens ${dayLabelEn}${formatClock(SESSIONS[0].start, "en")}`,
    pillLabelTa: `மூடப்பட்டுள்ளது · ${dayLabelTa}${formatClock(SESSIONS[0].start, "ta")}க்கு திறக்கும்`,
    callLabelEn: `Opens ${dayLabelEn}${formatClock(SESSIONS[0].start, "en")}`,
    callLabelTa: `${dayLabelTa}${formatClock(SESSIONS[0].start, "ta")}க்கு திறக்கும்`,
  };
}
