// tslint:disable
import { Component } from '@angular/core';
import { LibListService } from './lib-list.service';
export class LibListComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGliLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uL3Byb2plY3RzL2xpYi1saXN0L3NyYy8iLCJzb3VyY2VzIjpbImxpYi9saWItbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUJBQWlCO0FBQ2pCLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBT3BELE1BQU0sT0FBTyxnQkFBZ0I7SUFPM0IsWUFBb0IsR0FBbUI7UUFBbkIsUUFBRyxHQUFILEdBQUcsQ0FBZ0I7UUFDdkMsU0FBSSxHQUFRLEVBQUUsQ0FBQztJQUQyQixDQUFDO0lBRTNDLFFBQVE7UUFDTixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO1FBQzdCLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1FBQzVCLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVELFVBQVU7SUFDVixZQUFZO1FBQ0ksSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO1FBQUMsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7UUFBQyxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztJQUN0RixDQUFDO0lBQ2YsWUFBWTtRQUNJLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztRQUFDLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1FBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7SUFDcEcsQ0FBQztJQUNELFlBQVk7UUFDSSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7UUFBQyxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztRQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO0lBQ25HLENBQUM7OztZQWpDSCxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLGszQkFBd0M7O2FBRXpDOzs7WUFOUSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdHNsaW50OmRpc2FibGVcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTGliTGlzdFNlcnZpY2UgfSBmcm9tICcuL2xpYi1saXN0LnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItbGliLWxpc3QnLFxuICB0ZW1wbGF0ZVVybDogJy4vbGliLWxpc3QuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9saWItbGlzdC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTGliTGlzdENvbXBvbmVudCB7XG4gIHNob3dpbmdBdmFpbGFibGUgITogYm9vbGVhbjsgLy8gMCA9IGF2YWlsYWJsZSwgMSA9IHBlbmRpbmcsIDIgPSBzb2xkXG4gIHNob3dpbmdQZW5kaW5nICE6IGJvb2xlYW47IC8vIFwiIVwiIHBhcmEgaW5pY2lhbGl6YXIgdW5hIHZhcmlhYmxlIG5vIGRlZmluaWRhXG4gIHNob3dpbmdTb2xkICE6IGJvb2xlYW47XG5cbiAgZW1wdHk6IG51bGw7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBsaWI6IExpYkxpc3RTZXJ2aWNlKSB7fVxuICBwZXRzOiBhbnkgPSBbXTtcbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zaG93aW5nQXZhaWxhYmxlID0gdHJ1ZTtcbiAgICB0aGlzLnNob3dpbmdQZW5kaW5nID0gZmFsc2U7XG4gICAgdGhpcy5zaG93aW5nU29sZCA9IGZhbHNlO1xuICAgIHRoaXMucGV0cyA9IHRoaXMubGliLmdldExpc3QoJ2F2YWlsYWJsZScpO1xuICB9XG5cbiAgLy8gQnV0dG9uc1xuICBzZXRMaXN0VHlwZUQoKSB7Ly8gTWV0b2RvIHBhcmEgdmFjaWFyIGFycmF5XG4gICAgICAgICAgICAgICAgICB0aGlzLnBldHMgPSB0aGlzLmxpYi5nZXRMaXN0KCdhdmFpbGFibGUnKTtcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd2luZ0F2YWlsYWJsZSA9IHRydWU7IHRoaXMuc2hvd2luZ1BlbmRpbmcgPSBmYWxzZTsgdGhpcy5zaG93aW5nU29sZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgc2V0TGlzdFR5cGVQKCkge1xuICAgICAgICAgICAgICAgICAgdGhpcy5wZXRzID0gdGhpcy5saWIuZ2V0TGlzdCgncGVuZGluZycpO1xuICAgICAgICAgICAgICAgICAgdGhpcy5zaG93aW5nQXZhaWxhYmxlID0gZmFsc2U7IHRoaXMuc2hvd2luZ1BlbmRpbmcgPSB0cnVlOyB0aGlzLnNob3dpbmdTb2xkID0gZmFsc2U7XG4gIH1cbiAgc2V0TGlzdFR5cGVWKCkge1xuICAgICAgICAgICAgICAgICAgdGhpcy5wZXRzID0gdGhpcy5saWIuZ2V0TGlzdCgnc29sZCcpO1xuICAgICAgICAgICAgICAgICAgdGhpcy5zaG93aW5nQXZhaWxhYmxlID0gdHJ1ZTsgdGhpcy5zaG93aW5nUGVuZGluZyA9IGZhbHNlOyB0aGlzLnNob3dpbmdTb2xkID0gZmFsc2U7XG4gICB9XG5cblxuXG5cblxuXG59XG4iXX0=