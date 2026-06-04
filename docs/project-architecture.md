# Arquitetura do Projeto

## Visão Geral

O `gabrielveras.dev` é uma aplicação Angular bilíngue que funciona como portfólio profissional e currículo online de Gabriel Veras, com posicionamento de **Senior Java Backend Engineer / Engenheiro Backend Java Sênior**.

O objetivo do site é apresentar, de forma clara e profissional:

- experiência profissional;
- habilidades técnicas;
- formação;
- cursos;
- idiomas;
- projetos planejados;
- contato;
- links para currículo em português e inglês.

A aplicação é uma SPA Angular com rota principal carregada sob demanda para a página Home.

## Stack

O projeto usa a stack já configurada no repositório:

- Angular 21+;
- TypeScript;
- Standalone Components;
- Angular Router;
- SCSS;
- npm com `package-lock`;
- ESLint;
- Prettier;
- Husky;
- lint-staged;
- Playwright para auditoria específica de overflow horizontal.

## Estrutura de Pastas

### `public/`

Contém arquivos estáticos servidos diretamente pela aplicação:

- favicons;
- flags BR/US;
- imagens do perfil;
- imagem social/Open Graph;
- PDFs de currículo;
- `robots.txt`;
- `sitemap.xml`.

### `scripts/`

Contém scripts auxiliares do projeto:

- `sync-version.mjs`: sincroniza a versão do `package.json` com `src/app/core/constants/app-version.ts`;
- `audit-horizontal-overflow.mjs`: usa Playwright para verificar overflow horizontal em rotas e viewports importantes.

### `src/`

Contém a aplicação Angular.

Arquivos principais:

- `src/main.ts`: inicializa a aplicação com `bootstrapApplication`;
- `src/index.html`: contém metadados SEO/social, canonical, favicons e preload da imagem principal do hero;
- `src/styles.scss`: define tokens globais, estilos compartilhados, reset básico, foco global e regras globais de acessibilidade;
- `src/app/app.config.ts`: configura providers globais, incluindo o router;
- `src/app/app.routes.ts`: define a rota principal com lazy loading para Home;
- `src/app/app.ts`, `app.html` e `app.scss`: formam o shell principal da aplicação.

### `src/app/core/`

Concentra a base do domínio e serviços centrais:

- modelos tipados;
- conteúdo i18n;
- constantes externas;
- versão da aplicação;
- serviço de idioma;
- serviço de preferências de acessibilidade.

### `src/app/layout/`

Contém componentes persistentes de layout:

- header;
- footer;
- language switcher;
- accessibility controls.

### `src/app/pages/`

Contém páginas de rota. A página principal atual é a Home.

### `src/app/shared/`

Contém componentes reutilizáveis, como:

- `experience-card`;
- `portfolio-icon`.

## i18n

O projeto não usa Angular i18n oficial. Ele usa uma abordagem simples, tipada e controlada por arquivos TypeScript:

- `src/app/core/i18n/content.pt.ts`;
- `src/app/core/i18n/content.en.ts`;
- `src/app/core/i18n/language.service.ts`;
- `src/app/core/models/portfolio-content.model.ts`.

O arquivo `portfolio-content.model.ts` define o contrato completo do conteúdo por meio de interfaces como:

- `HeroContent`;
- `ExperienceContent`;
- `SkillsContent`;
- `EducationContent`;
- `CoursesContent`;
- `LanguagesContent`;
- `ProjectsContent`;
- `ContactContent`.

Os arquivos `CONTENT_PT` e `CONTENT_EN` implementam esse contrato. Isso ajuda a manter português e inglês com a mesma estrutura.

O `LanguageService` mantém o idioma atual em signal:

- `pt-BR` como idioma padrão;
- `en` como idioma alternativo;
- persistência em `localStorage`;
- exposição do conteúdo atual por meio de `computed`.

Os componentes consomem conteúdo injetando o serviço:

```ts
readonly content = inject(LanguageService).content;
```

E usam o conteúdo no template:

```html
{{ content().hero.name }}
```

Ao alterar textos, é importante manter PT e EN semanticamente alinhados e atualizar os dois arquivos de conteúdo quando necessário.

## Layout

O componente principal da aplicação monta:

1. skip link;
2. header;
3. `<main>` com `router-outlet`;
4. footer;
5. botão de voltar ao topo quando há scroll.

### Header

O header contém:

- navegação desktop centralizada;
- language switcher;
- accessibility controls;
- botão hamburger para mobile/tablet;
- painel mobile com links e controles;
- fechamento por Escape;
- fechamento por clique fora;
- fechamento por clique em link do menu.

A responsividade do header separa:

- mobile por largura pequena;
- tablets/touch por detecção de ponteiro;
- desktop/mouse preservado em larguras intermediárias quando aplicável.

### Footer

O footer exibe o ano atual, o nome do profissional e a versão da aplicação.

### Language Switcher

O seletor de idioma alterna entre português e inglês usando flags BR/US. O idioma é persistido no `localStorage`.

