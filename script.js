// Affiche automatiquement l'année actuelle dans le footer
document.getElementById("year").textContent = new Date().getFullYear();

// Affiche un petit message lorsque le recruteur clique sur "Envoyer un email"
document.getElementById("contactButton").addEventListener("click", function () {
  document.getElementById("message").textContent =
    "Votre logiciel de messagerie va s'ouvrir.";
});
