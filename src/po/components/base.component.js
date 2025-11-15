/**
 * @class BaseComponent
 * @description A parent class for all Component Objects.
 * It encapsulates the root selector for a component, allowing
 * elements to be searched *within* that component.
 */
class BaseComponent {
    constructor(rootSelector) {
        this.rootSelector = rootSelector;
    }

    /**
     * @property rootElement
     * @description The main WebdriverIO element for this component.
     * All other elements inside the component are found relative to this.
     */
    get rootElement() {
        return $(this.rootSelector);
    }
}

module.exports = BaseComponent;