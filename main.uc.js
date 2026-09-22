// Mod: Tab troca para a próxima guia (global, via <key> XUL)
// Pressionar Tab (sem modificadores) avança para a próxima aba do navegador,
// mesmo com o foco dentro de uma página comum. Ignora o atalho quando o foco
// está em um campo editável (input, textarea, select ou contentEditable).

(function () {
  function isEditableTarget() {
    const el = Services.focus.focusedElement || document.activeElement;
    if (!el) return false;
    const tag = el.tagName ? el.tagName.toLowerCase() : "";
    return (
      el.isContentEditable ||
      tag === "input" ||
      tag === "textarea" ||
      tag === "select"
    );
  }

  function addKey() {
    if (document.getElementById("key_tabSwitchNextTab")) return;
    const keyset = document.getElementById("mainKeyset");
    if (!keyset) return;

    const key = document.createXULElement("key");
    key.id = "key_tabSwitchNextTab";
    key.setAttribute("keycode", "VK_TAB");
    key.setAttribute("oncommand", "void 0;");
    key.addEventListener("command", () => {
      if (!isEditableTarget()) {
        gBrowser.tabContainer.advanceSelectedTab(1, true);
      }
    });
    keyset.appendChild(key);
  }

  if (typeof gBrowserInit !== "undefined" && gBrowserInit.delayedStartupFinished) {
    addKey();
  } else {
    const observer = (subject, topic) => {
      if (topic === "browser-delayed-startup-finished" && subject === window) {
        Services.obs.removeObserver(observer, topic);
        addKey();
      }
    };
    Services.obs.addObserver(observer, "browser-delayed-startup-finished");
  }
})();
