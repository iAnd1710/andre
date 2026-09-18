<script setup lang="ts">
import { ArrowUpRight, BookOpenText, Github, Instagram, Landmark, Linkedin, Sparkles } from "lucide-vue-next";

const profileImage = "https://storage.googleapis.com/storage.apptime.app/public/artifacts/fXsPxaoXOmJf50SoWRAw/imgHd.png";

const projects = [
  { title: "Apptime", description: "Soluções em IA para tirar ideias do papel.", href: "https://apptime.ai/", image: "https://storage.googleapis.com/storage.apptime.app/public/artifacts/qzmYBLPDFygkgz6ymYTf/imgHd.png", icon: undefined, status: undefined },
  { title: "Forus Flow", description: "Um lugar para escrever e pensar com IA.", href: "https://forusflow.com/", image: "https://storage.googleapis.com/storage.apptime.app/public/artifacts/STYLPrrEQb3eH4t3xOEZ/imgHd.png", icon: undefined, status: undefined },
  { title: "Cathedra", description: "Um projeto sobre catolicismo, em construção.", href: undefined, image: undefined, icon: Landmark, status: "Em construção" },
];

const socials = [
  { title: "LinkedIn", href: "https://www.linkedin.com/in/andre-lima-inacio/", icon: Linkedin },
  { title: "GitHub", href: "https://github.com/iAnd1710", icon: Github },
  { title: "Instagram", href: "https://www.instagram.com/andre.limaa_/", icon: Instagram },
];
</script>

<template>
  <main class="page-shell">
    <div class="atmosphere" aria-hidden="true"></div>
    <div class="page-vignette" aria-hidden="true"></div>

    <section class="link-hub" aria-labelledby="page-title">
      <header class="profile">
        <div class="portrait-frame">
          <img :src="profileImage" alt="André Lima Inácio" class="portrait" />
        </div>
        <p class="eyebrow">Engenharia · dados · inteligência artificial</p>
        <h1 id="page-title">André</h1>
      </header>

      <nav class="project-list" aria-label="Projetos">
        <component
          :is="project.href ? 'a' : 'div'"
          v-for="project in projects"
          :key="project.title"
          :href="project.href"
          :target="project.href ? '_blank' : undefined"
          :rel="project.href ? 'noopener noreferrer' : undefined"
          :class="['project-card', { 'project-card--coming-soon': !project.href }]"
        >
          <span class="project-mark" aria-hidden="true">
            <img v-if="project.image" :src="project.image" alt="" />
            <component v-else :is="project.icon" :size="21" :stroke-width="1.35" />
          </span>
          <div class="project-copy">
            <div class="project-title-row">
              <span class="project-title">{{ project.title }}</span>
              <span v-if="project.status" class="project-status">{{ project.status }}</span>
            </div>
            <span class="project-description">{{ project.description }}</span>
          </div>
          <span class="project-action" aria-hidden="true">
            <BookOpenText v-if="!project.href" :size="18" :stroke-width="1.25" />
            <ArrowUpRight v-else :size="19" :stroke-width="1.35" />
          </span>
        </component>
      </nav>

      <nav class="socials" aria-label="Redes sociais">
        <a v-for="social in socials" :key="social.title" :href="social.href" target="_blank" rel="noopener noreferrer" class="social-link">
          <component :is="social.icon" :size="18" :stroke-width="1.45" />
          <span>{{ social.title }}</span>
        </a>
      </nav>

      <footer class="footer-note">
        <Sparkles :size="12" :stroke-width="1.2" aria-hidden="true" />
        <span>Ad Maiorem Dei Gloriam</span>
      </footer>
    </section>
  </main>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=DM+Sans:wght@400;500;600&family=Playfair+Display:ital,wght@0,500;0,600;1,500&display=swap");

