FROM almalinux:9
RUN dnf install -y nginx \
 && rm -rf /usr/share/nginx/html/index.html \
 && dnf clean all
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
