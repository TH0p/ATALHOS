# Tab Switch Tabs

Mod para Zen Browser (via Sine) que faz a tecla **Tab** (sem modificadores)
trocar para a próxima aba do navegador. Ignora o atalho quando o foco está
em um campo editável (input, textarea, select, contentEditable).

## Instalação (Sine)

1. Suba esta pasta como um repositório no GitHub (ou como uma subpasta de um
   repositório maior — nesse caso, aponte o Sine para a subpasta).
2. No Zen Browser, abra as configurações do Sine.
3. Ative a instalação de mods não publicados ("unpublished mods" / "unlisted
   repository install").
4. Cole a URL do repositório (ex: `https://github.com/seu-usuario/tab-switch-mod`).
5. Como este mod usa JavaScript, o Sine pode pedir para habilitar a opção de
   "unsafe JS" (JS não seguro) — ative se solicitado.
6. Reinicie o Zen Browser (ou use a opção de rebuild de mods do Sine, se
   disponível).

## Observação

O script usa o sufixo `.uc.js` (convenção do fx-autoconfig/userChrome.js,
que é o que o Sine usa por baixo dos panos para carregar scripts
automaticamente). Se o `theme.json` não for reconhecido, tente remover esse
arquivo e deixar só o `main.uc.js` na raiz do repositório.
