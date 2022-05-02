FROM node:16-alpine as builder

WORKDIR /app
COPY . /app

RUN cat /app/.env.template | grep = | sort | sed -e 's|REACT_APP_\([a-zA-Z0-9_]*\)=\(.*\)|REACT_APP_\1=NGINX_REPLACE_\1|' > /app/.env.local

RUN [ -f ./package-lock.json ] && rm ./package-lock.json || echo "No package-lock.json found. Nothing to do."

# Check if a build is already present, and create one if not
RUN [ -d "./build" ] && echo "Project already built" \
    || ( npm install --frozen-lockfile && npm run build )

FROM nginx:alpine

RUN apk update && apk add bash

COPY nginx.conf /etc/nginx/conf.d/configfile.template

ENV PORT 3000

COPY --from=builder /app/build /usr/share/nginx/html
COPY .env.template /

EXPOSE 3000

COPY nginx-entrypoint.sh /
COPY generate-env-file.sh /

RUN chmod +x generate-env-file.sh

ENTRYPOINT [ "sh", "/nginx-entrypoint.sh" ]
