import { ɵɵdefineInjectable, ɵɵinject, Injectable, Component, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

// tslint:disable
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common/http';
import * as ɵngcc2 from '@angular/common';

function LibListComponent_h2_13_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "h2");
    ɵngcc0.ɵɵtext(1, "Actualmente viendo por Available");
    ɵngcc0.ɵɵelementEnd();
} }
function LibListComponent_h2_14_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "h2");
    ɵngcc0.ɵɵtext(1, "Actualmente viendo por pending");
    ɵngcc0.ɵɵelementEnd();
} }
function LibListComponent_h2_15_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "h2");
    ɵngcc0.ɵɵtext(1, "Actualmente viendo por Sold");
    ɵngcc0.ɵɵelementEnd();
} }
function LibListComponent_tr_23_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "tr", 5);
    ɵngcc0.ɵɵelementStart(1, "td");
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(3, "td");
    ɵngcc0.ɵɵtext(4);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(5, "td");
    ɵngcc0.ɵɵtext(6);
    ɵngcc0.ɵɵpipe(7, "uppercase");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const pet_r4 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate1(" ", pet_r4.id, "");
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate1(" ", pet_r4.name, "");
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate1(" ", ɵngcc0.ɵɵpipeBind1(7, 3, pet_r4.status), "");
} }
class LibListService {
    constructor(http) {
        this.http = http;
        this.pets = [];
    }
    getList(statusType) {
        // vaciar array this.pets
        this.pets.splice(0);
        this.getPetsByStatus(statusType)
            .subscribe((data) => {
            for (const d of data) {
                this.pets.push({ id: d.id,
                    name: d.name,
                    status: d.status
                });
            }
        });
        return this.pets;
    }
    getPetsByStatus(status) {
        this.InfoByStatus = 'https://petstore.swagger.io/v2/pet/findByStatus?status=' + status;
        return this.http.get(this.InfoByStatus);
    }
    ngOnDestroy() {
        // this.getPetsByStatus(statusType).unsubscribe();
    }
}
LibListService.ɵfac = function LibListService_Factory(t) { return new (t || LibListService)(ɵngcc0.ɵɵinject(ɵngcc1.HttpClient)); };
LibListService.ɵprov = ɵɵdefineInjectable({ factory: function LibListService_Factory() { return new LibListService(ɵɵinject(HttpClient)); }, token: LibListService, providedIn: "root" });
LibListService.ctorParameters = () => [
    { type: HttpClient }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(LibListService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: ɵngcc1.HttpClient }]; }, null); })();

// tslint:disable
class LibListComponent {
    constructor(lib) {
        this.lib = lib;
        this.pets = [];
    }
    ngOnInit() {
        this.showingAvailable = true;
        this.showingPending = false;
        this.showingSold = false;
        this.pets = this.lib.getList('available');
    }
    // Buttons
    setListTypeD() {
        this.pets = this.lib.getList('available');
        this.showingAvailable = true;
        this.showingPending = false;
        this.showingSold = false;
    }
    setListTypeP() {
        this.pets = this.lib.getList('pending');
        this.showingAvailable = false;
        this.showingPending = true;
        this.showingSold = false;
    }
    setListTypeV() {
        this.pets = this.lib.getList('sold');
        this.showingAvailable = true;
        this.showingPending = false;
        this.showingSold = false;
    }
}
LibListComponent.ɵfac = function LibListComponent_Factory(t) { return new (t || LibListComponent)(ɵngcc0.ɵɵdirectiveInject(LibListService)); };
LibListComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: LibListComponent, selectors: [["lib-lib-list"]], decls: 24, vars: 4, consts: [[3, "click"], [1, "table"], ["colspan", "3"], [4, "ngIf"], ["class", "hoverable", 4, "ngFor", "ngForOf"], [1, "hoverable"]], template: function LibListComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div");
        ɵngcc0.ɵɵelementStart(1, "p");
        ɵngcc0.ɵɵtext(2, "\u00BFQue lista quieres ver?");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(3, "button", 0);
        ɵngcc0.ɵɵlistener("click", function LibListComponent_Template_button_click_3_listener() { return ctx.setListTypeD(); });
        ɵngcc0.ɵɵtext(4, " Disponibles ");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(5, "button", 0);
        ɵngcc0.ɵɵlistener("click", function LibListComponent_Template_button_click_5_listener() { return ctx.setListTypeP(); });
        ɵngcc0.ɵɵtext(6, " Pendientes ");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(7, "button", 0);
        ɵngcc0.ɵɵlistener("click", function LibListComponent_Template_button_click_7_listener() { return ctx.setListTypeV(); });
        ɵngcc0.ɵɵtext(8, " Vendidos ");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(9, "div", 1);
        ɵngcc0.ɵɵelementStart(10, "table");
        ɵngcc0.ɵɵelementStart(11, "tr");
        ɵngcc0.ɵɵelementStart(12, "th", 2);
        ɵngcc0.ɵɵtemplate(13, LibListComponent_h2_13_Template, 2, 0, "h2", 3);
        ɵngcc0.ɵɵtemplate(14, LibListComponent_h2_14_Template, 2, 0, "h2", 3);
        ɵngcc0.ɵɵtemplate(15, LibListComponent_h2_15_Template, 2, 0, "h2", 3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(16, "tr");
        ɵngcc0.ɵɵelementStart(17, "th");
        ɵngcc0.ɵɵtext(18, "ID");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(19, "th");
        ɵngcc0.ɵɵtext(20, "Nombre");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(21, "th");
        ɵngcc0.ɵɵtext(22, "Estado");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(23, LibListComponent_tr_23_Template, 8, 5, "tr", 4);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(13);
        ɵngcc0.ɵɵproperty("ngIf", ctx.showingAvailable);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.showingPending);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.showingSold);
        ɵngcc0.ɵɵadvance(8);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.pets);
    } }, directives: [ɵngcc2.NgIf, ɵngcc2.NgForOf], pipes: [ɵngcc2.UpperCasePipe], styles: ["td[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.17254901960784313);border:1px solid #fff;border-radius:1em;color:#fff;margin-left:1em;padding:.3em}tr[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.267);padding:1em}tr.hoverable[_ngcontent-%COMP%]:hover{background-color:rgba(251,255,0,.397)}div.table[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.48627450980392156)}div[_ngcontent-%COMP%]{text-align:center}h2[_ngcontent-%COMP%]{column-span:all}th[_ngcontent-%COMP%]{color:#fff;height:1em}table[_ngcontent-%COMP%]{margin:auto;width:60%}"] });
