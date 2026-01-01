console.log("Frontend loaded");
const API_URL = "https://your-backend.azurewebsites.net/api";

fetch(`${API_URL}/uploadPhoto`, {
  method: 'POST',
  headers: {
    'x-user-role': 'creator'
  },
  body: formData
});
