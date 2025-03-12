import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-black">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        {/* Left Section - Hero Image and Branding */}
        <section className="relative flex h-32 items-end lg:col-span-5 lg:h-full xl:col-span-6 overflow-hidden">
          {/* Enhanced image overlay with gradient */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/80 via-black/90 to-purple-900/80 z-10"></div>
            <img
              alt="Modern office workspace"
              src="https://images.unsplash.com/photo-1617195737496-bc30194e3a19?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
              className="h-full w-full object-cover opacity-60 scale-105 transform transition-transform duration-10000 ease-in-out animate-slow-zoom"
            />
          </div>

          {/* Left section content with improved typography and spacing */}
          <div className="relative hidden lg:block lg:p-12 z-10">
            <div className="space-y-8">
              <a
                className="block transform transition-all duration-300 hover:scale-105 hover:opacity-80"
                href="#"
              >
                <span className="sr-only">Home</span>
                <svg
                  className="h-12 w-auto text-white filter drop-shadow-[0_0_0.3rem_rgba(255,255,255,0.3)]"
                  viewBox="0 0 28 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* SVG path remains the same */}
                </svg>
              </a>

              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl tracking-tight">
                  Welcome to{" "}
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                    Ai
                  </span>{" "}
                  <span className="inline-block animate-float">🦑</span>
                </h2>
              </div>

              {/* Enhanced decorative elements */}
              <div className="absolute bottom-12 left-12 right-12">
                <div className="space-y-6">
                  <div className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                  <div className="flex gap-3">
                    <div className="h-1 w-12 rounded-full bg-blue-500/50 animate-pulse"></div>
                    <div className="h-1 w-8 rounded-full bg-purple-500/50 animate-pulse delay-150"></div>
                    <div className="h-1 w-4 rounded-full bg-blue-500/50 animate-pulse delay-300"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Right Section - Sign In Form */}
        <main className="relative flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          {/* Background blur effect */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] rounded-3xl"></div>

          <div className="relative max-w-xl lg:max-w-3xl w-full">
            {/* Mobile Logo and Header */}
            <div className="relative -mt-16 block lg:hidden mb-12">
              <a
                className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-purple-600 shadow-lg shadow-blue-500/25"
                href="#"
              >
                <svg
                  className="h-8 w-8 text-white"
                  viewBox="0 0 28 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* SVG path remains the same */}
                </svg>
              </a>

              <h1 className="mt-6 text-3xl font-bold text-white">
                Welcome to{" "}
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Squid
                </span>{" "}
                <span className="inline-block animate-float">🦑</span>
              </h1>
            </div>

            {/* Sign In Component with enhanced styling */}
            <div className="mt-8 lg:mt-0">
              <div className="rounded-2xl bg-white/5 backdrop-blur-xl p-8 shadow-2xl ring-1 ring-white/10 transition-all duration-300 hover:ring-blue-500/20 hover:shadow-blue-500/5">
                <SignIn />
              </div>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
}
