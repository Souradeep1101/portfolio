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

## Local development with Docker Compose

Use the provided `docker-compose.yml` to build and run the site in one command. This is the *only* supported local workflow:

```bash
# Build the image and bring up the container (creates named volumes for build output)
docker-compose up --build

# Then browse to:
http://localhost:4000
```

To stop the site and remove containers and networks, run:

```bash
docker-compose down -v
```

Any edits to your source files will trigger Jekyll’s incremental rebuild with live-reload. `_site` and `vendor` are kept inside Docker volumes and will not clutter your host filesystem.

> **Note:** The other two methods (plain `docker run` commands and VS Code Tasks/Launch) are now **deprecated and no longer supported**. Please use Docker Compose for all local development.

---

## Troubleshooting

If you have a question about using Jekyll, start a discussion on the [Jekyll Forum](https://talk.jekyllrb.com/) or [StackOverflow](https://stackoverflow.com/questions/tagged/jekyll). Other resources:

- [Ruby 101](https://jekyllrb.com/docs/ruby-101/)
- [Setting up a Jekyll site with GitHub Pages](https://jekyllrb.com/docs/github-pages/)
- [Configuring GitHub Metadata](https://github.com/jekyll/github-metadata/blob/master/docs/configuration.md#configuration) to work properly when developing locally and avoid `No GitHub API authentication could be found. Some fields may be missing or have incorrect data.` warnings.
