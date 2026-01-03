console.log("Frontend loaded");

// Upload photo (Creator)
fetch("https://YOUR_FUNCTION_URL/api/upload", {
  method: "POST",
  body: formData
});


const API_URL = "https://media-sharing-backend.azurewebsites.net/api";

// Upload photo (Creator)
document.getElementById("uploadForm")?.addEventListener("submit", async (e) => {
  e.preventDefault();

  const fileInput = document.getElementById("photo");
  const formData = new FormData();
  formData.append("photo", fileInput.files[0]);

  await fetch(`${API_URL}/upload`, {
    method: "POST",
    body: fileInput.files[0]
  });

  alert("Photo uploaded!");
});

// Load photos (Consumer)
async function loadPhotos() {
  const res = await fetch(`${API_URL}/photos`);
  const photos = await res.json();

  const gallery = document.getElementById("gallery");
  gallery.innerHTML = "";

  photos.forEach(p => {
    const img = document.createElement("img");
    img.src = p.blobUrl;
    img.width = 200;
    gallery.appendChild(img);
  });
}

loadPhotos();
