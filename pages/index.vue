<template>
  <div
    class="min-h-screen bg-gradient-to-br from-primary/10 to-secondary/10 flex"
  >
    <!-- Hero Section -->
    <div class="hero min-h-screen">
      <div class="hero-content text-center">
        <div class="max-w-4xl">
          <div class="mb-8">
            <h1 class="text-5xl font-bold text-primary mb-4">🌼 Welcome</h1>
            <p class="text-xl text-base-content/80 mb-8">
              A simple template for rapid project development
            </p>
          </div>

          <!-- Main Description Card -->
          <div class="card bg-base-100 shadow-2xl mb-8">
            <div class="card-body">
              <h2 class="card-title text-3xl mb-4 justify-center">
                About This Template
              </h2>
              <p class="text-lg leading-relaxed mb-6">
                This template provides a streamlined starting point for your
                projects, reducing setup time so you can focus on bringing your
                ideas to life.
              </p>

              <div class="divider">✨</div>

              <div class="grid md:grid-cols-2 gap-6 mt-6">
                <div class="text-left">
                  <h3 class="text-xl font-semibold mb-3 text-primary">
                    Ideal For
                  </h3>
                  <ul class="space-y-2">
                    <li class="flex items-center gap-2">
                      <span class="badge badge-primary badge-sm">✓</span>
                      Prototypes &amp; MVPs
                    </li>
                    <li class="flex items-center gap-2">
                      <span class="badge badge-primary badge-sm">✓</span>
                      Personal projects
                    </li>
                    <li class="flex items-center gap-2">
                      <span class="badge badge-primary badge-sm">✓</span>
                      Hackathons
                    </li>
                    <li class="flex items-center gap-2">
                      <span class="badge badge-primary badge-sm">✓</span>
                      Learning experiments
                    </li>
                  </ul>
                </div>

                <div class="text-left">
                  <h3 class="text-xl font-semibold mb-3 text-secondary">
                    Key Benefits
                  </h3>
                  <ul class="space-y-2">
                    <li class="flex items-center gap-2">
                      <span class="badge badge-secondary badge-sm">⚡</span>
                      Fast development workflow
                    </li>
                    <li class="flex items-center gap-2">
                      <span class="badge badge-secondary badge-sm">🎨</span>
                      Aesthetic user interfaces
                    </li>
                    <li class="flex items-center gap-2">
                      <span class="badge badge-secondary badge-sm">🔧</span>
                      Minimal configuration hassle
                    </li>
                    <li class="flex items-center gap-2">
                      <span class="badge badge-secondary badge-sm">📱</span>
                      Responsive design by default
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <!-- Tech Stack Cards -->
          <div class="grid md:grid-cols-3 grid-cols-1 gap-4 mb-8">
            <div class="card bg-base-100 shadow-lg">
              <div class="card-body text-center">
                <div class="text-3xl mb-2">⚛️</div>
                <h3 class="card-title justify-center">Nuxt 3</h3>
                <p class="text-sm">
                  A modern framework offering auto-imports and file-based
                  routing
                </p>
              </div>
            </div>

            <div class="card bg-base-100 shadow-lg">
              <div class="card-body text-center">
                <div class="text-3xl mb-2">🎨</div>
                <h3 class="card-title justify-center">DaisyUI</h3>
                <p class="text-sm">
                  Beautiful component library built on top of Tailwind CSS
                </p>
              </div>
            </div>

            <div class="card bg-base-100 shadow-lg">
              <div class="card-body text-center">
                <div class="text-3xl mb-2">💨</div>
                <h3 class="card-title justify-center">Tailwind CSS</h3>
                <p class="text-sm">
                  Utility-first CSS framework for rapid UI development
                </p>
              </div>
            </div>
          </div>

          <!-- Getting Started Section -->
          <div class="card bg-base-100 shadow-xl">
            <div class="card-body">
              <h2 class="card-title text-2xl mb-4 justify-center">
                🚀 Ready to Get Started?
              </h2>
              <div class="space-y-4">
                <div class="alert alert-info">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    class="stroke-current shrink-0 w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>
                    This template is configured with essential tools to
                    kickstart your project.
                  </span>
                </div>

                <div class="grid md:grid-cols-2 gap-4">
                  <div class="bg-base-200 p-4 rounded-lg">
                    <h4 class="font-semibold mb-2">Development</h4>
                    <code class="text-sm">npm run dev</code>
                  </div>
                  <div class="bg-base-200 p-4 rounded-lg">
                    <h4 class="font-semibold mb-2">Build</h4>
                    <code class="text-sm">npm run build</code>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Generic welcome page template
</script>