### Accessibility Controls

Os controles de acessibilidade permitem:

- alternar tema claro/escuro;
- diminuir fonte;
- restaurar fonte;
- aumentar fonte;
- ativar/desativar alto contraste.

As preferências são aplicadas no `<html>` por atributos como:

- `data-theme`;
- `data-font-level`;
- `data-contrast`.

## Home

A Home é uma página de composição. Ela importa e renderiza as seções principais, além de cuidar de SEO dinâmico e modal da foto de perfil.

A ordem atual das seções é:

1. Hero;
2. Profile photo modal, quando aberto;
3. Experience;
4. Skills;
5. Education;
6. Courses;
7. Languages;
8. Projects;
9. Contact.

### Hero

O hero apresenta:

- nome;
- cargo;
- stack principal;
- localização;
- links compactos;
- resumo profissional;
- foto profissional.

A imagem principal usa atributos importantes para performance:

- `loading="eager"`;
- `fetchpriority="high"`;
- `decoding="async"`;
- `width` e `height` explícitos.

### Experience

A seção de experiência separa:

- experiências em destaque;
- histórico anterior dentro de `<details>`.

Cada experiência é renderizada por `ExperienceCard`.

### Skills

A seção de skills organiza:

- grupo principal em destaque;
- grupos secundários;
- métricas calculadas a partir do conteúdo.

Ela usa subcomponentes para manter a seção menor e mais fácil de manter.

### Education, Courses e Languages

`EducationSection` renderiza formação e também inclui:

- `CoursesSection`;
- `LanguagesSection`.

Os cursos ficam em disclosure fechado por padrão.

### Projects

Lista projetos planejados a partir do conteúdo tipado.

### Contact

Usa `EXTERNAL_LINKS` para e-mail, LinkedIn, GitHub e currículo.

Os links de currículo respeitam o idioma atual e mantêm fallback entre PT e EN.

### Profile Photo Modal

Exibe a foto profissional em um diálogo acessível, com fechamento por botão/backdrop e suporte ao Escape pela Home.

## Componentes Compartilhados

### `experience-card`

Componente reutilizável para experiência profissional.

Recebe por input:

- item de experiência;
- label de detalhes;
- label de tecnologias.

Renderiza empresa, cargo, período, localização, resumo, highlights, detalhes e tecnologias.

### `portfolio-icon`

Centraliza ícones SVG usados pelo projeto.

Recebe um `kind` tipado e renderiza o SVG correspondente. É usado principalmente na seção de skills.

## Scripts

### `sync-version.mjs`

Lê a versão do `package.json` e atualiza:

```ts
src/app/core/constants/app-version.ts
```

Esse script ajuda a manter a versão exibida no footer sincronizada com a versão do projeto.

### `audit-horizontal-overflow.mjs`

Usa Playwright para abrir a aplicação e testar várias rotas/hash e viewports.

O script compara `clientWidth` e `scrollWidth`, identifica elementos suspeitos de overflow horizontal e salva relatórios em `tmp/overflow-audit/` quando encontra problema.

## Boas Práticas

O projeto já aplica boas práticas importantes:

- componentização;
- uso de standalone components;
- conteúdo separado da UI;
- conteúdo fortemente tipado;
- uso de signals e computed;
- acessibilidade como requisito central;
- skip link;
- foco visível;
- landmarks semânticos;
- botões e links nativos;
- responsividade para mobile, tablet e desktop;
- links reais de currículo com download;
- SEO e metadados sociais;
- atenção a performance e LCP da imagem principal;
- versionamento centralizado.

## Fluxo Recomendado

Para futuras alterações:

1. Criar branch a partir da `develop`.
2. Fazer mudanças pequenas e bem delimitadas.
3. Evitar misturar conteúdo, layout, bugfix e performance no mesmo pacote.
4. Manter PT e EN alinhados quando houver alteração de texto.
5. Evitar alterações globais de CSS sem necessidade real.
6. Validar responsividade em larguras pequenas, tablets e desktop.
7. Checar versão em `package.json` e `src/app/core/constants/app-version.ts` antes de publicação.
8. Rodar validações apenas quando autorizado.
9. Abrir PR para `develop`.
10. Abrir PR de `develop` para `master` quando for produção.

## Riscos e Cuidados

Cuidados importantes para manter o projeto saudável:

- não usar `overflow-x: hidden` global para esconder problema visual;
- não mover CSS para `styles.scss` apenas para silenciar budget warning;
- não quebrar o alinhamento entre `content.pt.ts` e `content.en.ts`;
- não aumentar o bundle inicial sem justificativa;
- não alterar SEO, canonical ou metadados sociais sem intenção clara;
- não alterar URLs de currículo ou assets sem necessidade;
- não remover acessibilidade;
- não misturar feature, bugfix, performance e conteúdo no mesmo commit sem avisar;
- não executar comandos de npm, git, build, test, lint ou format sem autorização.
