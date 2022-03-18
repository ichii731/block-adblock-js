// block-adblock.js v1.0.0 by ichii731 | MIT License
class AdDetect {
    constructor() {
        // define adsList
        this.adsList = [
            'pub_300x250',
            'pub_300x250m',
            'pub_728x90',
            'text-ad',
            'textAd',
            'text_ad',
            'text_ads',
            'text-ads',
            'text-ad-links',
            'ad-',
            'ad_',
            '_ad_',
            'ads-',
            '-ads-',
            'ads_',
            '_ads_',
            '-ads-',
            '_ads_',
            'ad',
            'ads',
            'adsbygoogle'
        ];
        this.init();
    }
    /**
     * initialize function
     */
    init() {
        //  要素を追加
        document.body.insertAdjacentHTML('beforeend', this.createDiv());
    }
    /**
     * Detect Adblock
     * @return {Boolean} true: adblock, false: not adblock
    */
    check() {
        let bait = document.defaultView.getComputedStyle(document.getElementById("ad_blocker_bait"), null);
        return bait.display === 'none' || bait.visibility === 'hidden';
    }
    /**
     * create html
     * @return {String} html element
     */
    createDiv() {
        // adsListを空白をつけてくっつける
        let classStr = this.adsList.join(' ');
        let html = `<div id="ad_blocker_bait" class="${classStr}"></div>`;
        return html;
    }
}
export default new AdDetect();
