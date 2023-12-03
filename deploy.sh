#!/bin/sh

function build_app() {
  echo "Building $1"
  npm run build
}

function deploy_app() {
  echo "Deploying to S3_BUCKET/$1/$2"
  # aws s3 cp dist/ s3://test.atimiflagstar.net/$1/$2 --recursive
}

function invalidate_cloudfront_cache() {
  echo "Invalidating cloudfront cache"
  # aws cloudfront create-invalidation --distribution-id EP5QH9K9BVFRD --paths "/host/*" "/auth/*" --no-cli-pager
}

function build_and_deploy_app() {
  pushd ../../apps/$1

  VERSION=''
  if [ "$2" != "IGNORE_VERSION_ON_DEPLOY" ]
  then
    VERSION="$(grep version package.json | sed 's/.*"version": "\(.*\)".*/\1/')/"
  fi

  build_app $1
  deploy_app $1 $VERSION
  popd
}

build_and_deploy_app shared
build_and_deploy_app home
build_and_deploy_app auth
build_and_deploy_app payment
build_and_deploy_app shell
build_and_deploy_app host IGNORE_VERSION_ON_DEPLOY
invalidate_cloudfront_cache
