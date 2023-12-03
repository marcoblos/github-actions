#!/bin/sh

source ~/.nvm/nvm.sh

function install {
    echo "Installing dependencies for $1"
    (cd apps/$1 && nvm install)
    (cd apps/$1 && nvm use)
    (cd apps/$1 && npm install)
}

install api
install dashboard
install host
install login
install payment
install paymentWidget
install shared
