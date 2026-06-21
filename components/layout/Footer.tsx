export function Footer() {
  return (
   <footer className="mt-20 border-t border-primary/10 bg-primary/5">
      <div className="container mx-auto max-w-7xl px-6 py-6">

        <div className="flex flex-col gap-3 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">

          {/* Left */}
          <p>
            © {new Date().getFullYear()} Divya Gandham. All rights reserved.
          </p>

          {/* Right */}
          <p>
            • Built with Next.js, TypeScript & Tailwind CSS
          </p>

        </div>

      </div>
    </footer>
  );
}

