// Mod: Tab troca para a próxima guia
// Pressionar Tab (sem modificadores) avança para a próxima aba do navegador.
// Ignora o atalho quando o foco está em um campo editável (input, textarea,
// select ou contentEditable), para não quebrar a navegação normal em formulários.

window.addEventListener(
  "keydown",
  (e) => {
    if (e.key === "Tab" && !e.ctrlKey && !e.altKey && !e.metaKey && !e.shiftKey) {
      const active = document.activeElement;
      const tag = active?.tagName?.toLowerCase();
      const isEditable =
        active?.isContentEditable ||
        tag === "input" ||
        tag === "textarea" ||
        tag === "select";

      if (!isEditable) {
        e.preventDefault();
        gBrowser.tabContainer.advanceSelectedTab(1, true);
      }
    }
  },
  true
);
