FROM almalinux:9
RUN dnf install httpd  -y
RUN rm -rf /var/www/html/project/index.html
COPY index.html /var/www/html/project/index.html
CMD ["httpd", "-g","daemon off;"]