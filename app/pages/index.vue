<script setup lang="ts">
import { ArrowRight, ArrowUpRight, Github, Instagram, Linkedin } from 'lucide-vue-next'

const projects = [
  {
    name: 'Apptime',
    description: 'Plataformas de IA para atrair e expandir clientes.',
    href: 'https://apptime.ai/?utm_source=andre',
    image: 'https://storage.googleapis.com/storage.apptime.app/public/artifacts/qzmYBLPDFygkgz6ymYTf/imgHd.png',
    tone: 'apptime',
  },
  {
    name: 'Cathedra',
    description: 'Os fundamentos da fé católica, de forma clara.',
    href: 'https://cathedra.cc/?utm_source=andre',
    image: 'https://storage.googleapis.com/storage.apptime.app/public/artifacts/FDP96qto1qDR4VnVAtgT/imgHd.png',
    tone: 'cathedra',
  },
  {
    name: 'Forus Flow',
    description: 'Um espaço para escrever e pensar com IA.',
    href: 'https://forusflow.com/?utm_source=andre',
    image: 'https://storage.googleapis.com/storage.apptime.app/public/artifacts/STYLPrrEQb3eH4t3xOEZ/imgHd.png',
    tone: 'forus',
  },
  {
    name: 'Kipflow',
    description: 'Mais espaço para criar. A IA cuida do repetitivo.',
    href: 'https://kipflow.ai/?utm_source=andre',
    image: 'https://storage.googleapis.com/storage.apptime.app/public/artifacts/TbGETcrCDgV1g1xnTLXA/imgHd.png',
    tone: 'kipflow',
  },
]

const socials = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/andre-lima-inacio/', icon: Linkedin },
  { name: 'GitHub', href: 'https://github.com/iAnd1710', icon: Github },
  { name: 'Instagram', href: 'https://www.instagram.com/andre.limaa_/', icon: Instagram },
]

const portrait = 'https://storage.googleapis.com/storage.apptime.app/public/artifacts/fXsPxaoXOmJf50SoWRAw/imgHd.png'
const contactHref = 'https://tally.so/r/dWBP4A?utm_source=andre'
</script>

<template>
  <main class="personal-site">
    <div class="ambient" aria-hidden="true"></div>

    <div class="page-shell">
      <section id="top" class="hero" aria-labelledby="hero-title">
        <h1 id="hero-title">Plataformas de IA<br />feitas para <em>o seu negócio.</em></h1>
        <p class="hero-copy">
          Criamos plataformas de inteligência artificial com a sua marca — pensadas para
          aproximar negócios de seus clientes e abrir espaço para crescer.
        </p>
        <a class="primary-cta" :href="contactHref" target="_blank" rel="noreferrer">
          <span class="cta-copy">
            <span class="cta-title">Conheça as plataformas de IA para o seu negócio</span>
            <span class="cta-description">Conte sua ideia e vamos conversar sobre o próximo passo.</span>
          </span>
          <span class="cta-arrow"><ArrowRight :size="23" :stroke-width="1.8" /></span>
        </a>
      </section>

      <section id="sobre" class="about" aria-label="Sobre André">
        <img class="portrait" :src="portrait" alt="Retrato de André" />
        <div class="about-copy">
          <p class="about-name">André</p>
          <p class="credentials">Engenharia Mecatrônica (FIAP) <span>·</span> Pós-graduação em Data Analytics</p>
          <p class="personal-line">Antes do ChatGPT, desenvolvemos um carro autônomo com IA que venceu uma competição oferecida pela Intel. Essa vontade de transformar ideias em produtos me levou a co-fundar a Apptime, apoiada pelo Google. Fora do trabalho, sigo em busca de conhecimento, fé e boas experiências.</p>
        </div>
      </section>

      <section class="projects" aria-labelledby="projects-title">
        <div class="section-heading">
          <div>
            <p class="section-kicker">UM POUCO DO QUE FAÇO</p>
            <h2 id="projects-title">Ideias em movimento<span>.</span></h2>
          </div>
          <p class="section-note">Produtos que estou construindo<br />com pessoas incríveis.</p>
        </div>

        <div class="project-list">
          <a
            v-for="project in projects"
            :key="project.name"
            class="project-card"
            :class="`project-${project.tone}`"
            :href="project.href"
            target="_blank"
            rel="noreferrer"
          >
            <span class="project-logo-wrap">
              <img class="project-logo" :src="project.image" :alt="`Logo ${project.name}`" loading="lazy" />
            </span>
            <span class="project-text">
              <span class="project-name">{{ project.name }}</span>
              <span class="project-description">{{ project.description }}</span>
            </span>
            <span class="project-arrow" aria-hidden="true"><ArrowUpRight :size="21" :stroke-width="1.6" /></span>
          </a>
        </div>
      </section>

      <footer class="footer">
        <div class="socials" aria-label="Redes sociais">
          <a v-for="social in socials" :key="social.name" :href="social.href" target="_blank" rel="noreferrer">
            <component :is="social.icon" :size="17" :stroke-width="1.6" />
            <span>{{ social.name }}</span>
          </a>
        </div>
        <div class="footer-bottom">
          <a class="made-with" href="https://kipflow.ai/?utm_source=andre" target="_blank" rel="noreferrer">
            Feito com <span>Kipflow</span><ArrowUpRight :size="13" :stroke-width="1.7" />
          </a>
          <span class="motto">✳ &nbsp; AD MAIOREM DEI GLORIAM</span>
        </div>
      </footer>
    </div>
  </main>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,500;1,600&display=swap');

