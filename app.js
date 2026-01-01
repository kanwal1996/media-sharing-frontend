console.log("Frontend loaded");

// Upload photo (Creator)
fetch("https://YOUR_FUNCTION_URL/api/upload", {
  method: "POST",
  body: formData
});

