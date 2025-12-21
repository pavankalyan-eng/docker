FROM almalinux:9
RUN dnf install httpd  -y
RUN rm -rf /var/www/html/index.html
COPY index.html /var/www/html/index.html
CMD ["httpd", "-g","daemon off;"]