// Handles contact form submission and success message display
const form = document.getElementById("myForm");
const successMessage = document.getElementById("successMessage");

if (form && successMessage) {
  form.addEventListener("submit", async function (e) {
    e.preventDefault(); // stop default submit
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        form.reset(); // clear form fields
        successMessage.style.display = "block";
      } else {
        alert("Oops! Something went wrong.");
      }
    } catch (error) {
      alert("Network error. Please try again.");
    }
  });
}