.page-shell { --ivory: #f3eee4; --muted: rgba(236,230,218,.66); --line: rgba(225,195,139,.3); --line-soft: rgba(244,238,228,.15); --gold: #d7b570; isolation: isolate; position: relative; display: grid; min-height: 100svh; overflow: hidden; place-items: center; padding: 4rem 1.5rem 2.5rem; background: #030609; color: var(--ivory); }
.atmosphere, .page-vignette { inset: 0; pointer-events: none; position: fixed; }
.atmosphere { z-index: -2; background: url("/images/night-lake.png") center center / cover no-repeat; transform: scale(1.025); }
.page-vignette { z-index: -1; background: rgba(0,3,8,.46); box-shadow: inset 0 0 12rem 3rem rgba(0,0,0,.7); }
.link-hub { display: flex; width: min(100%, 34rem); min-height: min(43rem, calc(100svh - 5rem)); flex-direction: column; align-items: stretch; }
.profile { display: flex; flex-direction: column; align-items: center; text-align: center; }
.portrait-frame { width: 7.7rem; height: 7.7rem; padding: 2px; overflow: hidden; border: 1px solid var(--gold); border-radius: 999px; background: #080d12; box-shadow: 0 0 0 .35rem rgba(2,5,9,.46), 0 0 2.5rem rgba(183,140,69,.17); }
.portrait { width: 100%; height: 100%; display: block; border-radius: inherit; filter: grayscale(100%) contrast(1.05); object-fit: cover; }
.eyebrow { margin: 1.45rem 0 .5rem; color: rgba(244,238,228,.58); font-family: "DM Mono", monospace; font-size: .58rem; letter-spacing: .15em; line-height: 1.55; text-transform: uppercase; }
h1 { margin: 0; font-family: "Playfair Display", Georgia, serif; font-size: clamp(3.3rem,9vw,4.6rem); font-weight: 500; letter-spacing: -.06em; line-height: .95; text-shadow: 0 2px 1.2rem rgba(0,0,0,.8); }
.project-list { display: grid; gap: .75rem; margin-top: clamp(2.7rem,8vh,4.3rem); }
.project-card { display: grid; min-height: 5.75rem; grid-template-columns: 3.25rem minmax(0,1fr) 1.75rem; align-items: center; gap: 1rem; padding: .85rem 1rem; border: 1px solid var(--line-soft); border-radius: .9rem; background: rgba(4,9,14,.63); box-shadow: 0 1rem 2.5rem rgba(0,0,0,.18); color: inherit; text-decoration: none; transition: border-color 180ms ease, background-color 180ms ease, transform 180ms ease; }
a.project-card:hover, a.project-card:focus-visible { border-color: var(--line); background: rgba(12,19,27,.79); outline: none; transform: translateY(-3px); }
.project-card--coming-soon { border-color: rgba(225,195,139,.18); }
.project-mark { width: 3.25rem; height: 3.25rem; display: grid; overflow: hidden; place-items: center; border: 1px solid rgba(243,238,228,.11); border-radius: .65rem; background: rgba(255,255,255,.04); color: var(--gold); }
.project-mark img { width: 100%; height: 100%; object-fit: cover; }
.project-copy { display: grid; min-width: 0; gap: .38rem; align-content: center; }
.project-title-row { display: flex; min-width: 0; flex-wrap: wrap; align-items: center; gap: .35rem .45rem; }
.project-title { color: var(--ivory); font-family: "Playfair Display", Georgia, serif; font-size: 1.3rem; font-weight: 500; line-height: 1.05; }
.project-description { overflow: hidden; color: var(--muted); font-family: "DM Sans", sans-serif; font-size: .75rem; line-height: 1.25; text-overflow: ellipsis; white-space: nowrap; }
.project-status { display: inline-flex; flex: 0 0 auto; min-height: 1rem; align-items: center; padding: 0 .32rem; border: 1px solid rgba(215,181,112,.32); border-radius: 999px; background: rgba(215,181,112,.07); color: var(--gold); font-family: "DM Mono", monospace; font-size: .44rem; letter-spacing: .07em; line-height: 1; text-transform: uppercase; white-space: nowrap; }
.project-action { display: grid; place-items: center; color: var(--gold); }
.socials { display: flex; justify-content: center; gap: clamp(1.1rem,5vw,2.2rem); margin-top: clamp(2.6rem,7vh,4rem); }
.social-link { display: inline-flex; align-items: center; gap: .42rem; color: rgba(243,238,228,.78); font-family: "DM Sans", sans-serif; font-size: .75rem; text-decoration: none; transition: color 180ms ease, transform 180ms ease; }
.social-link:hover, .social-link:focus-visible { color: var(--gold); outline: none; transform: translateY(-2px); }
.footer-note { display: flex; margin-top: auto; padding-top: 3.6rem; align-items: center; justify-content: center; gap: .55rem; color: rgba(222,184,116,.84); font-family: "DM Mono", monospace; font-size: .57rem; letter-spacing: .16em; text-transform: uppercase; }
@media (max-width: 34rem) { .page-shell { padding: 2.7rem 1rem 1.7rem; } .link-hub { min-height: calc(100svh - 4.4rem); } .portrait-frame { width: 6.75rem; height: 6.75rem; } .eyebrow { max-width: 17rem; } .project-list { margin-top: 2.7rem; } .project-card { grid-template-columns: 2.9rem minmax(0,1fr) 1.3rem; gap: .75rem; padding: .72rem .8rem; } .project-mark { width: 2.9rem; height: 2.9rem; } .project-title { font-size: 1.16rem; } .project-description { font-size: .69rem; } .socials { gap: 1rem; } .social-link span { display: none; } .social-link { width: 2.4rem; height: 2.4rem; justify-content: center; border: 1px solid rgba(243,238,228,.15); border-radius: 999px; background: rgba(3,6,9,.38); } .footer-note { padding-top: 2.4rem; } }
@media (prefers-reduced-motion: reduce) { *, *::before, *::after { scroll-behavior: auto !important; transition-duration: .01ms !important; } }
</style>
