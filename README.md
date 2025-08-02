# Introduction

This project is an application that using AI to parse the documents and generate the results into slides.

## Core functionalities

- Document Parsing: support to the multiple formats of documents
- AI Insights Extraction: use OpenAI GPT
- Image Generation: integration of DALL.E
- Brand output: maintain visual consistency

---

---

## Initialising Project

### Creating Directory of Project

`mkdir doc-ai-slides`  
`cd doc-ai-slides`

### Initialising GitHub

`git init`

### Creating the structure of Project

`mkdir -p src/{parser,ai,slides} docs assets output`  
`touch .gitignore .env.example README.md src/index.js`

### Initialising Node modules

`npm init -y`

## Installing packages

`npm install dotenv openai sharp pptxgenjs simple-git axios`  
`npm install -D nodemon`
