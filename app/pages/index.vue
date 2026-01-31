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
    class="min-h-screen relative flex flex-col items-center bg-black overflow-hidden font-archivo"
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
    <div class="fixed inset-0 pointer-events-none z-0 grid-bg opacity-20"></div>
    <div class="scanline"></div>

    <main
      class="relative z-10 w-full max-w-[600px] flex flex-col items-center px-6 py-12"
    >
      <!-- Profile Section -->
      <div
        class="text-center mb-10 w-full animate-in fade-in slide-in-from-bottom-4 duration-1000"
      >
        <div class="relative inline-block mb-6">
          <div
            class="absolute -inset-2 bg-primary/20 rounded-full blur-xl animate-pulse-slow"
          ></div>
          <div
            class="relative w-28 h-28 rounded-full p-[2px] bg-gradient-to-b from-primary to-transparent shadow-[0_0_20px_rgba(0,242,255,0.3)]"
          >
            <div
              class="w-full h-full rounded-full border border-white/10 overflow-hidden bg-zinc-900 flex items-center justify-center"
            >
              <img
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Gustavo"
                alt="Profile"
                class="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <h1
          class="text-4xl md:text-5xl font-bold mb-3 tracking-tighter text-white uppercase italic"
        >
          André
        </h1>

        <div
          class="flex flex-col gap-1 items-center font-mono text-xs text-zinc-400"
        >
          <p>Bacharel Eng. Mecatrônica</p>
          <p>Pós Graduado em Data Analytics</p>
        </div>
      </div>

      <!-- Links Section -->
      <div class="w-full space-y-4">
        <a
          v-for="link in links"
          :key="link.title"
          :href="link.href"
          target="_blank"
          rel="noopener noreferrer"
          class="glass-card w-full p-5 flex items-start group relative transition-all hover:scale-[1.01] rounded-lg border-white/5 bg-white/5"
        >
          <!-- Accent Glow background -->
          <div
            class="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"
          ></div>

          <div class="relative z-10 mr-5 mt-1">
            <div
              :class="[
                'rounded border border-white/10 flex items-center justify-center w-[46px] h-[46px] overflow-hidden transition-colors',
                link.image
                  ? ''
                  : 'p-3 bg-zinc-800/50 text-white group-hover:text-primary',
              ]"
            >
              <img
                v-if="link.image"
                :src="link.image"
                class="w-full h-full object-cover"
              />
              <component v-else :is="link.icon" :size="22" />
            </div>
          </div>

          <div class="relative z-10 flex-1">
            <div class="flex items-center gap-2 mb-1">
              <h3
                class="text-sm font-bold tracking-widest text-white uppercase group-hover:text-primary transition-colors"
              >
                {{ link.title }}
              </h3>
              <span
                v-if="link.badge"
                class="bg-primary/20 text-[10px] text-primary px-2 py-0.5 rounded-sm font-bold border border-primary/30 tracking-wide"
              >
                {{ link.badge }}
              </span>
            </div>
            <p class="text-xs text-zinc-500 leading-relaxed font-mono">
              {{ link.description }}
            </p>
          </div>

          <div
            class="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all translate-x-1 group-hover:translate-x-0"
          >
            <ExternalLink :size="14" class="text-primary" />
          </div>

          <!-- Decorative edges (Image 2 style) -->
          <div
            class="absolute top-0 right-0 w-8 h-8 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <div class="absolute top-0 right-0 w-[1px] h-3 bg-primary/40"></div>
            <div class="absolute top-0 right-0 w-3 h-[1px] bg-primary/40"></div>
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

.font-mono {
  font-family: "Space Mono", monospace;
}
</style>
