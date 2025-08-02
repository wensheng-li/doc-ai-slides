require("dotenv").config();

// Invoking the Configuration for the application
module.exports = {
  openaiApiKey: process.env.OPENAI_API_KEY,
  githubToken: process.env.GITHUB_TOKEN,
  repoUrl: process.env.REPO_URL,
  brandColor: process.env.BRAND_COLOR || "#2563EB",
  brandFont: process.env.BRAND_FONT || "Montserrat",
  openai: {
    model: "gpt-3.5-turbo",
    temperature: 0.3,
  },
};
