FROM node:20-alpine

WORKDIR /app

ARG REACT_APP_API_URL
ENV REACT_APP_API_URL=${REACT_APP_API_URL:-http://localhost:3030/}

COPY . .
RUN npm install
RUN npm run build

FROM nginx:mainline-alpine

COPY --from=0 /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 3011
CMD ["nginx", "-g", "daemon off;"]
