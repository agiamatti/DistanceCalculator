FROM node:20-alpine

WORKDIR /app

ARG REACT_APP_API_URL
ENV REACT_APP_API_URL=${REACT_APP_API_URL:-https://x.com}

COPY . .
RUN npm install
RUN npm run build

FROM nginx:mainline-alpine

RUN mkdir -p /etc/nginx/logs
COPY --from=0 /app/nginx.conf /etc/nginx/nginx.conf
COPY --from=0 /app/build /etc/nginx/html/testmetrics
RUN chown -R nginx:nginx /etc/nginx/html
RUN chown -R nginx:nginx /etc/nginx/logs
