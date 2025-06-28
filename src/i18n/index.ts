import { createI18n } from 'vue-i18n'

const messages = {
    en: {
        nav: {
            home: "HOME",
            projects: "PROJECTS"
        },
        card: {
            developer: "Developer",
            description: "Hi, I'm a developer with a strong focus on backend and low-level programming. I’m passionate about exploring new technologies, especially in the field of computer graphics.",
            youtube_desc: "Programming and role-play channel",
            github_desc: "Check out my projects",
            discord_desc: "Join my server and stay up to date with everything"
        }
    },
    pt: {
        nav: {
            home: "INICIO",
            projects: "PROJETOS"
        },
        card: {
            developer: "Desenvolvedor",
            description: "Ola, sou desenvolvedor com foco mais voltado para backend e baixo nivel. Gosto muito de explorar novas tecnologias, principalmente na area da computação grafica.",
            youtube_desc: "Canal de programação e role-play",
            github_desc: "Veja meus projetos",
            discord_desc: "Junte-se ao meu servidor e fique por dentro de tudo"
        }
    },
}

export const i18n = createI18n({
    legacy: false,
    locale: "en",
    fallbackLocale: "pt",
    messages
})