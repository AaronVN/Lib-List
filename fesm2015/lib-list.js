import { ɵɵdefineInjectable, ɵɵinject, Injectable, Component, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

// tslint:disable
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
LibListService.ɵprov = ɵɵdefineInjectable({ factory: function LibListService_Factory() { return new LibListService(ɵɵinject(HttpClient)); }, token: LibListService, providedIn: "root" });
LibListService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
LibListService.ctorParameters = () => [
    { type: HttpClient }
];

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
LibListComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-lib-list',
                template: "<div>\r\n\t<p>\u00BFQue lista quieres ver?</p>\r\n\t<button (click) = \"setListTypeD()\"> Disponibles </button>\r\n\t<button (click) = \"setListTypeP()\"> Pendientes </button>\r\n\t<button (click) = \"setListTypeV()\"> Vendidos </button>\r\n\r\n</div>\r\n\r\n<div  class = \"table\">\r\n  <table>\r\n    <tr>\r\n      <th colspan = \"3\">\r\n        <h2  *ngIf = \"showingAvailable\">Actualmente viendo por Available</h2>\r\n        <h2 *ngIf = \"showingPending\">Actualmente viendo por pending</h2>\r\n        <h2 *ngIf = \"showingSold\">Actualmente viendo por Sold</h2>\r\n      </th>\r\n    </tr>\r\n    <tr>\r\n      <th>ID</th><th>Nombre</th><th>Estado</th>\r\n    </tr>\r\n    <tr *ngFor = \"let pet of pets\" class =\"hoverable\">\r\n      <td> {{pet.id}}</td><td> {{pet.name}}</td><td> {{pet.status | uppercase}}</td>\r\n    </tr>\r\n  </table>\r\n\r\n</div>\r\n",
                styles: ["td{background-color:rgba(0,0,0,.17254901960784313);border:1px solid #fff;border-radius:1em;color:#fff;margin-left:1em;padding:.3em}tr{background-color:rgba(0,0,0,.267);padding:1em}tr.hoverable:hover{background-color:rgba(251,255,0,.397)}div.table{background-color:rgba(0,0,0,.48627450980392156)}div{text-align:center}h2{column-span:all}th{color:#fff;height:1em}table{margin:auto;width:60%}"]
            },] }
];
LibListComponent.ctorParameters = () => [
    { type: LibListService }
];

class LibListModule {
}
LibListModule.decorators = [
    { type: NgModule, args: [{
                declarations: [LibListComponent],
                imports: [CommonModule
                ],
                exports: [LibListComponent]
            },] }
];

/*
 * Public API Surface of lib-list
 */

/**
 * Generated bundle index. Do not edit.
 */

export { LibListComponent, LibListModule, LibListService };
//# sourceMappingURL=lib-list.js.map
