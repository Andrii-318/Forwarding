document
  .getElementById("redirectButton1")
  .addEventListener("click", function () {
    redirectToUrl();
  });

document
  .getElementById("redirectButton2")
  .addEventListener("click", function () {
    redirectToUrl();
  });

function redirectToUrl() {
  let url = document.getElementById("urlInput").value.trim();

  if (url && !url.match(/^(http:\/\/|https:\/\/)/)) {
    url = "http://" + url;
  }

  if (url) {
    window.location.href = url;
  } else {
    alert("Будь ласка, введіть коректне посилання.");
  }
}
