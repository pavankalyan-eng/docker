FROM almalinux:9
RUN dnf install httpd -y
COPY index.html /var/www/html/index.html
CMD ["httpd", "-D", "FOREGROUND"]