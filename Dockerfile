# ─────────
#  Stage 1 
# ─────────
FROM node:24-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --omit=dev

# ─────────
#  Stage 2 
# ─────────
FROM node:24-alpine AS runner
LABEL org.opencontainers.image.authors="Francisco José Rodríguez Afonso" \
      org.opencontainers.image.documentation="https://fjrodafo.github.io/ShrikeBot/" \
      org.opencontainers.image.source="https://github.com/FJrodafo/ShrikeBot" \
      org.opencontainers.image.version="1.0.0" \
      org.opencontainers.image.vendor="FJrodafo" \
      org.opencontainers.image.licenses="CC0-1.0" \
      org.opencontainers.image.title="ShrikeBot" \
      org.opencontainers.image.description="A simple ShrikeBot clone made in JavaScript!"
RUN apk add --no-cache curl \
    && addgroup --system --gid 1001 appgroup \
    && adduser --system --uid 1001 --ingroup appgroup appuser
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY src/ ./src/
COPY dashboard/ ./dashboard/
COPY package.json ./
EXPOSE 3000
USER appuser
CMD ["npm", "start"]
