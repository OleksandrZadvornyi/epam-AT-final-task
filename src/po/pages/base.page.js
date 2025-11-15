/**
 * @class BasePage
 * @description A parent class for all Page Objects.
 * It contains common properties and methods
 * that all pages will inherit.
 */
class BasePage {
    constructor(url) {
        this.url = url;
    }

    /**
     * @method open
     * @description Navigates the browser to the page's specific URL
     * (combined with the baseUrl from wdio.conf.js).
     */
    open() {
        return browser.url(this.url);
    }
}

module.exports = BasePage;