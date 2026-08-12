const STORAGE_KEY = "skillgap:last-analysis";
const HISTORY_KEY = "skillgap:history";

export function saveAnalysis(result) {
  sessionStorage.setItem(STORAGE_KEY, JSON.stringify(result));

  try {
    const history = getHistory();
    const entry = {
      id: `${Date.now()}`,
      analyzedAt: result.meta?.analyzedAt || new Date().toISOString(),
      fileName: result.meta?.fileName || "Resume",
      roleName: result.role?.name || "General",
      matchScore: result.summary?.matchScore ?? 0,
      level: result.summary?.level || "",
    };
    const next = [entry, ...history.filter((h) => h.fileName !== entry.fileName || h.roleName !== entry.roleName)].slice(0, 8);
    localStorage.setItem(HISTORY_KEY, JSON.stringify(next));
  } catch {
    // ignore storage quota / private mode
  }
}

export function loadAnalysis() {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function clearAnalysis() {
  sessionStorage.removeItem(STORAGE_KEY);
}

export function getHistory() {
  try {
    const raw = localStorage.getItem(HISTORY_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}
