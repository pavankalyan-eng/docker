FROM almalinux:9
RUN dnf install -y nginx \
 && rm -rf /usr/share/nginx/html/index.html \
 && dnf clean all
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
