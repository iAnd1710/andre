<script setup lang="ts">
import {
  Rocket,
  Cpu,
  Database,
  BrainCircuit,
  Cross,
  Linkedin,
  Github,
  ExternalLink,
  Milestone,
  Instagram,
} from "lucide-vue-next";
import { onMounted, ref } from "vue";

interface Star {
  id: number;
  top: string;
  left: string;
  size: string;
  duration: string;
}

const stars = ref<Star[]>([]);

onMounted(() => {
  stars.value = Array.from({ length: 60 }).map((_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: `${Math.random() * 2 + 1}px`,
    duration: `${Math.random() * 3 + 2}s`,
  }));
});

const links = [
  {
    icon: Database,
    image:
      "https://storage.googleapis.com/storage.apptime.app/public/apps/kICCQZJzX7ng71G8508x/storage/libraries/default/BihTJCl8uaS9vl6WV5Rd/imgHd.png",
    title: "APPTIME",
    description:
      "Tudo em um só lugar para aprender e criar com IA + Experts. 🚀",
    href: "https://appti.me",
    badge: "ESTE SITE FOI FEITO AQUI",
    accentColor: "#ff5722",
  },
  {
    icon: Cpu,
    image:
      "https://storage.googleapis.com/storage.apptime.app/public/apps/kICCQZJzX7ng71G8508x/storage/libraries/default/FIDd5Q7xa5zZ8KWLHPLj/imgHd.png",
    title: "FORUS",
    description: "Sua jornada, do seu jeito 💫",
    href: "#",
    accentColor: "#9e9e9e",
  },
  {
    icon: Linkedin,
    image:
      "https://storage.googleapis.com/storage.apptime.app/public/apps/kICCQZJzX7ng71G8508x/storage/libraries/default/XRnyIWYr7xKX2mQn5kzH/imgHd.jpeg",
    title: "LINKEDIN",
    description: "",
    href: "#",
    accentColor: "#ff5722",
  },
  {
    icon: Github,
    image:
      "https://storage.googleapis.com/storage.apptime.app/public/apps/kICCQZJzX7ng71G8508x/storage/libraries/default/s6a8Kl2NJusxsgUCPeSs/imgHd.jpeg",
    title: "GITHUB",
    description: "",
    href: "#",
    accentColor: "#9e9e9e",
  },
  {
    icon: Instagram,
    image:
      "https://storage.googleapis.com/storage.apptime.app/public/apps/kICCQZJzX7ng71G8508x/storage/libraries/default/hUwVC2UyO8HEv92XhtmP/imgHd.jpeg",
    title: "INSTAGRAM",
    description: "",
    href: "#",
    accentColor: "#ff5722",
  },
];
</script>

