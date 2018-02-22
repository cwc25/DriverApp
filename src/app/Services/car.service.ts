import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { DriverData } from '../Model/DriverData';

const httpOptions = {
    headers: new HttpHeaders(
        {
            'Ocp-Apim-Subscription-Key':'e45610724c4346b18785cbca39a16087'
        }
    )};

@Injectable()
export class CarService {
    private carServiceUrl = "https://cloudsolution.azure-api.net/api/id"  ;
    constructor(public http: HttpClient) { }

    /* getMilesById(id:number): Observable<number>{
        const url = `${this.carServiceUrl}/${id}`;
        return this.http.get<number>(url).pipe(
        tap(_=>console.log(`sucessfuly get miles info by ${id}`)),
        catchError(this.handleError<number>('get miles by id'))
        )
    } */
    GetMilesById(id:number):Observable<DriverData>{
        
        return this.http.get<DriverData>(`${this.carServiceUrl}/${id}`, httpOptions)
                                            .pipe(tap(data=>console.log(data)));
                                           // .pipe();

    }

    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
    
        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead

        // Let the app keep running by returning an empty result.
        return of(result as T);
        };
    }
}
