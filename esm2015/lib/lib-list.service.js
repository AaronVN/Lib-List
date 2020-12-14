// tslint:disable
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class LibListService {
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
LibListService.ɵprov = i0.ɵɵdefineInjectable({ factory: function LibListService_Factory() { return new LibListService(i0.ɵɵinject(i1.HttpClient)); }, token: LibListService, providedIn: "root" });
LibListService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
LibListService.ctorParameters = () => [
    { type: HttpClient }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGliLWxpc3Quc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi9wcm9qZWN0cy9saWItbGlzdC9zcmMvIiwic291cmNlcyI6WyJsaWIvbGliLWxpc3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQkFBaUI7QUFDakIsT0FBTyxFQUFFLFVBQVUsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUN0RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7OztBQUtsRCxNQUFNLE9BQU8sY0FBYztJQUV6QixZQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBRTVCLFNBQUksR0FBUSxFQUFFLENBQUM7SUFEdEIsQ0FBQztJQUdBLE9BQU8sQ0FBQyxVQUFrQjtRQUV6Qix5QkFBeUI7UUFDMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUM7YUFDNUIsU0FBUyxDQUFDLENBQUMsSUFBUyxFQUFFLEVBQUU7WUFDMUIsS0FBSyxNQUFNLENBQUMsSUFBSyxJQUFZLEVBQUU7Z0JBQzVCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUNmLEVBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFO29CQUNULElBQUksRUFBRSxDQUFDLENBQUMsSUFBSTtvQkFDWixNQUFNLEVBQUUsQ0FBQyxDQUFDLE1BQU07aUJBQ2YsQ0FBQyxDQUFDO2FBQ0o7UUFFSCxDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNuQixDQUFDO0lBSUQsZUFBZSxDQUFDLE1BQWM7UUFDOUIsSUFBSSxDQUFDLFlBQVksR0FBRyx5REFBeUQsR0FBRyxNQUFNLENBQUM7UUFDdkYsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUNELFdBQVc7UUFDVCxrREFBa0Q7SUFDcEQsQ0FBQzs7OztZQW5DRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7OztZQUpRLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0c2xpbnQ6ZGlzYWJsZVxuaW1wb3J0IHsgSW5qZWN0YWJsZSwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBMaWJMaXN0U2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7XG4gICB9XG4gIHByaXZhdGUgcGV0czogYW55ID0gW107XG5cbiAgICBnZXRMaXN0KHN0YXR1c1R5cGU6IHN0cmluZykgeyAvLyB0eXBlIHNlcsOhIGVsIHN0YXR1cyAoZXN0YWJsZWNpZG8gYSB0cmF2w6lzIGRlIEhUTUw6IGF2YWlsYWJsZSwgcGVuZGluZyB5IHNvbGRcblxuICAgICAvLyB2YWNpYXIgYXJyYXkgdGhpcy5wZXRzXG4gICAgdGhpcy5wZXRzLnNwbGljZSgwKTtcbiAgICB0aGlzLmdldFBldHNCeVN0YXR1cyhzdGF0dXNUeXBlKVxuICAgICAgIC5zdWJzY3JpYmUoKGRhdGE6IGFueSkgPT4ge1xuICAgICAgZm9yIChjb25zdCBkIG9mIChkYXRhIGFzIGFueSkpIHtcbiAgICAgICAgIHRoaXMucGV0cy5wdXNoKFxuICAgICAgICB7aWQ6IGQuaWQsXG4gICAgICAgIG5hbWU6IGQubmFtZSxcbiAgICAgICAgc3RhdHVzOiBkLnN0YXR1c1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgIH0pO1xuICAgIHJldHVybiB0aGlzLnBldHM7XG4gIH1cblxuICBwcml2YXRlIEluZm9CeVN0YXR1cyAhOiBzdHJpbmc7XG5cbiAgZ2V0UGV0c0J5U3RhdHVzKHN0YXR1czogc3RyaW5nKSB7XG4gIHRoaXMuSW5mb0J5U3RhdHVzID0gJ2h0dHBzOi8vcGV0c3RvcmUuc3dhZ2dlci5pby92Mi9wZXQvZmluZEJ5U3RhdHVzP3N0YXR1cz0nICsgc3RhdHVzO1xuICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLkluZm9CeVN0YXR1cyk7XG4gIH1cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgLy8gdGhpcy5nZXRQZXRzQnlTdGF0dXMoc3RhdHVzVHlwZSkudW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIl19