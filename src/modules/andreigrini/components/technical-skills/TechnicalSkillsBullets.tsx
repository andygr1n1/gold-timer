
export const TechnicalSkillsBullets: React.FC = () => {
    return (
        <ul className="font-inter list-disc [&_li]:list-disc flex flex-col gap-4 px-3">
            <li><b>Languages & Frameworks:</b> JavaScript, TypeScript, React, NextJs, Vue, Nuxt, Svelte, Svelte-kit, Angular, HTML, CSS, SCSS</li>
            <li><b>State Management:</b> Mobx State Tree, Mobx, Context API, Jotai, Redux Toolkit</li>
            <li><b>GraphQL & Backend:</b> GraphQL, Apollo Client, React query (Tanstack), Hasura, REST APIs, Nodejs, Express</li>
            <li><b>Build Tools & Package Managers:</b> Vite, Webpack, Babel, NPM, Yarn, Pnpm, Qiankun (Micro front ends)</li>
            <li><b>Version Control:</b> Git, GitHub, GitLab, Bitbucket, Azure DevOps</li>
            <li><b>Testing:</b> Jest, Vitest, React Testing Library, Cypress, Webdriver IO, Play Wright</li>
            <li><b>Design Tools:</b> Figma, Zeplin, Sketch, Adobe XD</li>
            <li><b>Other:</b> Docker, CI/CD, Agile/Scrum, Jira</li>
        </ul>
    )
}
