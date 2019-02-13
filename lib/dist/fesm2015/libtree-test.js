import { Injectable, Component, Input, Directive, ElementRef, HostListener, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class InitData {
    /**
     * @param {?} argument
     */
    constructor(argument) {
        // code...
    }
}
InitData.libData = [{
        "Type": 1,
        "Title": "10. Root Node",
        "isTreeOpen": true,
        "Uri": "404543",
        "Theme": "#600",
        "IconOpen": "glyphicon-briefcase",
        "IconClose": "glyphicon-briefcase",
        "BgColor": "#600",
        "FontColor": "white",
        "ChildRecords": [{
                "Title": "101. Child Node",
                "Type": 1,
                "isTreeOpen": false,
                "Uri": "404543",
                "Theme": "#600",
                "IconOpen": "glyphicon-folder-open",
                "IconClose": "glyphicon-folder-close",
                "BgColor": "#600",
                "FontColor": "white",
                "ChildRecords": [{
                        "Type": 3,
                        "Title": "1001. Grandson Node",
                        "isTreeOpen": false,
                        "Uri": "404543",
                        "Theme": "#600",
                        "IconOpen": "glyphicon-folder-open",
                        "IconClose": "glyphicon-folder-close",
                        "BgColor": "#600",
                        "FontColor": "white",
                    }]
            },
            {
                "Title": "102. Child Node",
                "Type": 1,
                "isTreeOpen": false,
                "Uri": "404543",
                "Theme": "#600",
                "IconOpen": "glyphicon-folder-open",
                "IconClose": "glyphicon-folder-close",
                "BgColor": "#600",
                "FontColor": "white",
                "ChildRecords": [{
                        "Type": 3,
                        "Title": "1002. Grandson Node",
                        "isTreeOpen": false,
                        "Uri": "404543",
                        "Theme": "#600",
                        "IconOpen": "glyphicon-folder-open",
                        "IconClose": "glyphicon-folder-close",
                        "BgColor": "#600",
                        "FontColor": "white",
                    }]
            },
            {
                "Title": "103. Child Node",
                "Type": 1,
                "isTreeOpen": false,
                "Uri": "404543",
                "Theme": "#600",
                "IconOpen": "glyphicon-folder-open",
                "IconClose": "glyphicon-folder-close",
                "BgColor": "#600",
                "FontColor": "white",
                "ChildRecords": [{
                        "Type": 3,
                        "Title": "1003. Grandson Node",
                        "isTreeOpen": false,
                        "Uri": "404543",
                        "Theme": "#600",
                        "IconOpen": "glyphicon-folder-open",
                        "IconClose": "glyphicon-folder-close",
                        "BgColor": "#600",
                        "FontColor": "white",
                    }]
            }]
    }];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class LibtreeUtil {
    constructor() {
    }
    /**
     * @param {?} val
     * @return {?}
     */
    static isBlank(val) {
        if (val !== null &&
            val !== undefined &&
            val !== '' &&
            val !== 'null' &&
            val != 'undefined' &&
            val.replace(/^\s+|\s+$/gm, '') !== '') {
            return false;
        }
        return true;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    static isNull(val) {
        if (val !== null && val !== undefined) {
            return false;
        }
        return true;
    }
}
LibtreeUtil.decorators = [
    { type: Injectable },
];
/** @nocollapse */
LibtreeUtil.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class LibtreeComponent {
    constructor() {
        this.isShow = true;
        this.selfInvokeFlag = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.selfInvokeFlag && LibtreeUtil.isNull(this.libData)) {
            this.libData = InitData.libData;
        }
    }
    /**
     * @param {?} fol
     * @return {?}
     */
    iconClick(fol) {
        fol.isTreeOpen = !fol.isTreeOpen;
        console.log('IconClick');
    }
    /**
     * @param {?} uri
     * @param {?} flag
     * @return {?}
     */
    moveTo(uri, flag) {
        console.log('TitleClick');
    }
}
LibtreeComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-tree',
                template: `<div class="lib-tree">
  <ul class="ul-padding-inline-start">
    <li *ngFor="let fol of libData" class="li-list-style-none">
      <div *ngIf="isShow">
        <i class="glyphicon" [ngClass]="fol.isTreeOpen?fol.IconOpen:fol.IconClose" [ngStyle]="{'color': fol.Theme}" (click)="iconClick(fol)"></i>&nbsp;&nbsp;
        <label class="text-font" (click)="moveTo(fol.Uri,false)" changeThemeWhenHover [bgColor]="fol.BgColor" [fontColor]="fol.FontColor">{{fol.Title}}</label>
      </div>
      <lib-tree [libData]="fol.ChildRecords" [selfInvokeFlag]=true *ngIf="fol.isTreeOpen"></lib-tree>
    </li>
  </ul>
</div>`,
                styles: [`@font-face{font-family:'Glyphicons Halflings';src:url(/assets/fonts/glyphicons-halflings-regular.eot);src:url(/assets/fonts/glyphicons-halflings-regular.eot?#iefix) format('embedded-opentype'),url(/assets/fonts/glyphicons-halflings-regular.woff2) format('woff2'),url(/assets/fonts/glyphicons-halflings-regular.woff) format('woff'),url(/assets/fonts/glyphicons-halflings-regular.ttf) format('truetype'),url(/assets/fonts/glyphicons-halflings-regular.svg#glyphicons_halflingsregular) format('svg')}.glyphicon{position:relative;top:1px;display:inline-block;font-family:'Glyphicons Halflings';font-style:normal;font-weight:400;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.glyphicon-asterisk:before{content:"\\002a"}.glyphicon-plus:before{content:"\\002b"}.glyphicon-eur:before,.glyphicon-euro:before{content:"\\20ac"}.glyphicon-minus:before{content:"\\2212"}.glyphicon-cloud:before{content:"\\2601"}.glyphicon-envelope:before{content:"\\2709"}.glyphicon-pencil:before{content:"\\270f"}.glyphicon-glass:before{content:"\\e001"}.glyphicon-music:before{content:"\\e002"}.glyphicon-search:before{content:"\\e003"}.glyphicon-heart:before{content:"\\e005"}.glyphicon-star:before{content:"\\e006"}.glyphicon-star-empty:before{content:"\\e007"}.glyphicon-user:before{content:"\\e008"}.glyphicon-film:before{content:"\\e009"}.glyphicon-th-large:before{content:"\\e010"}.glyphicon-th:before{content:"\\e011"}.glyphicon-th-list:before{content:"\\e012"}.glyphicon-ok:before{content:"\\e013"}.glyphicon-remove:before{content:"\\e014"}.glyphicon-zoom-in:before{content:"\\e015"}.glyphicon-zoom-out:before{content:"\\e016"}.glyphicon-off:before{content:"\\e017"}.glyphicon-signal:before{content:"\\e018"}.glyphicon-cog:before{content:"\\e019"}.glyphicon-trash:before{content:"\\e020"}.glyphicon-home:before{content:"\\e021"}.glyphicon-file:before{content:"\\e022"}.glyphicon-time:before{content:"\\e023"}.glyphicon-road:before{content:"\\e024"}.glyphicon-download-alt:before{content:"\\e025"}.glyphicon-download:before{content:"\\e026"}.glyphicon-upload:before{content:"\\e027"}.glyphicon-inbox:before{content:"\\e028"}.glyphicon-play-circle:before{content:"\\e029"}.glyphicon-repeat:before{content:"\\e030"}.glyphicon-refresh:before{content:"\\e031"}.glyphicon-list-alt:before{content:"\\e032"}.glyphicon-lock:before{content:"\\e033"}.glyphicon-flag:before{content:"\\e034"}.glyphicon-headphones:before{content:"\\e035"}.glyphicon-volume-off:before{content:"\\e036"}.glyphicon-volume-down:before{content:"\\e037"}.glyphicon-volume-up:before{content:"\\e038"}.glyphicon-qrcode:before{content:"\\e039"}.glyphicon-barcode:before{content:"\\e040"}.glyphicon-tag:before{content:"\\e041"}.glyphicon-tags:before{content:"\\e042"}.glyphicon-book:before{content:"\\e043"}.glyphicon-bookmark:before{content:"\\e044"}.glyphicon-print:before{content:"\\e045"}.glyphicon-camera:before{content:"\\e046"}.glyphicon-font:before{content:"\\e047"}.glyphicon-bold:before{content:"\\e048"}.glyphicon-italic:before{content:"\\e049"}.glyphicon-text-height:before{content:"\\e050"}.glyphicon-text-width:before{content:"\\e051"}.glyphicon-align-left:before{content:"\\e052"}.glyphicon-align-center:before{content:"\\e053"}.glyphicon-align-right:before{content:"\\e054"}.glyphicon-align-justify:before{content:"\\e055"}.glyphicon-list:before{content:"\\e056"}.glyphicon-indent-left:before{content:"\\e057"}.glyphicon-indent-right:before{content:"\\e058"}.glyphicon-facetime-video:before{content:"\\e059"}.glyphicon-picture:before{content:"\\e060"}.glyphicon-map-marker:before{content:"\\e062"}.glyphicon-adjust:before{content:"\\e063"}.glyphicon-tint:before{content:"\\e064"}.glyphicon-edit:before{content:"\\e065"}.glyphicon-share:before{content:"\\e066"}.glyphicon-check:before{content:"\\e067"}.glyphicon-move:before{content:"\\e068"}.glyphicon-step-backward:before{content:"\\e069"}.glyphicon-fast-backward:before{content:"\\e070"}.glyphicon-backward:before{content:"\\e071"}.glyphicon-play:before{content:"\\e072"}.glyphicon-pause:before{content:"\\e073"}.glyphicon-stop:before{content:"\\e074"}.glyphicon-forward:before{content:"\\e075"}.glyphicon-fast-forward:before{content:"\\e076"}.glyphicon-step-forward:before{content:"\\e077"}.glyphicon-eject:before{content:"\\e078"}.glyphicon-chevron-left:before{content:"\\e079"}.glyphicon-chevron-right:before{content:"\\e080"}.glyphicon-plus-sign:before{content:"\\e081"}.glyphicon-minus-sign:before{content:"\\e082"}.glyphicon-remove-sign:before{content:"\\e083"}.glyphicon-ok-sign:before{content:"\\e084"}.glyphicon-question-sign:before{content:"\\e085"}.glyphicon-info-sign:before{content:"\\e086"}.glyphicon-screenshot:before{content:"\\e087"}.glyphicon-remove-circle:before{content:"\\e088"}.glyphicon-ok-circle:before{content:"\\e089"}.glyphicon-ban-circle:before{content:"\\e090"}.glyphicon-arrow-left:before{content:"\\e091"}.glyphicon-arrow-right:before{content:"\\e092"}.glyphicon-arrow-up:before{content:"\\e093"}.glyphicon-arrow-down:before{content:"\\e094"}.glyphicon-share-alt:before{content:"\\e095"}.glyphicon-resize-full:before{content:"\\e096"}.glyphicon-resize-small:before{content:"\\e097"}.glyphicon-exclamation-sign:before{content:"\\e101"}.glyphicon-gift:before{content:"\\e102"}.glyphicon-leaf:before{content:"\\e103"}.glyphicon-fire:before{content:"\\e104"}.glyphicon-eye-open:before{content:"\\e105"}.glyphicon-eye-close:before{content:"\\e106"}.glyphicon-warning-sign:before{content:"\\e107"}.glyphicon-plane:before{content:"\\e108"}.glyphicon-calendar:before{content:"\\e109"}.glyphicon-random:before{content:"\\e110"}.glyphicon-comment:before{content:"\\e111"}.glyphicon-magnet:before{content:"\\e112"}.glyphicon-chevron-up:before{content:"\\e113"}.glyphicon-chevron-down:before{content:"\\e114"}.glyphicon-retweet:before{content:"\\e115"}.glyphicon-shopping-cart:before{content:"\\e116"}.glyphicon-folder-close:before{content:"\\e117"}.glyphicon-folder-open:before{content:"\\e118"}.glyphicon-resize-vertical:before{content:"\\e119"}.glyphicon-resize-horizontal:before{content:"\\e120"}.glyphicon-hdd:before{content:"\\e121"}.glyphicon-bullhorn:before{content:"\\e122"}.glyphicon-bell:before{content:"\\e123"}.glyphicon-certificate:before{content:"\\e124"}.glyphicon-thumbs-up:before{content:"\\e125"}.glyphicon-thumbs-down:before{content:"\\e126"}.glyphicon-hand-right:before{content:"\\e127"}.glyphicon-hand-left:before{content:"\\e128"}.glyphicon-hand-up:before{content:"\\e129"}.glyphicon-hand-down:before{content:"\\e130"}.glyphicon-circle-arrow-right:before{content:"\\e131"}.glyphicon-circle-arrow-left:before{content:"\\e132"}.glyphicon-circle-arrow-up:before{content:"\\e133"}.glyphicon-circle-arrow-down:before{content:"\\e134"}.glyphicon-globe:before{content:"\\e135"}.glyphicon-wrench:before{content:"\\e136"}.glyphicon-tasks:before{content:"\\e137"}.glyphicon-filter:before{content:"\\e138"}.glyphicon-briefcase:before{content:"\\e139"}.glyphicon-fullscreen:before{content:"\\e140"}.glyphicon-dashboard:before{content:"\\e141"}.glyphicon-paperclip:before{content:"\\e142"}.glyphicon-heart-empty:before{content:"\\e143"}.glyphicon-link:before{content:"\\e144"}.glyphicon-phone:before{content:"\\e145"}.glyphicon-pushpin:before{content:"\\e146"}.glyphicon-usd:before{content:"\\e148"}.glyphicon-gbp:before{content:"\\e149"}.glyphicon-sort:before{content:"\\e150"}.glyphicon-sort-by-alphabet:before{content:"\\e151"}.glyphicon-sort-by-alphabet-alt:before{content:"\\e152"}.glyphicon-sort-by-order:before{content:"\\e153"}.glyphicon-sort-by-order-alt:before{content:"\\e154"}.glyphicon-sort-by-attributes:before{content:"\\e155"}.glyphicon-sort-by-attributes-alt:before{content:"\\e156"}.glyphicon-unchecked:before{content:"\\e157"}.glyphicon-expand:before{content:"\\e158"}.glyphicon-collapse-down:before{content:"\\e159"}.glyphicon-collapse-up:before{content:"\\e160"}.glyphicon-log-in:before{content:"\\e161"}.glyphicon-flash:before{content:"\\e162"}.glyphicon-log-out:before{content:"\\e163"}.glyphicon-new-window:before{content:"\\e164"}.glyphicon-record:before{content:"\\e165"}.glyphicon-save:before{content:"\\e166"}.glyphicon-open:before{content:"\\e167"}.glyphicon-saved:before{content:"\\e168"}.glyphicon-import:before{content:"\\e169"}.glyphicon-export:before{content:"\\e170"}.glyphicon-send:before{content:"\\e171"}.glyphicon-floppy-disk:before{content:"\\e172"}.glyphicon-floppy-saved:before{content:"\\e173"}.glyphicon-floppy-remove:before{content:"\\e174"}.glyphicon-floppy-save:before{content:"\\e175"}.glyphicon-floppy-open:before{content:"\\e176"}.glyphicon-credit-card:before{content:"\\e177"}.glyphicon-transfer:before{content:"\\e178"}.glyphicon-cutlery:before{content:"\\e179"}.glyphicon-header:before{content:"\\e180"}.glyphicon-compressed:before{content:"\\e181"}.glyphicon-earphone:before{content:"\\e182"}.glyphicon-phone-alt:before{content:"\\e183"}.glyphicon-tower:before{content:"\\e184"}.glyphicon-stats:before{content:"\\e185"}.glyphicon-sd-video:before{content:"\\e186"}.glyphicon-hd-video:before{content:"\\e187"}.glyphicon-subtitles:before{content:"\\e188"}.glyphicon-sound-stereo:before{content:"\\e189"}.glyphicon-sound-dolby:before{content:"\\e190"}.glyphicon-sound-5-1:before{content:"\\e191"}.glyphicon-sound-6-1:before{content:"\\e192"}.glyphicon-sound-7-1:before{content:"\\e193"}.glyphicon-copyright-mark:before{content:"\\e194"}.glyphicon-registration-mark:before{content:"\\e195"}.glyphicon-cloud-download:before{content:"\\e197"}.glyphicon-cloud-upload:before{content:"\\e198"}.glyphicon-tree-conifer:before{content:"\\e199"}.glyphicon-tree-deciduous:before{content:"\\e200"}.glyphicon-cd:before{content:"\\e201"}.glyphicon-save-file:before{content:"\\e202"}.glyphicon-open-file:before{content:"\\e203"}.glyphicon-level-up:before{content:"\\e204"}.glyphicon-copy:before{content:"\\e205"}.glyphicon-paste:before{content:"\\e206"}.glyphicon-alert:before{content:"\\e209"}.glyphicon-equalizer:before{content:"\\e210"}.glyphicon-king:before{content:"\\e211"}.glyphicon-queen:before{content:"\\e212"}.glyphicon-pawn:before{content:"\\e213"}.glyphicon-bishop:before{content:"\\e214"}.glyphicon-knight:before{content:"\\e215"}.glyphicon-baby-formula:before{content:"\\e216"}.glyphicon-tent:before{content:"\\26fa"}.glyphicon-blackboard:before{content:"\\e218"}.glyphicon-bed:before{content:"\\e219"}.glyphicon-apple:before{content:"\\f8ff"}.glyphicon-erase:before{content:"\\e221"}.glyphicon-hourglass:before{content:"\\231b"}.glyphicon-lamp:before{content:"\\e223"}.glyphicon-duplicate:before{content:"\\e224"}.glyphicon-piggy-bank:before{content:"\\e225"}.glyphicon-scissors:before{content:"\\e226"}.glyphicon-bitcoin:before,.glyphicon-btc:before,.glyphicon-xbt:before{content:"\\e227"}.glyphicon-jpy:before,.glyphicon-yen:before{content:"\\00a5"}.glyphicon-rub:before,.glyphicon-ruble:before{content:"\\20bd"}.glyphicon-scale:before{content:"\\e230"}.glyphicon-ice-lolly:before{content:"\\e231"}.glyphicon-ice-lolly-tasted:before{content:"\\e232"}.glyphicon-education:before{content:"\\e233"}.glyphicon-option-horizontal:before{content:"\\e234"}.glyphicon-option-vertical:before{content:"\\e235"}.glyphicon-menu-hamburger:before{content:"\\e236"}.glyphicon-modal-window:before{content:"\\e237"}.glyphicon-oil:before{content:"\\e238"}.glyphicon-grain:before{content:"\\e239"}.glyphicon-sunglasses:before{content:"\\e240"}.glyphicon-text-size:before{content:"\\e241"}.glyphicon-text-color:before{content:"\\e242"}.glyphicon-text-background:before{content:"\\e243"}.glyphicon-object-align-top:before{content:"\\e244"}.glyphicon-object-align-bottom:before{content:"\\e245"}.glyphicon-object-align-horizontal:before{content:"\\e246"}.glyphicon-object-align-left:before{content:"\\e247"}.glyphicon-object-align-vertical:before{content:"\\e248"}.glyphicon-object-align-right:before{content:"\\e249"}.glyphicon-triangle-right:before{content:"\\e250"}.glyphicon-triangle-left:before{content:"\\e251"}.glyphicon-triangle-bottom:before{content:"\\e252"}.glyphicon-triangle-top:before{content:"\\e253"}.glyphicon-console:before{content:"\\e254"}.glyphicon-superscript:before{content:"\\e255"}.glyphicon-subscript:before{content:"\\e256"}.glyphicon-menu-left:before{content:"\\e257"}.glyphicon-menu-right:before{content:"\\e258"}.glyphicon-menu-down:before{content:"\\e259"}.glyphicon-menu-up:before{content:"\\e260"}.text-font{font-family:Tahoma;font-size:13px;color:#666;font-weight:400}.li-list-style-none{list-style:none}.ul-padding-inline-start{-webkit-padding-start:20px;padding-inline-start:20px}`]
            },] },
];
/** @nocollapse */
LibtreeComponent.ctorParameters = () => [];
LibtreeComponent.propDecorators = {
    "libData": [{ type: Input },],
    "selfInvokeFlag": [{ type: Input },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ChangeThemeWhenHoverDirective {
    /**
     * @param {?} el
     */
    constructor(el) {
        this.el = el;
    }
    /**
     * @return {?}
     */
    onMouseEnter() {
        this.el.nativeElement.style.backgroundColor = this.bgColor;
        this.el.nativeElement.style.color = this.fontColor;
    }
    /**
     * @return {?}
     */
    onMouseLeave() {
        this.el.nativeElement.style.backgroundColor = null;
        this.el.nativeElement.style.color = null;
    }
}
ChangeThemeWhenHoverDirective.decorators = [
    { type: Directive, args: [{
                selector: '[changeThemeWhenHover]'
            },] },
];
/** @nocollapse */
ChangeThemeWhenHoverDirective.ctorParameters = () => [
    { type: ElementRef, },
];
ChangeThemeWhenHoverDirective.propDecorators = {
    "bgColor": [{ type: Input },],
    "fontColor": [{ type: Input },],
    "onMouseEnter": [{ type: HostListener, args: ['mouseenter',] },],
    "onMouseLeave": [{ type: HostListener, args: ['mouseleave',] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class LibTreeModule {
}
LibTreeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [LibtreeComponent, ChangeThemeWhenHoverDirective],
                imports: [CommonModule, FormsModule],
                exports: [LibtreeComponent],
                providers: [LibtreeUtil]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { LibTreeModule, LibtreeComponent as ɵa, ChangeThemeWhenHoverDirective as ɵb, LibtreeUtil as ɵc };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlidHJlZS10ZXN0LmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9saWJ0cmVlLXRlc3QvYXNzZXRzL2R1bW15L2luaXRkYXRhLnRzIiwibmc6Ly9saWJ0cmVlLXRlc3Qvc3JjL3V0aWxzL2xpYnRyZWUudXRpbC50cyIsIm5nOi8vbGlidHJlZS10ZXN0L3NyYy9jb21wb25lbnRzL2xpYnRyZWUuY29tcG9uZW50LnRzIiwibmc6Ly9saWJ0cmVlLXRlc3Qvc3JjL2RpcmVjdGl2ZXMvY2hhbmdlLXRoZW1lLWhvdmVyLmRpcmVjdGl2ZS50cyIsIm5nOi8vbGlidHJlZS10ZXN0L3NyYy9saWJ0cmVlLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgSW5pdERhdGEge1xyXG5cclxuICBwdWJsaWMgc3RhdGljIGxpYkRhdGEgPSBbe1xyXG4gICAgXCJUeXBlXCI6IDEsXHJcbiAgICBcIlRpdGxlXCI6IFwiMTAuIFJvb3QgTm9kZVwiLFxyXG4gICAgXCJpc1RyZWVPcGVuXCI6IHRydWUsXHJcbiAgICBcIlVyaVwiOiBcIjQwNDU0M1wiLFxyXG4gICAgXCJUaGVtZVwiOiBcIiM2MDBcIixcclxuICAgIFwiSWNvbk9wZW5cIjogXCJnbHlwaGljb24tYnJpZWZjYXNlXCIsXHJcbiAgICBcIkljb25DbG9zZVwiOiBcImdseXBoaWNvbi1icmllZmNhc2VcIixcclxuICAgIFwiQmdDb2xvclwiOiBcIiM2MDBcIixcclxuICAgIFwiRm9udENvbG9yXCI6IFwid2hpdGVcIixcclxuICAgIFwiQ2hpbGRSZWNvcmRzXCI6IFt7XHJcbiAgICAgIFwiVGl0bGVcIjogXCIxMDEuIENoaWxkIE5vZGVcIixcclxuICAgICAgXCJUeXBlXCI6IDEsXHJcbiAgICAgIFwiaXNUcmVlT3BlblwiOiBmYWxzZSxcclxuICAgICAgXCJVcmlcIjogXCI0MDQ1NDNcIixcclxuICAgICAgXCJUaGVtZVwiOiBcIiM2MDBcIixcclxuICAgICAgXCJJY29uT3BlblwiOiBcImdseXBoaWNvbi1mb2xkZXItb3BlblwiLFxyXG4gICAgICBcIkljb25DbG9zZVwiOiBcImdseXBoaWNvbi1mb2xkZXItY2xvc2VcIixcclxuICAgICAgXCJCZ0NvbG9yXCI6IFwiIzYwMFwiLFxyXG4gICAgICBcIkZvbnRDb2xvclwiOiBcIndoaXRlXCIsXHJcbiAgICAgIFwiQ2hpbGRSZWNvcmRzXCI6W3tcclxuICAgICAgICBcIlR5cGVcIjogMyxcclxuICAgICAgICBcIlRpdGxlXCI6IFwiMTAwMS4gR3JhbmRzb24gTm9kZVwiLFxyXG4gICAgICAgIFwiaXNUcmVlT3BlblwiOiBmYWxzZSxcclxuICAgICAgICBcIlVyaVwiOiBcIjQwNDU0M1wiLFxyXG4gICAgICAgIFwiVGhlbWVcIjogXCIjNjAwXCIsXHJcbiAgICAgICAgXCJJY29uT3BlblwiOiBcImdseXBoaWNvbi1mb2xkZXItb3BlblwiLFxyXG4gICAgICAgIFwiSWNvbkNsb3NlXCI6IFwiZ2x5cGhpY29uLWZvbGRlci1jbG9zZVwiLFxyXG4gICAgICAgIFwiQmdDb2xvclwiOiBcIiM2MDBcIixcclxuICAgICAgICBcIkZvbnRDb2xvclwiOiBcIndoaXRlXCIsXHJcbiAgICAgIH1dXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcIlRpdGxlXCI6IFwiMTAyLiBDaGlsZCBOb2RlXCIsXHJcbiAgICAgIFwiVHlwZVwiOiAxLFxyXG4gICAgICBcImlzVHJlZU9wZW5cIjogZmFsc2UsXHJcbiAgICAgIFwiVXJpXCI6IFwiNDA0NTQzXCIsXHJcbiAgICAgIFwiVGhlbWVcIjogXCIjNjAwXCIsXHJcbiAgICAgIFwiSWNvbk9wZW5cIjogXCJnbHlwaGljb24tZm9sZGVyLW9wZW5cIixcclxuICAgICAgXCJJY29uQ2xvc2VcIjogXCJnbHlwaGljb24tZm9sZGVyLWNsb3NlXCIsXHJcbiAgICAgIFwiQmdDb2xvclwiOiBcIiM2MDBcIixcclxuICAgICAgXCJGb250Q29sb3JcIjogXCJ3aGl0ZVwiLFxyXG4gICAgICBcIkNoaWxkUmVjb3Jkc1wiOlt7XHJcbiAgICAgICAgXCJUeXBlXCI6IDMsXHJcbiAgICAgICAgXCJUaXRsZVwiOiBcIjEwMDIuIEdyYW5kc29uIE5vZGVcIixcclxuICAgICAgICBcImlzVHJlZU9wZW5cIjogZmFsc2UsXHJcbiAgICAgICAgXCJVcmlcIjogXCI0MDQ1NDNcIixcclxuICAgICAgICBcIlRoZW1lXCI6IFwiIzYwMFwiLFxyXG4gICAgICAgIFwiSWNvbk9wZW5cIjogXCJnbHlwaGljb24tZm9sZGVyLW9wZW5cIixcclxuICAgICAgICBcIkljb25DbG9zZVwiOiBcImdseXBoaWNvbi1mb2xkZXItY2xvc2VcIixcclxuICAgICAgICBcIkJnQ29sb3JcIjogXCIjNjAwXCIsXHJcbiAgICAgICAgXCJGb250Q29sb3JcIjogXCJ3aGl0ZVwiLFxyXG4gICAgICB9XVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJUaXRsZVwiOiBcIjEwMy4gQ2hpbGQgTm9kZVwiLFxyXG4gICAgICBcIlR5cGVcIjogMSxcclxuICAgICAgXCJpc1RyZWVPcGVuXCI6IGZhbHNlLFxyXG4gICAgICBcIlVyaVwiOiBcIjQwNDU0M1wiLFxyXG4gICAgICBcIlRoZW1lXCI6IFwiIzYwMFwiLFxyXG4gICAgICBcIkljb25PcGVuXCI6IFwiZ2x5cGhpY29uLWZvbGRlci1vcGVuXCIsXHJcbiAgICAgIFwiSWNvbkNsb3NlXCI6IFwiZ2x5cGhpY29uLWZvbGRlci1jbG9zZVwiLFxyXG4gICAgICBcIkJnQ29sb3JcIjogXCIjNjAwXCIsXHJcbiAgICAgIFwiRm9udENvbG9yXCI6IFwid2hpdGVcIixcclxuICAgICAgXCJDaGlsZFJlY29yZHNcIjpbe1xyXG4gICAgICAgIFwiVHlwZVwiOiAzLFxyXG4gICAgICAgIFwiVGl0bGVcIjogXCIxMDAzLiBHcmFuZHNvbiBOb2RlXCIsXHJcbiAgICAgICAgXCJpc1RyZWVPcGVuXCI6IGZhbHNlLFxyXG4gICAgICAgIFwiVXJpXCI6IFwiNDA0NTQzXCIsXHJcbiAgICAgICAgXCJUaGVtZVwiOiBcIiM2MDBcIixcclxuICAgICAgICBcIkljb25PcGVuXCI6IFwiZ2x5cGhpY29uLWZvbGRlci1vcGVuXCIsXHJcbiAgICAgICAgXCJJY29uQ2xvc2VcIjogXCJnbHlwaGljb24tZm9sZGVyLWNsb3NlXCIsXHJcbiAgICAgICAgXCJCZ0NvbG9yXCI6IFwiIzYwMFwiLFxyXG4gICAgICAgIFwiRm9udENvbG9yXCI6IFwid2hpdGVcIixcclxuICAgICAgfV1cclxuICAgIH1dXHJcbiAgfV1cclxuICBcclxuICBjb25zdHJ1Y3Rvcihhcmd1bWVudCkge1xyXG4gICAgLy8gY29kZS4uLlxyXG4gIH1cclxufSIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIExpYnRyZWVVdGlsIHtcclxuICBcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgaXNCbGFuayh2YWw6c3RyaW5nKTogYm9vbGVhbntcclxuICAgIGlmICh2YWwgIT09IG51bGwgJiYgXHJcbiAgICAgICAgdmFsICE9PSB1bmRlZmluZWQgJiYgXHJcbiAgICAgICAgdmFsICE9PSAnJyAmJiBcclxuICAgICAgICB2YWwgIT09ICdudWxsJyAmJiBcclxuICAgICAgICB2YWwgIT0gJ3VuZGVmaW5lZCcgJiYgXHJcbiAgICAgICAgdmFsLnJlcGxhY2UoL15cXHMrfFxccyskL2dtLCcnKSAhPT0gJydcclxuICAgICAgKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBpc051bGwodmFsOk9iamVjdCk6IGJvb2xlYW57XHJcbiAgICBpZiAodmFsICE9PSBudWxsICYmIHZhbCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxufSIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSW5pdERhdGEgfSBmcm9tICcuLi8uLi9hc3NldHMvZHVtbXkvaW5pdGRhdGEnO1xyXG5pbXBvcnQgeyBMaWJ0cmVlVXRpbCB9IGZyb20gJy4uL3V0aWxzL2xpYnRyZWUudXRpbCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2xpYi10cmVlJyxcclxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJsaWItdHJlZVwiPlxyXG4gIDx1bCBjbGFzcz1cInVsLXBhZGRpbmctaW5saW5lLXN0YXJ0XCI+XHJcbiAgICA8bGkgKm5nRm9yPVwibGV0IGZvbCBvZiBsaWJEYXRhXCIgY2xhc3M9XCJsaS1saXN0LXN0eWxlLW5vbmVcIj5cclxuICAgICAgPGRpdiAqbmdJZj1cImlzU2hvd1wiPlxyXG4gICAgICAgIDxpIGNsYXNzPVwiZ2x5cGhpY29uXCIgW25nQ2xhc3NdPVwiZm9sLmlzVHJlZU9wZW4/Zm9sLkljb25PcGVuOmZvbC5JY29uQ2xvc2VcIiBbbmdTdHlsZV09XCJ7J2NvbG9yJzogZm9sLlRoZW1lfVwiIChjbGljayk9XCJpY29uQ2xpY2soZm9sKVwiPjwvaT4mbmJzcDsmbmJzcDtcclxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJ0ZXh0LWZvbnRcIiAoY2xpY2spPVwibW92ZVRvKGZvbC5VcmksZmFsc2UpXCIgY2hhbmdlVGhlbWVXaGVuSG92ZXIgW2JnQ29sb3JdPVwiZm9sLkJnQ29sb3JcIiBbZm9udENvbG9yXT1cImZvbC5Gb250Q29sb3JcIj57e2ZvbC5UaXRsZX19PC9sYWJlbD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxsaWItdHJlZSBbbGliRGF0YV09XCJmb2wuQ2hpbGRSZWNvcmRzXCIgW3NlbGZJbnZva2VGbGFnXT10cnVlICpuZ0lmPVwiZm9sLmlzVHJlZU9wZW5cIj48L2xpYi10cmVlPlxyXG4gICAgPC9saT5cclxuICA8L3VsPlxyXG48L2Rpdj5gLFxyXG4gIHN0eWxlczogW2BAZm9udC1mYWNle2ZvbnQtZmFtaWx5OidHbHlwaGljb25zIEhhbGZsaW5ncyc7c3JjOnVybCgvYXNzZXRzL2ZvbnRzL2dseXBoaWNvbnMtaGFsZmxpbmdzLXJlZ3VsYXIuZW90KTtzcmM6dXJsKC9hc3NldHMvZm9udHMvZ2x5cGhpY29ucy1oYWxmbGluZ3MtcmVndWxhci5lb3Q/I2llZml4KSBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksdXJsKC9hc3NldHMvZm9udHMvZ2x5cGhpY29ucy1oYWxmbGluZ3MtcmVndWxhci53b2ZmMikgZm9ybWF0KCd3b2ZmMicpLHVybCgvYXNzZXRzL2ZvbnRzL2dseXBoaWNvbnMtaGFsZmxpbmdzLXJlZ3VsYXIud29mZikgZm9ybWF0KCd3b2ZmJyksdXJsKC9hc3NldHMvZm9udHMvZ2x5cGhpY29ucy1oYWxmbGluZ3MtcmVndWxhci50dGYpIGZvcm1hdCgndHJ1ZXR5cGUnKSx1cmwoL2Fzc2V0cy9mb250cy9nbHlwaGljb25zLWhhbGZsaW5ncy1yZWd1bGFyLnN2ZyNnbHlwaGljb25zX2hhbGZsaW5nc3JlZ3VsYXIpIGZvcm1hdCgnc3ZnJyl9LmdseXBoaWNvbntwb3NpdGlvbjpyZWxhdGl2ZTt0b3A6MXB4O2Rpc3BsYXk6aW5saW5lLWJsb2NrO2ZvbnQtZmFtaWx5OidHbHlwaGljb25zIEhhbGZsaW5ncyc7Zm9udC1zdHlsZTpub3JtYWw7Zm9udC13ZWlnaHQ6NDAwO2xpbmUtaGVpZ2h0OjE7LXdlYmtpdC1mb250LXNtb290aGluZzphbnRpYWxpYXNlZDstbW96LW9zeC1mb250LXNtb290aGluZzpncmF5c2NhbGV9LmdseXBoaWNvbi1hc3RlcmlzazpiZWZvcmV7Y29udGVudDpcIlxcXFwwMDJhXCJ9LmdseXBoaWNvbi1wbHVzOmJlZm9yZXtjb250ZW50OlwiXFxcXDAwMmJcIn0uZ2x5cGhpY29uLWV1cjpiZWZvcmUsLmdseXBoaWNvbi1ldXJvOmJlZm9yZXtjb250ZW50OlwiXFxcXDIwYWNcIn0uZ2x5cGhpY29uLW1pbnVzOmJlZm9yZXtjb250ZW50OlwiXFxcXDIyMTJcIn0uZ2x5cGhpY29uLWNsb3VkOmJlZm9yZXtjb250ZW50OlwiXFxcXDI2MDFcIn0uZ2x5cGhpY29uLWVudmVsb3BlOmJlZm9yZXtjb250ZW50OlwiXFxcXDI3MDlcIn0uZ2x5cGhpY29uLXBlbmNpbDpiZWZvcmV7Y29udGVudDpcIlxcXFwyNzBmXCJ9LmdseXBoaWNvbi1nbGFzczpiZWZvcmV7Y29udGVudDpcIlxcXFxlMDAxXCJ9LmdseXBoaWNvbi1tdXNpYzpiZWZvcmV7Y29udGVudDpcIlxcXFxlMDAyXCJ9LmdseXBoaWNvbi1zZWFyY2g6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTAwM1wifS5nbHlwaGljb24taGVhcnQ6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTAwNVwifS5nbHlwaGljb24tc3RhcjpiZWZvcmV7Y29udGVudDpcIlxcXFxlMDA2XCJ9LmdseXBoaWNvbi1zdGFyLWVtcHR5OmJlZm9yZXtjb250ZW50OlwiXFxcXGUwMDdcIn0uZ2x5cGhpY29uLXVzZXI6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTAwOFwifS5nbHlwaGljb24tZmlsbTpiZWZvcmV7Y29udGVudDpcIlxcXFxlMDA5XCJ9LmdseXBoaWNvbi10aC1sYXJnZTpiZWZvcmV7Y29udGVudDpcIlxcXFxlMDEwXCJ9LmdseXBoaWNvbi10aDpiZWZvcmV7Y29udGVudDpcIlxcXFxlMDExXCJ9LmdseXBoaWNvbi10aC1saXN0OmJlZm9yZXtjb250ZW50OlwiXFxcXGUwMTJcIn0uZ2x5cGhpY29uLW9rOmJlZm9yZXtjb250ZW50OlwiXFxcXGUwMTNcIn0uZ2x5cGhpY29uLXJlbW92ZTpiZWZvcmV7Y29udGVudDpcIlxcXFxlMDE0XCJ9LmdseXBoaWNvbi16b29tLWluOmJlZm9yZXtjb250ZW50OlwiXFxcXGUwMTVcIn0uZ2x5cGhpY29uLXpvb20tb3V0OmJlZm9yZXtjb250ZW50OlwiXFxcXGUwMTZcIn0uZ2x5cGhpY29uLW9mZjpiZWZvcmV7Y29udGVudDpcIlxcXFxlMDE3XCJ9LmdseXBoaWNvbi1zaWduYWw6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTAxOFwifS5nbHlwaGljb24tY29nOmJlZm9yZXtjb250ZW50OlwiXFxcXGUwMTlcIn0uZ2x5cGhpY29uLXRyYXNoOmJlZm9yZXtjb250ZW50OlwiXFxcXGUwMjBcIn0uZ2x5cGhpY29uLWhvbWU6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTAyMVwifS5nbHlwaGljb24tZmlsZTpiZWZvcmV7Y29udGVudDpcIlxcXFxlMDIyXCJ9LmdseXBoaWNvbi10aW1lOmJlZm9yZXtjb250ZW50OlwiXFxcXGUwMjNcIn0uZ2x5cGhpY29uLXJvYWQ6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTAyNFwifS5nbHlwaGljb24tZG93bmxvYWQtYWx0OmJlZm9yZXtjb250ZW50OlwiXFxcXGUwMjVcIn0uZ2x5cGhpY29uLWRvd25sb2FkOmJlZm9yZXtjb250ZW50OlwiXFxcXGUwMjZcIn0uZ2x5cGhpY29uLXVwbG9hZDpiZWZvcmV7Y29udGVudDpcIlxcXFxlMDI3XCJ9LmdseXBoaWNvbi1pbmJveDpiZWZvcmV7Y29udGVudDpcIlxcXFxlMDI4XCJ9LmdseXBoaWNvbi1wbGF5LWNpcmNsZTpiZWZvcmV7Y29udGVudDpcIlxcXFxlMDI5XCJ9LmdseXBoaWNvbi1yZXBlYXQ6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTAzMFwifS5nbHlwaGljb24tcmVmcmVzaDpiZWZvcmV7Y29udGVudDpcIlxcXFxlMDMxXCJ9LmdseXBoaWNvbi1saXN0LWFsdDpiZWZvcmV7Y29udGVudDpcIlxcXFxlMDMyXCJ9LmdseXBoaWNvbi1sb2NrOmJlZm9yZXtjb250ZW50OlwiXFxcXGUwMzNcIn0uZ2x5cGhpY29uLWZsYWc6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTAzNFwifS5nbHlwaGljb24taGVhZHBob25lczpiZWZvcmV7Y29udGVudDpcIlxcXFxlMDM1XCJ9LmdseXBoaWNvbi12b2x1bWUtb2ZmOmJlZm9yZXtjb250ZW50OlwiXFxcXGUwMzZcIn0uZ2x5cGhpY29uLXZvbHVtZS1kb3duOmJlZm9yZXtjb250ZW50OlwiXFxcXGUwMzdcIn0uZ2x5cGhpY29uLXZvbHVtZS11cDpiZWZvcmV7Y29udGVudDpcIlxcXFxlMDM4XCJ9LmdseXBoaWNvbi1xcmNvZGU6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTAzOVwifS5nbHlwaGljb24tYmFyY29kZTpiZWZvcmV7Y29udGVudDpcIlxcXFxlMDQwXCJ9LmdseXBoaWNvbi10YWc6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTA0MVwifS5nbHlwaGljb24tdGFnczpiZWZvcmV7Y29udGVudDpcIlxcXFxlMDQyXCJ9LmdseXBoaWNvbi1ib29rOmJlZm9yZXtjb250ZW50OlwiXFxcXGUwNDNcIn0uZ2x5cGhpY29uLWJvb2ttYXJrOmJlZm9yZXtjb250ZW50OlwiXFxcXGUwNDRcIn0uZ2x5cGhpY29uLXByaW50OmJlZm9yZXtjb250ZW50OlwiXFxcXGUwNDVcIn0uZ2x5cGhpY29uLWNhbWVyYTpiZWZvcmV7Y29udGVudDpcIlxcXFxlMDQ2XCJ9LmdseXBoaWNvbi1mb250OmJlZm9yZXtjb250ZW50OlwiXFxcXGUwNDdcIn0uZ2x5cGhpY29uLWJvbGQ6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTA0OFwifS5nbHlwaGljb24taXRhbGljOmJlZm9yZXtjb250ZW50OlwiXFxcXGUwNDlcIn0uZ2x5cGhpY29uLXRleHQtaGVpZ2h0OmJlZm9yZXtjb250ZW50OlwiXFxcXGUwNTBcIn0uZ2x5cGhpY29uLXRleHQtd2lkdGg6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTA1MVwifS5nbHlwaGljb24tYWxpZ24tbGVmdDpiZWZvcmV7Y29udGVudDpcIlxcXFxlMDUyXCJ9LmdseXBoaWNvbi1hbGlnbi1jZW50ZXI6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTA1M1wifS5nbHlwaGljb24tYWxpZ24tcmlnaHQ6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTA1NFwifS5nbHlwaGljb24tYWxpZ24tanVzdGlmeTpiZWZvcmV7Y29udGVudDpcIlxcXFxlMDU1XCJ9LmdseXBoaWNvbi1saXN0OmJlZm9yZXtjb250ZW50OlwiXFxcXGUwNTZcIn0uZ2x5cGhpY29uLWluZGVudC1sZWZ0OmJlZm9yZXtjb250ZW50OlwiXFxcXGUwNTdcIn0uZ2x5cGhpY29uLWluZGVudC1yaWdodDpiZWZvcmV7Y29udGVudDpcIlxcXFxlMDU4XCJ9LmdseXBoaWNvbi1mYWNldGltZS12aWRlbzpiZWZvcmV7Y29udGVudDpcIlxcXFxlMDU5XCJ9LmdseXBoaWNvbi1waWN0dXJlOmJlZm9yZXtjb250ZW50OlwiXFxcXGUwNjBcIn0uZ2x5cGhpY29uLW1hcC1tYXJrZXI6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTA2MlwifS5nbHlwaGljb24tYWRqdXN0OmJlZm9yZXtjb250ZW50OlwiXFxcXGUwNjNcIn0uZ2x5cGhpY29uLXRpbnQ6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTA2NFwifS5nbHlwaGljb24tZWRpdDpiZWZvcmV7Y29udGVudDpcIlxcXFxlMDY1XCJ9LmdseXBoaWNvbi1zaGFyZTpiZWZvcmV7Y29udGVudDpcIlxcXFxlMDY2XCJ9LmdseXBoaWNvbi1jaGVjazpiZWZvcmV7Y29udGVudDpcIlxcXFxlMDY3XCJ9LmdseXBoaWNvbi1tb3ZlOmJlZm9yZXtjb250ZW50OlwiXFxcXGUwNjhcIn0uZ2x5cGhpY29uLXN0ZXAtYmFja3dhcmQ6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTA2OVwifS5nbHlwaGljb24tZmFzdC1iYWNrd2FyZDpiZWZvcmV7Y29udGVudDpcIlxcXFxlMDcwXCJ9LmdseXBoaWNvbi1iYWNrd2FyZDpiZWZvcmV7Y29udGVudDpcIlxcXFxlMDcxXCJ9LmdseXBoaWNvbi1wbGF5OmJlZm9yZXtjb250ZW50OlwiXFxcXGUwNzJcIn0uZ2x5cGhpY29uLXBhdXNlOmJlZm9yZXtjb250ZW50OlwiXFxcXGUwNzNcIn0uZ2x5cGhpY29uLXN0b3A6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTA3NFwifS5nbHlwaGljb24tZm9yd2FyZDpiZWZvcmV7Y29udGVudDpcIlxcXFxlMDc1XCJ9LmdseXBoaWNvbi1mYXN0LWZvcndhcmQ6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTA3NlwifS5nbHlwaGljb24tc3RlcC1mb3J3YXJkOmJlZm9yZXtjb250ZW50OlwiXFxcXGUwNzdcIn0uZ2x5cGhpY29uLWVqZWN0OmJlZm9yZXtjb250ZW50OlwiXFxcXGUwNzhcIn0uZ2x5cGhpY29uLWNoZXZyb24tbGVmdDpiZWZvcmV7Y29udGVudDpcIlxcXFxlMDc5XCJ9LmdseXBoaWNvbi1jaGV2cm9uLXJpZ2h0OmJlZm9yZXtjb250ZW50OlwiXFxcXGUwODBcIn0uZ2x5cGhpY29uLXBsdXMtc2lnbjpiZWZvcmV7Y29udGVudDpcIlxcXFxlMDgxXCJ9LmdseXBoaWNvbi1taW51cy1zaWduOmJlZm9yZXtjb250ZW50OlwiXFxcXGUwODJcIn0uZ2x5cGhpY29uLXJlbW92ZS1zaWduOmJlZm9yZXtjb250ZW50OlwiXFxcXGUwODNcIn0uZ2x5cGhpY29uLW9rLXNpZ246YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTA4NFwifS5nbHlwaGljb24tcXVlc3Rpb24tc2lnbjpiZWZvcmV7Y29udGVudDpcIlxcXFxlMDg1XCJ9LmdseXBoaWNvbi1pbmZvLXNpZ246YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTA4NlwifS5nbHlwaGljb24tc2NyZWVuc2hvdDpiZWZvcmV7Y29udGVudDpcIlxcXFxlMDg3XCJ9LmdseXBoaWNvbi1yZW1vdmUtY2lyY2xlOmJlZm9yZXtjb250ZW50OlwiXFxcXGUwODhcIn0uZ2x5cGhpY29uLW9rLWNpcmNsZTpiZWZvcmV7Y29udGVudDpcIlxcXFxlMDg5XCJ9LmdseXBoaWNvbi1iYW4tY2lyY2xlOmJlZm9yZXtjb250ZW50OlwiXFxcXGUwOTBcIn0uZ2x5cGhpY29uLWFycm93LWxlZnQ6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTA5MVwifS5nbHlwaGljb24tYXJyb3ctcmlnaHQ6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTA5MlwifS5nbHlwaGljb24tYXJyb3ctdXA6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTA5M1wifS5nbHlwaGljb24tYXJyb3ctZG93bjpiZWZvcmV7Y29udGVudDpcIlxcXFxlMDk0XCJ9LmdseXBoaWNvbi1zaGFyZS1hbHQ6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTA5NVwifS5nbHlwaGljb24tcmVzaXplLWZ1bGw6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTA5NlwifS5nbHlwaGljb24tcmVzaXplLXNtYWxsOmJlZm9yZXtjb250ZW50OlwiXFxcXGUwOTdcIn0uZ2x5cGhpY29uLWV4Y2xhbWF0aW9uLXNpZ246YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTEwMVwifS5nbHlwaGljb24tZ2lmdDpiZWZvcmV7Y29udGVudDpcIlxcXFxlMTAyXCJ9LmdseXBoaWNvbi1sZWFmOmJlZm9yZXtjb250ZW50OlwiXFxcXGUxMDNcIn0uZ2x5cGhpY29uLWZpcmU6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTEwNFwifS5nbHlwaGljb24tZXllLW9wZW46YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTEwNVwifS5nbHlwaGljb24tZXllLWNsb3NlOmJlZm9yZXtjb250ZW50OlwiXFxcXGUxMDZcIn0uZ2x5cGhpY29uLXdhcm5pbmctc2lnbjpiZWZvcmV7Y29udGVudDpcIlxcXFxlMTA3XCJ9LmdseXBoaWNvbi1wbGFuZTpiZWZvcmV7Y29udGVudDpcIlxcXFxlMTA4XCJ9LmdseXBoaWNvbi1jYWxlbmRhcjpiZWZvcmV7Y29udGVudDpcIlxcXFxlMTA5XCJ9LmdseXBoaWNvbi1yYW5kb206YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTExMFwifS5nbHlwaGljb24tY29tbWVudDpiZWZvcmV7Y29udGVudDpcIlxcXFxlMTExXCJ9LmdseXBoaWNvbi1tYWduZXQ6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTExMlwifS5nbHlwaGljb24tY2hldnJvbi11cDpiZWZvcmV7Y29udGVudDpcIlxcXFxlMTEzXCJ9LmdseXBoaWNvbi1jaGV2cm9uLWRvd246YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTExNFwifS5nbHlwaGljb24tcmV0d2VldDpiZWZvcmV7Y29udGVudDpcIlxcXFxlMTE1XCJ9LmdseXBoaWNvbi1zaG9wcGluZy1jYXJ0OmJlZm9yZXtjb250ZW50OlwiXFxcXGUxMTZcIn0uZ2x5cGhpY29uLWZvbGRlci1jbG9zZTpiZWZvcmV7Y29udGVudDpcIlxcXFxlMTE3XCJ9LmdseXBoaWNvbi1mb2xkZXItb3BlbjpiZWZvcmV7Y29udGVudDpcIlxcXFxlMTE4XCJ9LmdseXBoaWNvbi1yZXNpemUtdmVydGljYWw6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTExOVwifS5nbHlwaGljb24tcmVzaXplLWhvcml6b250YWw6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTEyMFwifS5nbHlwaGljb24taGRkOmJlZm9yZXtjb250ZW50OlwiXFxcXGUxMjFcIn0uZ2x5cGhpY29uLWJ1bGxob3JuOmJlZm9yZXtjb250ZW50OlwiXFxcXGUxMjJcIn0uZ2x5cGhpY29uLWJlbGw6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTEyM1wifS5nbHlwaGljb24tY2VydGlmaWNhdGU6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTEyNFwifS5nbHlwaGljb24tdGh1bWJzLXVwOmJlZm9yZXtjb250ZW50OlwiXFxcXGUxMjVcIn0uZ2x5cGhpY29uLXRodW1icy1kb3duOmJlZm9yZXtjb250ZW50OlwiXFxcXGUxMjZcIn0uZ2x5cGhpY29uLWhhbmQtcmlnaHQ6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTEyN1wifS5nbHlwaGljb24taGFuZC1sZWZ0OmJlZm9yZXtjb250ZW50OlwiXFxcXGUxMjhcIn0uZ2x5cGhpY29uLWhhbmQtdXA6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTEyOVwifS5nbHlwaGljb24taGFuZC1kb3duOmJlZm9yZXtjb250ZW50OlwiXFxcXGUxMzBcIn0uZ2x5cGhpY29uLWNpcmNsZS1hcnJvdy1yaWdodDpiZWZvcmV7Y29udGVudDpcIlxcXFxlMTMxXCJ9LmdseXBoaWNvbi1jaXJjbGUtYXJyb3ctbGVmdDpiZWZvcmV7Y29udGVudDpcIlxcXFxlMTMyXCJ9LmdseXBoaWNvbi1jaXJjbGUtYXJyb3ctdXA6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTEzM1wifS5nbHlwaGljb24tY2lyY2xlLWFycm93LWRvd246YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTEzNFwifS5nbHlwaGljb24tZ2xvYmU6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTEzNVwifS5nbHlwaGljb24td3JlbmNoOmJlZm9yZXtjb250ZW50OlwiXFxcXGUxMzZcIn0uZ2x5cGhpY29uLXRhc2tzOmJlZm9yZXtjb250ZW50OlwiXFxcXGUxMzdcIn0uZ2x5cGhpY29uLWZpbHRlcjpiZWZvcmV7Y29udGVudDpcIlxcXFxlMTM4XCJ9LmdseXBoaWNvbi1icmllZmNhc2U6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTEzOVwifS5nbHlwaGljb24tZnVsbHNjcmVlbjpiZWZvcmV7Y29udGVudDpcIlxcXFxlMTQwXCJ9LmdseXBoaWNvbi1kYXNoYm9hcmQ6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTE0MVwifS5nbHlwaGljb24tcGFwZXJjbGlwOmJlZm9yZXtjb250ZW50OlwiXFxcXGUxNDJcIn0uZ2x5cGhpY29uLWhlYXJ0LWVtcHR5OmJlZm9yZXtjb250ZW50OlwiXFxcXGUxNDNcIn0uZ2x5cGhpY29uLWxpbms6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTE0NFwifS5nbHlwaGljb24tcGhvbmU6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTE0NVwifS5nbHlwaGljb24tcHVzaHBpbjpiZWZvcmV7Y29udGVudDpcIlxcXFxlMTQ2XCJ9LmdseXBoaWNvbi11c2Q6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTE0OFwifS5nbHlwaGljb24tZ2JwOmJlZm9yZXtjb250ZW50OlwiXFxcXGUxNDlcIn0uZ2x5cGhpY29uLXNvcnQ6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTE1MFwifS5nbHlwaGljb24tc29ydC1ieS1hbHBoYWJldDpiZWZvcmV7Y29udGVudDpcIlxcXFxlMTUxXCJ9LmdseXBoaWNvbi1zb3J0LWJ5LWFscGhhYmV0LWFsdDpiZWZvcmV7Y29udGVudDpcIlxcXFxlMTUyXCJ9LmdseXBoaWNvbi1zb3J0LWJ5LW9yZGVyOmJlZm9yZXtjb250ZW50OlwiXFxcXGUxNTNcIn0uZ2x5cGhpY29uLXNvcnQtYnktb3JkZXItYWx0OmJlZm9yZXtjb250ZW50OlwiXFxcXGUxNTRcIn0uZ2x5cGhpY29uLXNvcnQtYnktYXR0cmlidXRlczpiZWZvcmV7Y29udGVudDpcIlxcXFxlMTU1XCJ9LmdseXBoaWNvbi1zb3J0LWJ5LWF0dHJpYnV0ZXMtYWx0OmJlZm9yZXtjb250ZW50OlwiXFxcXGUxNTZcIn0uZ2x5cGhpY29uLXVuY2hlY2tlZDpiZWZvcmV7Y29udGVudDpcIlxcXFxlMTU3XCJ9LmdseXBoaWNvbi1leHBhbmQ6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTE1OFwifS5nbHlwaGljb24tY29sbGFwc2UtZG93bjpiZWZvcmV7Y29udGVudDpcIlxcXFxlMTU5XCJ9LmdseXBoaWNvbi1jb2xsYXBzZS11cDpiZWZvcmV7Y29udGVudDpcIlxcXFxlMTYwXCJ9LmdseXBoaWNvbi1sb2ctaW46YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTE2MVwifS5nbHlwaGljb24tZmxhc2g6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTE2MlwifS5nbHlwaGljb24tbG9nLW91dDpiZWZvcmV7Y29udGVudDpcIlxcXFxlMTYzXCJ9LmdseXBoaWNvbi1uZXctd2luZG93OmJlZm9yZXtjb250ZW50OlwiXFxcXGUxNjRcIn0uZ2x5cGhpY29uLXJlY29yZDpiZWZvcmV7Y29udGVudDpcIlxcXFxlMTY1XCJ9LmdseXBoaWNvbi1zYXZlOmJlZm9yZXtjb250ZW50OlwiXFxcXGUxNjZcIn0uZ2x5cGhpY29uLW9wZW46YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTE2N1wifS5nbHlwaGljb24tc2F2ZWQ6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTE2OFwifS5nbHlwaGljb24taW1wb3J0OmJlZm9yZXtjb250ZW50OlwiXFxcXGUxNjlcIn0uZ2x5cGhpY29uLWV4cG9ydDpiZWZvcmV7Y29udGVudDpcIlxcXFxlMTcwXCJ9LmdseXBoaWNvbi1zZW5kOmJlZm9yZXtjb250ZW50OlwiXFxcXGUxNzFcIn0uZ2x5cGhpY29uLWZsb3BweS1kaXNrOmJlZm9yZXtjb250ZW50OlwiXFxcXGUxNzJcIn0uZ2x5cGhpY29uLWZsb3BweS1zYXZlZDpiZWZvcmV7Y29udGVudDpcIlxcXFxlMTczXCJ9LmdseXBoaWNvbi1mbG9wcHktcmVtb3ZlOmJlZm9yZXtjb250ZW50OlwiXFxcXGUxNzRcIn0uZ2x5cGhpY29uLWZsb3BweS1zYXZlOmJlZm9yZXtjb250ZW50OlwiXFxcXGUxNzVcIn0uZ2x5cGhpY29uLWZsb3BweS1vcGVuOmJlZm9yZXtjb250ZW50OlwiXFxcXGUxNzZcIn0uZ2x5cGhpY29uLWNyZWRpdC1jYXJkOmJlZm9yZXtjb250ZW50OlwiXFxcXGUxNzdcIn0uZ2x5cGhpY29uLXRyYW5zZmVyOmJlZm9yZXtjb250ZW50OlwiXFxcXGUxNzhcIn0uZ2x5cGhpY29uLWN1dGxlcnk6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTE3OVwifS5nbHlwaGljb24taGVhZGVyOmJlZm9yZXtjb250ZW50OlwiXFxcXGUxODBcIn0uZ2x5cGhpY29uLWNvbXByZXNzZWQ6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTE4MVwifS5nbHlwaGljb24tZWFycGhvbmU6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTE4MlwifS5nbHlwaGljb24tcGhvbmUtYWx0OmJlZm9yZXtjb250ZW50OlwiXFxcXGUxODNcIn0uZ2x5cGhpY29uLXRvd2VyOmJlZm9yZXtjb250ZW50OlwiXFxcXGUxODRcIn0uZ2x5cGhpY29uLXN0YXRzOmJlZm9yZXtjb250ZW50OlwiXFxcXGUxODVcIn0uZ2x5cGhpY29uLXNkLXZpZGVvOmJlZm9yZXtjb250ZW50OlwiXFxcXGUxODZcIn0uZ2x5cGhpY29uLWhkLXZpZGVvOmJlZm9yZXtjb250ZW50OlwiXFxcXGUxODdcIn0uZ2x5cGhpY29uLXN1YnRpdGxlczpiZWZvcmV7Y29udGVudDpcIlxcXFxlMTg4XCJ9LmdseXBoaWNvbi1zb3VuZC1zdGVyZW86YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTE4OVwifS5nbHlwaGljb24tc291bmQtZG9sYnk6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTE5MFwifS5nbHlwaGljb24tc291bmQtNS0xOmJlZm9yZXtjb250ZW50OlwiXFxcXGUxOTFcIn0uZ2x5cGhpY29uLXNvdW5kLTYtMTpiZWZvcmV7Y29udGVudDpcIlxcXFxlMTkyXCJ9LmdseXBoaWNvbi1zb3VuZC03LTE6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTE5M1wifS5nbHlwaGljb24tY29weXJpZ2h0LW1hcms6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTE5NFwifS5nbHlwaGljb24tcmVnaXN0cmF0aW9uLW1hcms6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTE5NVwifS5nbHlwaGljb24tY2xvdWQtZG93bmxvYWQ6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTE5N1wifS5nbHlwaGljb24tY2xvdWQtdXBsb2FkOmJlZm9yZXtjb250ZW50OlwiXFxcXGUxOThcIn0uZ2x5cGhpY29uLXRyZWUtY29uaWZlcjpiZWZvcmV7Y29udGVudDpcIlxcXFxlMTk5XCJ9LmdseXBoaWNvbi10cmVlLWRlY2lkdW91czpiZWZvcmV7Y29udGVudDpcIlxcXFxlMjAwXCJ9LmdseXBoaWNvbi1jZDpiZWZvcmV7Y29udGVudDpcIlxcXFxlMjAxXCJ9LmdseXBoaWNvbi1zYXZlLWZpbGU6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTIwMlwifS5nbHlwaGljb24tb3Blbi1maWxlOmJlZm9yZXtjb250ZW50OlwiXFxcXGUyMDNcIn0uZ2x5cGhpY29uLWxldmVsLXVwOmJlZm9yZXtjb250ZW50OlwiXFxcXGUyMDRcIn0uZ2x5cGhpY29uLWNvcHk6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTIwNVwifS5nbHlwaGljb24tcGFzdGU6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTIwNlwifS5nbHlwaGljb24tYWxlcnQ6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTIwOVwifS5nbHlwaGljb24tZXF1YWxpemVyOmJlZm9yZXtjb250ZW50OlwiXFxcXGUyMTBcIn0uZ2x5cGhpY29uLWtpbmc6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTIxMVwifS5nbHlwaGljb24tcXVlZW46YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTIxMlwifS5nbHlwaGljb24tcGF3bjpiZWZvcmV7Y29udGVudDpcIlxcXFxlMjEzXCJ9LmdseXBoaWNvbi1iaXNob3A6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTIxNFwifS5nbHlwaGljb24ta25pZ2h0OmJlZm9yZXtjb250ZW50OlwiXFxcXGUyMTVcIn0uZ2x5cGhpY29uLWJhYnktZm9ybXVsYTpiZWZvcmV7Y29udGVudDpcIlxcXFxlMjE2XCJ9LmdseXBoaWNvbi10ZW50OmJlZm9yZXtjb250ZW50OlwiXFxcXDI2ZmFcIn0uZ2x5cGhpY29uLWJsYWNrYm9hcmQ6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTIxOFwifS5nbHlwaGljb24tYmVkOmJlZm9yZXtjb250ZW50OlwiXFxcXGUyMTlcIn0uZ2x5cGhpY29uLWFwcGxlOmJlZm9yZXtjb250ZW50OlwiXFxcXGY4ZmZcIn0uZ2x5cGhpY29uLWVyYXNlOmJlZm9yZXtjb250ZW50OlwiXFxcXGUyMjFcIn0uZ2x5cGhpY29uLWhvdXJnbGFzczpiZWZvcmV7Y29udGVudDpcIlxcXFwyMzFiXCJ9LmdseXBoaWNvbi1sYW1wOmJlZm9yZXtjb250ZW50OlwiXFxcXGUyMjNcIn0uZ2x5cGhpY29uLWR1cGxpY2F0ZTpiZWZvcmV7Y29udGVudDpcIlxcXFxlMjI0XCJ9LmdseXBoaWNvbi1waWdneS1iYW5rOmJlZm9yZXtjb250ZW50OlwiXFxcXGUyMjVcIn0uZ2x5cGhpY29uLXNjaXNzb3JzOmJlZm9yZXtjb250ZW50OlwiXFxcXGUyMjZcIn0uZ2x5cGhpY29uLWJpdGNvaW46YmVmb3JlLC5nbHlwaGljb24tYnRjOmJlZm9yZSwuZ2x5cGhpY29uLXhidDpiZWZvcmV7Y29udGVudDpcIlxcXFxlMjI3XCJ9LmdseXBoaWNvbi1qcHk6YmVmb3JlLC5nbHlwaGljb24teWVuOmJlZm9yZXtjb250ZW50OlwiXFxcXDAwYTVcIn0uZ2x5cGhpY29uLXJ1YjpiZWZvcmUsLmdseXBoaWNvbi1ydWJsZTpiZWZvcmV7Y29udGVudDpcIlxcXFwyMGJkXCJ9LmdseXBoaWNvbi1zY2FsZTpiZWZvcmV7Y29udGVudDpcIlxcXFxlMjMwXCJ9LmdseXBoaWNvbi1pY2UtbG9sbHk6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTIzMVwifS5nbHlwaGljb24taWNlLWxvbGx5LXRhc3RlZDpiZWZvcmV7Y29udGVudDpcIlxcXFxlMjMyXCJ9LmdseXBoaWNvbi1lZHVjYXRpb246YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTIzM1wifS5nbHlwaGljb24tb3B0aW9uLWhvcml6b250YWw6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTIzNFwifS5nbHlwaGljb24tb3B0aW9uLXZlcnRpY2FsOmJlZm9yZXtjb250ZW50OlwiXFxcXGUyMzVcIn0uZ2x5cGhpY29uLW1lbnUtaGFtYnVyZ2VyOmJlZm9yZXtjb250ZW50OlwiXFxcXGUyMzZcIn0uZ2x5cGhpY29uLW1vZGFsLXdpbmRvdzpiZWZvcmV7Y29udGVudDpcIlxcXFxlMjM3XCJ9LmdseXBoaWNvbi1vaWw6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTIzOFwifS5nbHlwaGljb24tZ3JhaW46YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTIzOVwifS5nbHlwaGljb24tc3VuZ2xhc3NlczpiZWZvcmV7Y29udGVudDpcIlxcXFxlMjQwXCJ9LmdseXBoaWNvbi10ZXh0LXNpemU6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTI0MVwifS5nbHlwaGljb24tdGV4dC1jb2xvcjpiZWZvcmV7Y29udGVudDpcIlxcXFxlMjQyXCJ9LmdseXBoaWNvbi10ZXh0LWJhY2tncm91bmQ6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTI0M1wifS5nbHlwaGljb24tb2JqZWN0LWFsaWduLXRvcDpiZWZvcmV7Y29udGVudDpcIlxcXFxlMjQ0XCJ9LmdseXBoaWNvbi1vYmplY3QtYWxpZ24tYm90dG9tOmJlZm9yZXtjb250ZW50OlwiXFxcXGUyNDVcIn0uZ2x5cGhpY29uLW9iamVjdC1hbGlnbi1ob3Jpem9udGFsOmJlZm9yZXtjb250ZW50OlwiXFxcXGUyNDZcIn0uZ2x5cGhpY29uLW9iamVjdC1hbGlnbi1sZWZ0OmJlZm9yZXtjb250ZW50OlwiXFxcXGUyNDdcIn0uZ2x5cGhpY29uLW9iamVjdC1hbGlnbi12ZXJ0aWNhbDpiZWZvcmV7Y29udGVudDpcIlxcXFxlMjQ4XCJ9LmdseXBoaWNvbi1vYmplY3QtYWxpZ24tcmlnaHQ6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTI0OVwifS5nbHlwaGljb24tdHJpYW5nbGUtcmlnaHQ6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTI1MFwifS5nbHlwaGljb24tdHJpYW5nbGUtbGVmdDpiZWZvcmV7Y29udGVudDpcIlxcXFxlMjUxXCJ9LmdseXBoaWNvbi10cmlhbmdsZS1ib3R0b206YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTI1MlwifS5nbHlwaGljb24tdHJpYW5nbGUtdG9wOmJlZm9yZXtjb250ZW50OlwiXFxcXGUyNTNcIn0uZ2x5cGhpY29uLWNvbnNvbGU6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTI1NFwifS5nbHlwaGljb24tc3VwZXJzY3JpcHQ6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTI1NVwifS5nbHlwaGljb24tc3Vic2NyaXB0OmJlZm9yZXtjb250ZW50OlwiXFxcXGUyNTZcIn0uZ2x5cGhpY29uLW1lbnUtbGVmdDpiZWZvcmV7Y29udGVudDpcIlxcXFxlMjU3XCJ9LmdseXBoaWNvbi1tZW51LXJpZ2h0OmJlZm9yZXtjb250ZW50OlwiXFxcXGUyNThcIn0uZ2x5cGhpY29uLW1lbnUtZG93bjpiZWZvcmV7Y29udGVudDpcIlxcXFxlMjU5XCJ9LmdseXBoaWNvbi1tZW51LXVwOmJlZm9yZXtjb250ZW50OlwiXFxcXGUyNjBcIn0udGV4dC1mb250e2ZvbnQtZmFtaWx5OlRhaG9tYTtmb250LXNpemU6MTNweDtjb2xvcjojNjY2O2ZvbnQtd2VpZ2h0OjQwMH0ubGktbGlzdC1zdHlsZS1ub25le2xpc3Qtc3R5bGU6bm9uZX0udWwtcGFkZGluZy1pbmxpbmUtc3RhcnR7LXdlYmtpdC1wYWRkaW5nLXN0YXJ0OjIwcHg7cGFkZGluZy1pbmxpbmUtc3RhcnQ6MjBweH1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTGlidHJlZUNvbXBvbmVudCB7XHJcbiAgaXNTaG93OiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgQElucHV0KCkgbGliRGF0YTogYW55O1xyXG4gIEBJbnB1dCgpIHNlbGZJbnZva2VGbGFnOiBib29sZWFuID0gZmFsc2U7XHJcbiAgY29uc3RydWN0b3IoKXtcclxuICB9XHJcbiAgbmdPbkluaXQoKXtcclxuICAgIGlmKCF0aGlzLnNlbGZJbnZva2VGbGFnICYmIExpYnRyZWVVdGlsLmlzTnVsbCh0aGlzLmxpYkRhdGEpKXtcclxuICAgICAgdGhpcy5saWJEYXRhID0gSW5pdERhdGEubGliRGF0YTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGljb25DbGljayhmb2w6IGFueSl7XHJcbiAgICBmb2wuaXNUcmVlT3BlbiA9ICFmb2wuaXNUcmVlT3BlbjtcclxuICAgIGNvbnNvbGUubG9nKCdJY29uQ2xpY2snKTtcclxuICB9XHJcblxyXG4gIG1vdmVUbyh1cmk6IHN0cmluZywgZmxhZzogYm9vbGVhbikge1xyXG4gICAgY29uc29sZS5sb2coJ1RpdGxlQ2xpY2snKTtcclxuICB9XHJcbn0iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEhvc3RMaXN0ZW5lciwgSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbY2hhbmdlVGhlbWVXaGVuSG92ZXJdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2hhbmdlVGhlbWVXaGVuSG92ZXJEaXJlY3RpdmUge1xyXG5cclxuICBASW5wdXQoKSBiZ0NvbG9yOiBzdHJpbmc7ICBcclxuICBASW5wdXQoKSBmb250Q29sb3I6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZikge1xyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignbW91c2VlbnRlcicpIG9uTW91c2VFbnRlcigpIHtcclxuICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSB0aGlzLmJnQ29sb3I7XHJcbiAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuc3R5bGUuY29sb3IgPSB0aGlzLmZvbnRDb2xvcjtcclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlbGVhdmUnKSBvbk1vdXNlTGVhdmUoKSB7XHJcbiAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gbnVsbDtcclxuICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5zdHlsZS5jb2xvciA9IG51bGw7XHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTGlidHJlZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9saWJ0cmVlLmNvbXBvbmVudCdcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IENoYW5nZVRoZW1lV2hlbkhvdmVyRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2NoYW5nZS10aGVtZS1ob3Zlci5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBMaWJ0cmVlVXRpbCB9IGZyb20gJy4vdXRpbHMvbGlidHJlZS51dGlsJztcclxuXHJcblxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtMaWJ0cmVlQ29tcG9uZW50LENoYW5nZVRoZW1lV2hlbkhvdmVyRGlyZWN0aXZlXSxcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBGb3Jtc01vZHVsZV0sXHJcbiAgZXhwb3J0czogW0xpYnRyZWVDb21wb25lbnRdLFxyXG4gIHByb3ZpZGVyczogW0xpYnRyZWVVdGlsXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTGliVHJlZU1vZHVsZSB7XHJcbiAgLy8gc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgLy8gICByZXR1cm4ge1xyXG4gIC8vICAgICBuZ01vZHVsZTogTGlidHJlZU1vZHVsZSxcclxuICAvLyAgICAgcHJvdmlkZXJzOiBbXVxyXG4gIC8vICAgfTtcclxuICAvLyB9XHJcbn0iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztJQWdGRSxZQUFZLFFBQVE7O0tBRW5COzttQkFoRnVCLENBQUM7UUFDdkIsTUFBTSxFQUFFLENBQUM7UUFDVCxPQUFPLEVBQUUsZUFBZTtRQUN4QixZQUFZLEVBQUUsSUFBSTtRQUNsQixLQUFLLEVBQUUsUUFBUTtRQUNmLE9BQU8sRUFBRSxNQUFNO1FBQ2YsVUFBVSxFQUFFLHFCQUFxQjtRQUNqQyxXQUFXLEVBQUUscUJBQXFCO1FBQ2xDLFNBQVMsRUFBRSxNQUFNO1FBQ2pCLFdBQVcsRUFBRSxPQUFPO1FBQ3BCLGNBQWMsRUFBRSxDQUFDO2dCQUNmLE9BQU8sRUFBRSxpQkFBaUI7Z0JBQzFCLE1BQU0sRUFBRSxDQUFDO2dCQUNULFlBQVksRUFBRSxLQUFLO2dCQUNuQixLQUFLLEVBQUUsUUFBUTtnQkFDZixPQUFPLEVBQUUsTUFBTTtnQkFDZixVQUFVLEVBQUUsdUJBQXVCO2dCQUNuQyxXQUFXLEVBQUUsd0JBQXdCO2dCQUNyQyxTQUFTLEVBQUUsTUFBTTtnQkFDakIsV0FBVyxFQUFFLE9BQU87Z0JBQ3BCLGNBQWMsRUFBQyxDQUFDO3dCQUNkLE1BQU0sRUFBRSxDQUFDO3dCQUNULE9BQU8sRUFBRSxxQkFBcUI7d0JBQzlCLFlBQVksRUFBRSxLQUFLO3dCQUNuQixLQUFLLEVBQUUsUUFBUTt3QkFDZixPQUFPLEVBQUUsTUFBTTt3QkFDZixVQUFVLEVBQUUsdUJBQXVCO3dCQUNuQyxXQUFXLEVB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