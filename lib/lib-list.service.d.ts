import { HttpClient } from '@angular/common/http';
import * as ɵngcc0 from '@angular/core';
export declare class LibListService {
    private http;
    constructor(http: HttpClient);
    private pets;
    getList(statusType: string): any;
    private InfoByStatus;
    getPetsByStatus(status: string): import("rxjs").Observable<Object>;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<LibListService, never>;
}

//# sourceMappingURL=lib-list.service.d.ts.map