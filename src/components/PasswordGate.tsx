import { useState, useEffect, ReactNode, FormEvent } from 'react';
import { Lock } from 'lucide-react';

const PASSWORD = 'taoh2026';
const STORAGE_KEY = 'taoh_site_unlocked';

export const PasswordGate = ({ children }: { children: ReactNode }) => {
  const [unlocked, setUnlocked] = useState(false);
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY) === '1') setUnlocked(true);
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (value.trim().toLowerCase() === PASSWORD) {
      sessionStorage.setItem(STORAGE_KEY, '1');
      setUnlocked(true);
    } else {
      setError(true);
    }
  };

  if (unlocked) return <>{children}</>;

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <div className="max-w-md w-full glass-card p-10 text-center rounded-2xl">
        <div className="mx-auto w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
          <Lock className="w-6 h-6 text-primary" />
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
          Building in progress
        </h1>
        <p className="text-foreground/70 mb-8">
          The Alpha Omega Hub website is getting a refresh. Enter the password to preview.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="password"
            autoFocus
            value={value}
            onChange={(e) => { setValue(e.target.value); setError(false); }}
            placeholder="Password"
            className="w-full h-12 rounded-md border border-input bg-background px-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
          {error && (
            <p className="text-sm text-destructive">Incorrect password. Try again.</p>
          )}
          <button type="submit" className="btn-hero-primary w-full h-12">
            Enter
          </button>
        </form>
      </div>
    </div>
  );
};
