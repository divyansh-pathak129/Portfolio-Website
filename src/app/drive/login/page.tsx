"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { HardDrive, Eye, EyeOff, ArrowLeft, Loader2 } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function DriveLoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("drive-token");
    if (token) {
      router.replace("/drive");
    } else {
      setChecking(false);
    }
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username || !password) {
      setError("Please fill in all fields.");
      return;
    }
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/drive/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      if (res.ok) {
        const { token } = await res.json();
        localStorage.setItem("drive-token", token);
        router.replace("/drive");
      } else {
        setError("Incorrect username or password.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (checking) {
    return (
      <div className="fixed inset-0 flex items-center justify-center">
        <Loader2 className="size-5 animate-spin text-muted-foreground" />
      </div>
    );
  }

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center p-4">
      {/* Back link */}
      <Link
        href="/"
        className="absolute top-6 left-6 flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowLeft className="size-4" />
        Back to portfolio
      </Link>

      {/* Card */}
      <div className="w-full max-w-sm space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        {/* Icon + Title */}
        <div className="flex flex-col items-center space-y-3 text-center">
          <div className="flex size-14 items-center justify-center rounded-2xl border bg-card shadow-sm">
            <HardDrive className="size-6" />
          </div>
          <div>
            <h1 className="text-xl font-semibold tracking-tight">Divyansh&apos;s Drive</h1>
            <p className="text-sm text-muted-foreground mt-0.5">
              Sign in to manage your files
            </p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-3">
          {/* Username */}
          <div className="space-y-1.5">
            <label htmlFor="username" className="text-sm font-medium">
              Username
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
              autoComplete="username"
              autoFocus
              className={cn(
                "w-full rounded-lg border bg-card px-3.5 py-2.5 text-sm outline-none transition-all",
                "placeholder:text-muted-foreground",
                "focus:ring-2 focus:ring-ring focus:border-transparent",
                error && "border-red-500 focus:ring-red-500"
              )}
            />
          </div>

          {/* Password */}
          <div className="space-y-1.5">
            <label htmlFor="password" className="text-sm font-medium">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                autoComplete="current-password"
                className={cn(
                  "w-full rounded-lg border bg-card px-3.5 py-2.5 pr-10 text-sm outline-none transition-all",
                  "placeholder:text-muted-foreground",
                  "focus:ring-2 focus:ring-ring focus:border-transparent",
                  error && "border-red-500 focus:ring-red-500"
                )}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                tabIndex={-1}
              >
                {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
              </button>
            </div>
          </div>

          {/* Error */}
          {error && (
            <div className="rounded-lg bg-red-500/10 border border-red-500/20 px-3.5 py-2.5">
              <p className="text-sm text-red-500">{error}</p>
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className={cn(
              "w-full flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-all mt-1",
              "bg-foreground text-background hover:opacity-90 active:opacity-80",
              "disabled:opacity-50 disabled:cursor-not-allowed"
            )}
          >
            {loading ? (
              <>
                <Loader2 className="size-4 animate-spin" />
                Signing in...
              </>
            ) : (
              "Sign in"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
