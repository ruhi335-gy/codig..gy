// 🔍 Filter projects by search
const searchInput = document.getElementById("search");
const projectList = document.getElementById("project-list");

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  const projects = projectList.getElementsByClassName("project-card");

  Array.from(projects).forEach((project) => {
    const title = project.querySelector("h3").textContent.toLowerCase();
    const description = project.querySelector("p").textContent.toLowerCase();
    const matches = title.includes(query) || description.includes(query);
    project.style.display = matches ? "block" : "none";
  });
});

// 📤 Share Button Logic
document.querySelectorAll(".share-btn").forEach((btn) => {
  btn.addEventListener("click", async () => {
    const title = btn.dataset.title;
    const text = btn.dataset.text;
    const url = btn.dataset.url;

    if (navigator.share) {
      try {
        await navigator.share({ title, text, url });
        console.log("Project shared successfully!");
      } catch (err) {
        console.error("Error sharing project:", err);
      }
    } else {
      alert("Your browser doesn't support the Web Share API.");
    }
  });
});

// ✉️ Feedback Form Handling
const feedbackForm = document.getElementById("feedback-form");
const feedbackMsg = document.getElementById("feedback-msg");

feedbackForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const feedback = document.getElementById("feedback").value;

  feedbackMsg.textContent = "Thanks for your feedback!";
  feedbackForm.reset();

  setTimeout(() => {
    feedbackMsg.textContent = "";
  }, 4000);
});