<template>
  <div
    class="min-h-screen relative flex flex-col items-center bg-black overflow-hidden font-archivo mesh-gradient"
  >
    <!-- Star Field -->
    <div class="fixed inset-0 pointer-events-none z-0">
      <div
        v-for="star in stars"
        :key="star.id"
        class="star"
        :style="{
          top: star.top,
          left: star.left,
          width: star.size,
          height: star.size,
          '--duration': star.duration,
        }"
      />
    </div>

    <!-- Tech Grid Overlay -->
    <div class="fixed inset-0 pointer-events-none z-0 grid-bg opacity-10"></div>
    <div class="scanline"></div>
    <div
      class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 pointer-events-none"
    ></div>

    <main
      class="relative z-10 w-full max-w-[600px] flex flex-col items-center px-6 py-12"
    >
      <!-- Profile Section -->
      <div
        class="text-center mb-12 w-full animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-out"
      >
        <div class="relative inline-block mb-8">
          <!-- Multi-layered glowing rings -->
          <div
            class="absolute -inset-4 bg-primary/10 rounded-full blur-2xl animate-pulse-slow"
          ></div>
          <div
            class="absolute -inset-1 bg-gradient-to-tr from-primary via-secondary to-accent rounded-full opacity-50 animate-spin-slow"
          ></div>

          <div
            class="relative w-32 h-32 rounded-full p-[3px] bg-zinc-900 shadow-[0_0_30px_rgba(255,87,34,0.2)]"
          >
            <div
              class="w-full h-full rounded-full border border-white/10 overflow-hidden bg-zinc-950 flex items-center justify-center relative group"
            >
              <img
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Gustavo"
                alt="Profile"
                class="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
              <div
                class="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors"
              ></div>
            </div>
          </div>

          <!-- Decorative tech elements -->
          <div
            class="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-primary/40 rounded-tr-md"
          ></div>
          <div
            class="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-secondary/40 rounded-bl-md"
          ></div>
        </div>

        <h1
          class="text-5xl md:text-6xl font-black mb-4 tracking-tight text-white uppercase italic"
        >
          <span
            class="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-secondary"
            >André</span
          >
        </h1>

        <div
          class="flex flex-col gap-2 items-center font-mono text-xs tracking-widest text-zinc-400 uppercase"
        >
          <div class="flex items-center gap-2">
            <div class="w-1 h-1 bg-primary rounded-full animate-ping"></div>
            <p>Bacharel Eng. Mecatrônica</p>
          </div>
          <p class="opacity-60">Pós Graduado em Data Analytics</p>
        </div>
      </div>

      <!-- Links Section -->
      <div class="w-full space-y-4">
        <a
          v-for="(link, index) in links"
          :key="link.title"
          :href="link.href"
          target="_blank"
          rel="noopener noreferrer"
          class="glass-effect w-full p-6 flex items-start group relative transition-all hover:translate-y-[-4px] rounded-xl overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-700"
          :style="{ 'animation-delay': `${index * 100}ms` }"
        >
          <!-- Hover Gradient Glow -->
          <div
            class="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/5 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          ></div>

          <div class="relative z-10 mr-6">
            <div
              :class="[
                'rounded-lg border border-white/10 flex items-center justify-center w-[52px] h-[52px] overflow-hidden transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-[0_0_15px_rgba(255,87,34,0.3)]',
                link.image
                  ? 'bg-zinc-900'
                  : 'bg-zinc-800/50 text-white group-hover:text-primary',
              ]"
            >
              <img
                v-if="link.image"
                :src="link.image"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <component v-else :is="link.icon" :size="24" />
            </div>
          </div>

          <div class="relative z-10 flex-1">
            <div class="flex items-center gap-3 mb-1.5">
              <h3
                class="text-base font-bold tracking-wider text-zinc-400 uppercase group-hover:text-white transition-colors"
              >
                {{ link.title }}
              </h3>
              <span
                v-if="link.badge"
                class="bg-primary text-[9px] text-white px-2 py-0.5 rounded-full font-black border border-white/20 tracking-tighter animate-pulse"
              >
                {{ link.badge }}
              </span>
            </div>
            <p
              class="text-xs text-zinc-400 leading-relaxed font-mono group-hover:text-zinc-300 transition-colors"
            >
              {{ link.description }}
            </p>
          </div>

          <div
            class="absolute right-6 top-1/2 -translate-y-1/2 opacity-20 group-hover:opacity-100 transition-all translate-x-2 group-hover:translate-x-0"
          >
            <ExternalLink :size="18" class="text-primary" />
          </div>

          <!-- Decorative tech corners -->
          <div
            class="absolute top-0 right-0 w-4 h-4 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <div class="absolute top-2 right-2 w-[1px] h-2 bg-primary"></div>
            <div class="absolute top-2 right-2 w-2 h-[1px] bg-primary"></div>
          </div>
        </a>
      </div>

      <!-- Footer -->
      <footer class="mt-16 flex flex-col items-center text-zinc-600">
        <div class="flex flex-col items-center gap-2 opacity-50">
          <div class="flex items-center gap-2">
            <Cross :size="14" class="text-secondary" />
            <span class="text-[10px] uppercase tracking-[0.2em] font-mono"
              >Ad Maiorem Dei Gloriam</span
            >
          </div>
        </div>
      </footer>
    </main>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,100..900;1,100..900&family=Space+Mono&display=swap");

@keyframes spin-slow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.animate-spin-slow {
  animation: spin-slow 12s linear infinite;
}

.font-mono {
  font-family: "Space Mono", monospace;
}
</style>
