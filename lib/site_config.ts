export const siteAvailableConfig = (name: string) => `server {
  root /var/www/${name}/public_html;

  index index.html;

  server_name ${name} www.${name};

  access_log /var/log/nginx/${name}.access.log;
  error_log /var/log/nginx/${name}.error.log;
}
`;
