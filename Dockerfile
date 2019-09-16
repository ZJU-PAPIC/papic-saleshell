FROM nginx:stable-alpine

RUN rm /etc/nginx/conf.d/default.conf

ADD saleshell/nginx.conf /etc/nginx/conf.d/

COPY saleshell/build  /usr/share/nginx/html/

EXPOSE 80
