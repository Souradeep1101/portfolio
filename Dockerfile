FROM ruby:3.1

# install build tools
RUN apt-get update -qq \
 && apt-get install -y build-essential nodejs \
 && rm -rf /var/lib/apt/lists/*

WORKDIR /srv/jekyll

COPY Gemfile* ./
RUN gem install bundler -v '2.5.22' \
 && bundle config set --local path 'vendor/bundle' \
 && bundle install

COPY . .

# declare that we'll mount the site here  
VOLUME ["/srv/jekyll"]  

# expose Jekyll's default port  
EXPOSE 4000  

# set environment to production for google analytics
ENV JEKYLL_ENV=production

# on container start: install any new gems + serve  
# ENTRYPOINT ["sh", "-c"]  
# CMD ["bundle install && bundle exec jekyll serve --host 0.0.0.0 --livereload --incremental --force_polling"]
ENTRYPOINT ["bundle", "exec", "jekyll", "serve"]
CMD ["--host","0.0.0.0","--livereload","--incremental","--force_polling","--baseurl",""]