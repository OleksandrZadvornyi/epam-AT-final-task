const BaseComponent = require('./base.component');

class HeaderComponent extends BaseComponent {
    constructor() {
        super('//div[@id="header_container"]');
    }

    get title() {
        return this.rootElement.$('//div[@class="app_logo"]');
    }
}

module.exports = HeaderComponent;