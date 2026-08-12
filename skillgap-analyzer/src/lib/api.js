const API_BASE = import.meta.env.VITE_API_URL || "";

async function request(path, options = {}) {
  const response = await fetch(`${API_BASE}${path}`, options);
  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(data.error || `Request failed (${response.status})`);
  }

  return data;
}

export function getHealth() {
  return request("/api/health");
}

export function getRoles() {
  return request("/api/roles");
}

export function getSkills() {
  return request("/api/skills");
}

export async function analyzeResume(file, roleId) {
  const formData = new FormData();
  formData.append("resume", file);
  if (roleId) formData.append("roleId", roleId);

  return request("/api/analyze", {
    method: "POST",
    body: formData,
  });
}
