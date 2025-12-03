# ---------- builder ----------
FROM node:20-alpine AS builder
WORKDIR /app

COPY package*.json ./
RUN npm ci --legacy-peer-deps

COPY . .
ENV GENERATE_SOURCEMAP=false
RUN npm run build --silent

# ---------- runner ----------
FROM node:20-slim AS runner
WORKDIR /app

RUN npm install -g serve@14

COPY --from=builder /app/build ./build

EXPOSE 3000
CMD ["serve", "-s", "build", "-l", "3000"]