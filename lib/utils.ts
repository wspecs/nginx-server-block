const shell = require('shelljs');
const fs = require('fs');
import {siteAvailableConfig} from './site_config'

const ENCODING = 'utf8';

const getDefaultHTML = (name: string) => `<html>
  <head>
    <title>Welcome to ${name}!</title>
  </head>
  <body>
    <h1>Success! ${name} is working!</h1>
  </body>
</html>`;

export class ServerBlock {
  constructor(private name: string, private contactEmail: string) {
  }

  private getFolderName() {
    return `/var/www/${this.name}/public_html`;
  }

  createPublicFolder() {
    const path = this.getFolderName();
    if (!fs.existsSync(path)) {
      shell.mkdir('-p', path);
    }
  }

  addGlobalPermission(permission = 755) {
    shell.chmod(permission, '/var/www');
  }

  enableSite() {
    shell.rm('-rf', `/etc/nginx/sites-enabled/${this.name})`);
    shell.exec(`ln -s /etc/nginx/sites-available/${this.name} /etc/nginx/sites-enabled/`);
  }

  addCert() {
    if (this.contactEmail) {
      shell.exec(`sudo certbot --nginx -d ${this.name} --non-interactive --redirect --hsts --agree-tos -m ${this.contactEmail}`);
     }
  }

  async addIndexFile() {
    const file = this.getFolderName() + '/index.html';
    if (!fs.existsSync(file)) {
      await fs.writeFileSync(file, getDefaultHTML(this.name), ENCODING);
    }
  }

  async addAvailableSite() {
    const file = `/etc/nginx/sites-available/${this.name}`;
    if (!fs.existsSync(file)) {
      await fs.writeFileSync(file, siteAvailableConfig(this.name), ENCODING);
      this.addCert();
    }
  }

  async create() {
    this.createPublicFolder();
    this.addGlobalPermission();
    await this.addIndexFile();
    await this.addAvailableSite();
    this.enableSite();
  }
}
