/*const API_URL = "https://media-sharing-backend.azurewebsites.net/api";

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

loadPhotos();//** */

// 🔴 CHANGE THIS TO YOUR REAL FUNCTION APP URL
const API_BASE = "https://media-sharing-backend.azurewebsites.net/api";

// Navigation
function goToCreator() {
  window.location.href = "creator.html";
}

function goToLogin() {
  window.location.href = "login.html";
}

function goBack() {
  window.location.href = "index.html";
}

function loginCreator() {
  window.location.href = "creator.html";
}

function loginConsumer() {
  window.location.href = "index.html";
}

// Upload photo
function uploadPhoto() {
  const image = document.getElementById("image").files[0];
  const title = document.getElementById("title").value;
  const caption = document.getElementById("caption").value;

  if (!image) {
    alert("Please select an image");
    return;
  }

  const formData = new FormData();
  formData.append("image", image);
  formData.append("title", title);
  formData.append("caption", caption);

  fetch(`${API_BASE}/upload`, {
    method: "POST",
    body: formData
  })
  .then(res => res.json())
  .then(data => {
    alert("Upload successful!");
    console.log(data);
  })
  .catch(err => {
    alert("Upload failed");
    console.error(err);
  });
}

// Load photos
function loadPhotos() {
  fetch(`${API_BASE}/photos`)
    .then(res => res.json())
    .then(data => {
      const gallery = document.getElementById("gallery");
      gallery.innerHTML = "";

      data.forEach(photo => {
        const img = document.createElement("img");
        img.src = photo.imageUrl;
        img.width = 200;
        img.style.margin = "10px";
        gallery.appendChild(img);
      });
    })
    .catch(err => console.error(err));
}