:root { color-scheme: dark; }
* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body { margin: 0; background: #070b10; color: #f3f0e9; font-family: 'DM Sans', sans-serif; }
a { color: inherit; }
.personal-site { position: relative; min-height: 100vh; overflow: hidden; isolation: isolate; background: #070b10; }
.ambient { position: absolute; z-index: -1; inset: 0 0 auto; height: 980px; background: linear-gradient(180deg, rgba(5, 9, 14, .32) 0%, rgba(5, 9, 14, .52) 43%, #070b10 99%), url('/images/night-lake.png') center 38% / cover no-repeat; opacity: .76; }
.ambient::after { content: ''; position: absolute; inset: 0; background: radial-gradient(ellipse at 50% 18%, rgba(19, 34, 52, .16), transparent 57%); }
.page-shell { width: min(100% - 64px, 1072px); margin: 0 auto; }
.section-heading h2 span { color: #d7b267; }
.socials a:hover, .made-with:hover { color: #e7bf71; }
.hero { display: flex; flex-direction: column; align-items: flex-start; justify-content: flex-start; text-align: left; min-height: 0; padding: 58px 0 56px; position: relative; }
.section-kicker, .motto { font-family: 'DM Mono', monospace; letter-spacing: .15em; }
.hero h1 { max-width: 800px; margin: 18px 0 14px; font: 500 clamp(46px, 5.2vw, 68px)/1.08 'Playfair Display', Georgia, serif; letter-spacing: -.045em; }
.hero h1 em { color: #d8b873; font-weight: 500; }
.hero-copy { max-width: 640px; margin: 0; color: #b2b1ad; font-size: 16px; line-height: 1.6; }
.primary-cta { width: min(100%, 780px); min-height: 80px; display: grid; grid-template-columns: minmax(0, 1fr) 42px; align-items: center; gap: 17px; margin-top: 20px; padding: 11px 16px; border: 1px solid rgba(217, 180, 109, .4); border-radius: 14px; background: linear-gradient(105deg, rgba(217, 180, 109, .12), rgba(10, 16, 23, .93) 46%, rgba(10, 16, 23, .78)); color: #f3f0e9; text-decoration: none; transition: transform .2s, border-color .2s, background .2s; }
.primary-cta:hover { transform: translateY(-2px); border-color: rgba(217, 180, 109, .8); background: linear-gradient(105deg, rgba(217, 180, 109, .18), rgba(10, 16, 23, .95) 46%, rgba(10, 16, 23, .82)); }
.cta-copy { min-width: 0; display: grid; gap: 4px; }
.cta-title { font: 500 clamp(19px, 2.1vw, 24px)/1.2 'Playfair Display', Georgia, serif; }
.cta-description { color: #a9aaa7; font-size: 11px; line-height: 1.4; }
.cta-arrow { width: 42px; height: 42px; display: grid; place-items: center; border-radius: 50%; background: #d9b46d; color: #17140f; transition: transform .2s; }
.primary-cta:hover .cta-arrow { transform: translateX(3px); }
.about { min-height: 156px; display: flex; align-items: center; gap: 22px; padding: 25px 28px; border-top: 1px solid rgba(221, 213, 193, .18); border-bottom: 1px solid rgba(221, 213, 193, .18); background: linear-gradient(90deg, rgba(8, 13, 19, .74), rgba(8, 13, 19, .35)); }
.portrait { width: 78px; height: 78px; flex: 0 0 auto; border: 1px solid rgba(221, 213, 193, .25); border-radius: 50%; object-fit: cover; object-position: center 30%; filter: grayscale(1); }
.about-copy p { margin: 0; }
.about-name { font: 600 21px/1.3 'Playfair Display', Georgia, serif; }
.credentials { margin-top: 4px !important; color: #d2ae68; font: 10px 'DM Mono', monospace; letter-spacing: .05em; }
.credentials span { padding: 0 3px; color: #77766f; }
.personal-line { margin-top: 8px !important; color: #aaa9a4; font-size: 13px; }
.projects { padding: 160px 0 70px; }
.section-heading { display: flex; justify-content: space-between; align-items: end; margin-bottom: 23px; }
.section-kicker { margin: 0 0 10px; color: #c3a15f; font-size: 9px; }
.section-heading h2 { margin: 0; font: 500 34px/1.2 'Playfair Display', Georgia, serif; letter-spacing: -.025em; }
.section-note { margin: 0 0 4px; color: #888a89; font-size: 11px; line-height: 1.6; text-align: right; }
.project-list { border-top: 1px solid rgba(221, 213, 193, .16); }
.project-card { display: grid; grid-template-columns: 52px minmax(0, 1fr) 26px; align-items: center; gap: 17px; min-height: 91px; padding: 15px 8px; border-bottom: 1px solid rgba(221, 213, 193, .16); text-decoration: none; transition: background .2s, padding .2s; }
.project-card:hover { padding-right: 2px; padding-left: 14px; background: rgba(245, 240, 228, .045); }
.project-logo-wrap { width: 48px; height: 48px; display: grid; place-items: center; overflow: hidden; border: 1px solid rgba(255,255,255,.12); border-radius: 12px; background: #10161d; }
.project-logo { width: 100%; height: 100%; object-fit: cover; }
.project-text { min-width: 0; display: grid; gap: 4px; }
.project-name { font: 600 20px/1.2 'Playfair Display', Georgia, serif; }
.project-description { overflow: hidden; color: #9d9e9c; font-size: 12px; line-height: 1.5; text-overflow: ellipsis; white-space: nowrap; }
.project-arrow { color: #c9a65e; transition: transform .2s; }
.project-card:hover .project-arrow { transform: translate(2px, -2px); }
.footer { display: flex; flex-direction: column; align-items: stretch; padding: 25px 0 29px; }
.socials { width: 100%; display: flex; justify-content: center; gap: 34px; }
.socials a { display: inline-flex; align-items: center; gap: 8px; color: #aaa9a5; font-size: 12px; text-decoration: none; transition: color .2s; }
.footer-bottom { display: flex; align-items: center; justify-content: space-between; margin-top: 34px; }
.made-with { display: inline-flex; align-items: center; gap: 5px; color: #777b7a; font-size: 10px; text-decoration: none; transition: color .2s; }
.made-with span { color: #c6a35e; }
.motto { color: #bd9d5d; font-size: 9px; }
a:focus-visible { outline: 2px solid #e0bd75; outline-offset: 4px; }
@media (max-width: 640px) {
  .page-shell { width: min(100% - 36px, 520px); }
  .hero { min-height: 0; padding-top: 48px; padding-bottom: 36px; }
  .hero h1 { font-size: clamp(43px, 11vw, 62px); }
  .hero-copy { max-width: 440px; font-size: 13px; line-height: 1.5; }
  .primary-cta { grid-template-columns: minmax(0, 1fr) 36px; gap: 10px; min-height: 66px; margin-top: 16px; padding: 9px 11px; border-radius: 11px; }
  .cta-title { font-size: 15px; }
  .cta-arrow { width: 36px; height: 36px; }
  .cta-arrow svg { width: 18px; height: 18px; }
  .about { min-height: 120px; gap: 15px; padding: 18px 14px; }
  .portrait { width: 64px; height: 64px; }
  .about-name { font-size: 18px; }
  .credentials { line-height: 1.5; }
  .personal-line { max-width: 260px; font-size: 11px; line-height: 1.45; }
  .projects { padding: 120px 0 51px; }
  .section-heading h2 { font-size: 29px; }
  .section-note { display: none; }
  .project-card { grid-template-columns: 46px minmax(0, 1fr) 20px; gap: 10px; min-height: 82px; padding: 13px 2px; }
  .project-card:hover { padding-left: 7px; }
  .project-logo-wrap { width: 43px; height: 43px; border-radius: 10px; }
  .project-name { font-size: 18px; }
  .project-description { display: -webkit-box; overflow: hidden; font-size: 11px; white-space: normal; -webkit-box-orient: vertical; -webkit-line-clamp: 2; }
  .socials { gap: 22px; }
  .socials a { gap: 6px; font-size: 11px; }
  .footer-bottom { margin-top: 28px; }
  .motto { font-size: 8px; letter-spacing: .09em; }
}
@media (max-width: 380px) {
  .project-card { grid-template-columns: 42px minmax(0, 1fr) 18px; gap: 8px; }
  .project-logo-wrap { width: 40px; height: 40px; }
  .motto { font-size: 7px; }
}
@media (prefers-reduced-motion: reduce) { html { scroll-behavior: auto; } *, *::before, *::after { transition-duration: .01ms !important; animation-duration: .01ms !important; } }
</style>
