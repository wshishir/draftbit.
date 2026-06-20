export type AuthUser = {
  id: number;
  username: string;
  email: string;
};

export function saveAuth(token: string, user: AuthUser) {
  localStorage.setItem("token", token);
  localStorage.setItem("user", JSON.stringify(user));
}

export function getToken() {
  return localStorage.getItem("token");
}

export function getUser() : AuthUser | null {
  const user = localStorage.getItem("user");

  if (!user) return null;
  return JSON.parse(user) as AuthUser;
}

export function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
}
