/**
 * block-adblock.js v1.0.0
 * (c)2022 ichii731 | MIT License
 */
declare class AdDetect {
    adsList: Array<string>;
    constructor();
    /**
     * initialize function
     */
    private init;
    /**
     * Detect Adblock
     * @return {Boolean} true: adblock, false: not adblock
    */
    check(): boolean;
    /**
     * create html
     * @return {String} html element
     */
    private createDiv;
}
declare const _default: AdDetect;
export default _default;
