# Minimal Mistakes remote theme starter

Click [**Use this template**](https://github.com/mmistakes/mm-github-pages-starter/generate) button above for the quickest method of getting started with the [Minimal Mistakes Jekyll theme](https://github.com/mmistakes/minimal-mistakes/docs).

Contains basic configuration to get you a site with:

- Sample posts.
- Sample top navigation.
- Sample author sidebar with social links.
- Sample footer links.
- Paginated home page.
- Archive pages for posts grouped by year, category, and tag.
- Sample about page.
- Sample 404 page.
- Site wide search.

Replace sample content with your own and [configure as necessary](https://mmistakes.github.io/minimal-mistakes/docs/configuration/).

---

## Local development with Docker

You can run your Jekyll site locally with Docker in three ways:

### 1. Using plain CMD commands

1. **Build the image**  
   ```bash
   docker build -t portfolio .
   ```
2. **Run the container**  
   ```bash
   docker run --rm      -p 4000:4000      -v "${PWD}:/srv/jekyll"      portfolio      bundle exec jekyll serve        --host 0.0.0.0        --livereload        --incremental        --force_polling
   ```
3. **Browse**  
   Open <http://localhost:4000> in your browser. Changes to your files will trigger live regeneration.

### 2. Via VS Code Tasks (Command Palette)

- `.vscode/tasks.json` already defines two tasks:

  ```json
  {
    "label": "docker-build",
    "type": "shell",
    "command": "docker build -t portfolio .",
    "problemMatcher": []
  },
  {
    "label": "docker-run",
    "type": "shell",
    "dependsOn": "docker-build",
    "command": "docker run --rm -p 4000:4000 -v "${workspaceFolder}:/srv/jekyll" portfolio",
    "problemMatcher": []
  }
  ```
- **Run**  
  Press **Ctrl+Shift+P** → **Tasks: Run Task** → **docker-run**.
- **Browse**  
  Open <http://localhost:4000>.

### 3. Via VS Code Launch (F5 / Ctrl+F5)

- `.vscode/launch.json` defines a configuration that invokes the **docker-run** task:

  ```json
  {
    "name": "🚀 Run Jekyll in Docker",
    "type": "pwa-node",
    "request": "launch",
    "preLaunchTask": "docker-run",
    "program": "${workspaceFolder}",
    "console": "integratedTerminal"
  }
  ```
- **Run**  
  Press **F5** (Start Debugging) or **Ctrl+F5** (Run Without Debugging).
- **Browse**  
  Open <http://localhost:4000>.

---

## Troubleshooting

If you have a question about using Jekyll, start a discussion on the [Jekyll Forum](https://talk.jekyllrb.com/) or [StackOverflow](https://stackoverflow.com/questions/tagged/jekyll). Other resources:

- [Ruby 101](https://jekyllrb.com/docs/ruby-101/)
- [Setting up a Jekyll site with GitHub Pages](https://jekyllrb.com/docs/github-pages/)
- [Configuring GitHub Metadata](https://github.com/jekyll/github-metadata/blob/master/docs/configuration.md#configuration) to work properly when developing locally and avoid `No GitHub API authentication could be found. Some fields may be missing or have incorrect data.` warnings.