LibListComponent.ctorParameters = () => [
    { type: LibListService }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(LibListComponent, [{
        type: Component,
        args: [{
                selector: 'lib-lib-list',
                template: "<div>\r\n\t<p>\u00BFQue lista quieres ver?</p>\r\n\t<button (click) = \"setListTypeD()\"> Disponibles </button>\r\n\t<button (click) = \"setListTypeP()\"> Pendientes </button>\r\n\t<button (click) = \"setListTypeV()\"> Vendidos </button>\r\n\r\n</div>\r\n\r\n<div  class = \"table\">\r\n  <table>\r\n    <tr>\r\n      <th colspan = \"3\">\r\n        <h2  *ngIf = \"showingAvailable\">Actualmente viendo por Available</h2>\r\n        <h2 *ngIf = \"showingPending\">Actualmente viendo por pending</h2>\r\n        <h2 *ngIf = \"showingSold\">Actualmente viendo por Sold</h2>\r\n      </th>\r\n    </tr>\r\n    <tr>\r\n      <th>ID</th><th>Nombre</th><th>Estado</th>\r\n    </tr>\r\n    <tr *ngFor = \"let pet of pets\" class =\"hoverable\">\r\n      <td> {{pet.id}}</td><td> {{pet.name}}</td><td> {{pet.status | uppercase}}</td>\r\n    </tr>\r\n  </table>\r\n\r\n</div>\r\n",
                styles: ["td{background-color:rgba(0,0,0,.17254901960784313);border:1px solid #fff;border-radius:1em;color:#fff;margin-left:1em;padding:.3em}tr{background-color:rgba(0,0,0,.267);padding:1em}tr.hoverable:hover{background-color:rgba(251,255,0,.397)}div.table{background-color:rgba(0,0,0,.48627450980392156)}div{text-align:center}h2{column-span:all}th{color:#fff;height:1em}table{margin:auto;width:60%}"]
            }]
    }], function () { return [{ type: LibListService }]; }, null); })();

class LibListModule {
}
LibListModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: LibListModule });
LibListModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function LibListModule_Factory(t) { return new (t || LibListModule)(); }, imports: [[CommonModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(LibListModule, { declarations: function () { return [LibListComponent]; }, imports: function () { return [CommonModule]; }, exports: function () { return [LibListComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(LibListModule, [{
        type: NgModule,
        args: [{
                declarations: [LibListComponent],
                imports: [CommonModule
                ],
                exports: [LibListComponent]
            }]
    }], null, null); })();

/*
 * Public API Surface of lib-list
 */

/**
 * Generated bundle index. Do not edit.
 */

export { LibListComponent, LibListModule, LibListService };

//# sourceMappingURL=lib-list.js.map