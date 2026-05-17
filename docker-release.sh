#!/usr/bin/env bash
set -euo pipefail

MAJOR="1"
MINOR="1.0"
PATCH="1.0.0"

build_and_push() {
    docker build \
        -t "ghcr.io/fjrodafo/shrike-bot:${MAJOR}" \
        -t "ghcr.io/fjrodafo/shrike-bot:${MINOR}" \
        -t "ghcr.io/fjrodafo/shrike-bot:${PATCH}" \
        -t "ghcr.io/fjrodafo/shrike-bot:latest" \
        -t "fjrodafo/shrike-bot:${MAJOR}" \
        -t "fjrodafo/shrike-bot:${MINOR}" \
        -t "fjrodafo/shrike-bot:${PATCH}" \
        -t "fjrodafo/shrike-bot:latest" \
        .

    for tag in "${MAJOR}" "${MINOR}" "${PATCH}" "latest"; do
        docker push "ghcr.io/fjrodafo/shrike-bot:${tag}"
        docker push "fjrodafo/shrike-bot:${tag}"
    done
}

build_and_push
