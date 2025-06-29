# Dockerfile
FROM ruby:3.1

# install build tools (for any native gems)
RUN apt-get update -qq \
 && apt-get install -y build-essential nodejs \
 && rm -rf /var/lib/apt/lists/*

WORKDIR /srv/jekyll

# install exactly what your CI does
COPY Gemfile* ./
RUN gem install bundler -v '2.5.22' \
 && bundle config set --local path 'vendor/bundle' \
 && bundle install   # uses your Gemfile.lock

# pull in the rest of your site
COPY . .

# serve on 0.0.0.0 so localhost:4000 works
ENTRYPOINT ["sh","-c"]
CMD ["bundle install && bundle exec jekyll serve --host 0.0.0.0"]

