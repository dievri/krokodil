from openresty/openresty

RUN opm get bungle/lua-resty-reqargs 
RUN opm get ledgetech/lua-resty-http 

COPY /home/dievri/Documents/react/krokodil/build /user/local/openresty/nginx/html/
COPY /home/dievri/Documents/configs /etc/nginx/conf.d/
