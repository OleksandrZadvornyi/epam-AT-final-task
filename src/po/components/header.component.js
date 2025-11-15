const BaseComponent = require('./base.component');

/**
 * @class HeaderComponent
 * @description Represents the main header/navigation bar
 * component found at the top of the application.
 */
class HeaderComponent extends BaseComponent {
    constructor() {
        super('//div[@id="header_container"]');
    }

    /**
     * @property title
     * @description A getter for the application title 
     * element within the header
     */
    get title() {
        return this.rootElement.$('//div[@class="app_logo"]');
    }
}

module.exports = HeaderComponent;