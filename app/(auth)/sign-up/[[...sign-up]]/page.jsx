import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <section className="min-h-screen bg-[#020817] relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-[500px] h-[500px] rounded-full bg-blue-500/20 blur-[120px]" />
        <div className="absolute -bottom-1/2 -left-1/2 w-[600px] h-[600px] rounded-full bg-blue-700/20 blur-[150px]" />
        <div className="absolute inset-0 bg-[#020817]/80 backdrop-blur-sm" />
      </div>

      <div className="lg:grid lg:min-h-screen lg:grid-cols-12 relative z-10">
        {/* Left Section - Hero Image and Branding */}
        <section className="relative flex h-32 items-end lg:col-span-5 lg:h-full xl:col-span-6 overflow-hidden">
          {/* Enhanced image overlay with modern gradient */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/98 via-[#020817]/99 to-blue-900/98 z-10" />
            <img
              alt="Modern office workspace"
              src="https://images.unsplash.com/photo-1617195737496-bc30194e3a19?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
              className="h-full w-full object-cover opacity-50 scale-105 transform transition-all duration-10000 ease-in-out animate-slow-zoom"
            />
          </div>

          {/* Left section content with modern typography and effects */}
          <div className="relative hidden lg:flex lg:flex-col lg:justify-between lg:h-full lg:p-12 z-10">
            <div className="space-y-8">
              <a className="inline-flex items-center gap-2 group" href="#">
                <div className="relative">
                  <div className="absolute inset-0 rounded-lg bg-blue-500/20 blur-sm group-hover:bg-blue-500/30 transition-all duration-300"></div>
                  <svg
                    className="h-8 w-8 text-white transform transition-transform duration-300 group-hover:scale-110"
                    viewBox="0 0 28 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* SVG path remains the same */}
                  </svg>
                </div>
              </a>

              <div className="space-y-6">
                <h2 className="text-5xl font-bold text-white sm:text-6xl md:text-7xl tracking-tight">
                  Power your future with{" "}
                  <span className="relative">
                    <span className="absolute -inset-1 bg-blue-500/20 blur-sm rounded-lg"></span>
                    <span className="relative bg-gradient-to-r from-blue-400 via-blue-300 to-blue-400 bg-clip-text text-transparent">
                      AI
                    </span>
                  </span>
                </h2>
                <p className="text-lg text-blue-100/80 max-w-md">
                  Experience the next generation of AI-powered solutions that
                  transform the way you work and create.
                </p>
              </div>

              {/* Modern decorative elements */}
              <div className="absolute bottom-12 left-12 right-12">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"></div>
                    <span className="text-blue-300/70 text-sm">
                      AI Platform 2.0
                    </span>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-blue-400 animate-pulse"></div>
                      <span className="text-sm text-blue-300/70">
                        Real-time
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse delay-150"></div>
                      <span className="text-sm text-blue-300/70">Secure</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-purple-400 animate-pulse delay-300"></div>
                      <span className="text-sm text-blue-300/70">Scalable</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Right Section - Sign In Form */}
        <main className="relative flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="relative max-w-xl lg:max-w-3xl w-full">
            {/* Mobile Logo and Header */}
            <div className="relative -mt-16 block lg:hidden mb-12">
              <div className="flex flex-col items-center">
                <div className="relative">
                  <div className="absolute inset-0 rounded-xl bg-blue-500/20 blur-md"></div>
                  <a
                    className="relative inline-flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-600 to-blue-400 shadow-lg"
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
                </div>

                <h1 className="mt-6 text-3xl font-bold text-white">
                  Welcome to{" "}
                  <span className="relative">
                    <span className="absolute -inset-1 bg-blue-500/20 blur-sm rounded-lg"></span>
                    <span className="relative bg-gradient-to-r from-blue-400 via-blue-300 to-blue-400 bg-clip-text text-transparent">
                      AI Platform
                    </span>
                  </span>
                </h1>
              </div>
            </div>

            {/* Sign In Component with glass morphism */}
            <div className="mt-8 lg:mt-0">
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl blur-lg opacity-20 group-hover:opacity-30 transition-all duration-300"></div>
                <div className="relative backdrop-blur-xl bg-white/[0.07] rounded-xl p-8 shadow-2xl ring-1 ring-white/10 transition-all duration-300 hover:ring-blue-500/20 hover:shadow-blue-500/5">
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-transparent rounded-xl"></div>
                  <div className="relative">
                    <SignUp />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
}
