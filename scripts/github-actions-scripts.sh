#!/bin/sh

function setup_environment_variables() {
  echo "SHOW_DEV_TOOLS_REACT_QUERY=false" > .env
  echo "API_BASE_URL=$API_BASE_URL" >> .env
}

function install_dependencies() {
  echo "Installing dependencies of $1"
  npm install
}

function build_app() {
  echo "Building $1"
  npm run build
}

function deploy_app() {
  echo "Deploying to $MY_S3_BUCKET/$1/$2"
}

function invalidate_cloudfront_cache() {
  echo "Invalidating cloudfront cache"
}

function build_and_deploy_app() {
  pushd apps/$1

  VERSION=''
  if [ "$2" != "IGNORE_VERSION_ON_DEPLOY" ]
  then
    VERSION="$(grep version package.json | sed 's/.*"version": "\(.*\)".*/\1/')/"
  fi

  install_dependencies $1
  build_app $1
  deploy_app $1 $VERSION

  popd
}

function test_app() {
  pushd apps/$1

  install_dependencies $1
  setup_environment_variables
  ls -lah
  cat .env
  npm test

  popd
}

function lint_app() {
  pushd apps/$1

  install_dependencies $1
  npm run lint

  popd
}

# build_and_deploy_app shared
# build_and_deploy_app home
# build_and_deploy_app auth
# build_and_deploy_app payment
# build_and_deploy_app shell
# build_and_deploy_app host IGNORE_VERSION_ON_DEPLOY
# invalidate_cloudfront_cache
