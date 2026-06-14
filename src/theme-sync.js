/* ==========================================================================
   PROJETO AGROPÓLLEN - PRÉ-RENDERIZADOR DE TEMA
   ARQUIVO: theme-sync.js
   DESCRIÇÃO: Aplica as preferências de contraste e zoom de fonte armazenadas no
             localStorage antes da pintura da tela para evitar flicker visual.
   ========================================================================== */

const temaSalvo = localStorage.getItem("agropollen-tema-v4") || "claro";
const escalaSalva = localStorage.getItem("agropollen-escala-fonte-v4") || "1.0";

// Sincronização do tema de contraste
if (temaSalvo === "escuro") {
  document.documentElement.classList.add("tema-escuro");
} else {
  document.documentElement.classList.remove("tema-escuro");
}

// Sincronização do tamanho da fonte global
document.documentElement.style.setProperty("--escala-letra", escalaSalva);
