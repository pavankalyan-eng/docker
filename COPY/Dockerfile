FROM almalinux:9
RUN dnf install nginx -y
RUN rm -rf /var/www/html/project/index.html
COPY index.html /var/www/html/project/index.html
CMD ["http", "-g","daemon off;"]