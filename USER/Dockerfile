FROM almalinux:9
RUN useradd expense
USER expense
RUN dnf install nginx -y
CMD ["nginx", "-g","daemon off;"]