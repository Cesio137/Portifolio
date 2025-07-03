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
        },
        proj: {
            my_proj: "My projects",
            placeholder: "Search projects by name, description, language or tags...",
            loading: "loading...",
            nores: "No projects found for your search",
            noproj: 'No projects available',
            clearsearch: "Clear search",
            viewOnGithub: "View on GitHub →"
        },
        footer: {
            rights: "All rights reserved."
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
        },
        proj: {
            my_proj: "Meus projetos",
            placeholder: "Buscar projetos por nome, descrição, linguagem ou tags...",
            loading: "carregando...",
            nores: "Nenhum projeto encontrado para sua busca",
            noproj: 'Nenhum projeto disponível',
            clearsearch: "Limpar busca",
            viewOnGithub: "Ver no GitHub →"
        },
        footer: {
            rights: "Todos os direitos reservados."
        }
    },
}

export const i18n = createI18n({
    legacy: false,
    locale: "en",
    fallbackLocale: "pt",
    messages
})