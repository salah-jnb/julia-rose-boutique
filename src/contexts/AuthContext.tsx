import { createContext, useContext, useState, ReactNode } from "react";

interface User {
  email: string;
  name: string;
  role: "admin" | "user";
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const ACCOUNTS: { email: string; password: string; name: string; role: "admin" | "user" }[] = [
  { email: "admin@julia.ma", password: "Admin2024", name: "Admin", role: "admin" },
  { email: "user@julia.ma", password: "User2024", name: "Sarah", role: "user" },
];

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const login = (email: string, password: string): boolean => {
    const account = ACCOUNTS.find((a) => a.email === email && a.password === password);
    if (account) {
      setUser({ email: account.email, name: account.name, role: account.role });
      return true;
    }
    return false;
  };

  const logout = () => setUser(null);

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be inside AuthProvider");
  return ctx;
}
