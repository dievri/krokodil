from openresty/openresty

RUN opm get bungle/lua-resty-reqargs 
RUN opm get ledgetech/lua-resty-http 

WORKDIR /home/dievri/Documents
COPY react/krokodil/build /user/local/openresty/nginx/html/
COPY configs /etc/nginx/conf.d/
