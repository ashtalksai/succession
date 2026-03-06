import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-cream flex flex-col items-center justify-center px-4 py-16">
      {/* Logo */}
      <Link href="/" className="font-display text-2xl font-semibold text-walnut mb-12 block">
        Succession
      </Link>

      <div className="w-full max-w-[480px] bg-white border border-parchment-dark rounded-lg p-10 shadow-sm">
        <h2 className="font-display text-2xl font-semibold text-walnut mb-2">
          Start capturing your business knowledge
        </h2>
        <p className="text-sm text-muted-foreground mb-8">
          No password needed. We&apos;ll email you a sign-in link.
        </p>

        <form className="space-y-4" action="/dashboard">
          <div>
            <Label htmlFor="email" className="text-sm font-semibold text-walnut mb-2 block">
              Email address
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="border-parchment-dark focus:border-walnut bg-cream placeholder:text-muted-foreground"
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-walnut hover:bg-walnut-hover text-cream uppercase tracking-wide text-xs font-semibold py-3 h-auto"
          >
            Send Magic Link →
          </Button>
        </form>

        <div className="flex items-center my-6">
          <div className="flex-1 border-t border-parchment-dark" />
          <span className="px-4 text-xs text-muted-foreground">or</span>
          <div className="flex-1 border-t border-parchment-dark" />
        </div>

        <Button
          asChild
          variant="outline"
          className="w-full border-parchment-dark text-secondary-foreground hover:bg-surface-warm hover:border-walnut-light py-3 h-auto"
        >
          <Link href="/dashboard">
            <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Continue with Google
          </Link>
        </Button>

        <p className="text-center text-sm text-muted-foreground mt-6">
          Already have an account?{" "}
          <Link href="/login" className="text-walnut font-medium hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
