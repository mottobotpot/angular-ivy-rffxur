import { Injectable } from '@angular/core'
import { IncidentInfo } from './incident-info';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { MessageService } from '../message.service';

@Injectable({
  providedIn: 'root'
})export class IncidentInfoService {

  private incidentUrl = 'api/incidentInfo';  // Web APIのURL
  IncidentInfoList;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getIncidentInfoList(){
    this.IncidentInfoList = this.http.get('/db.json');
    console.log(this.IncidentInfoList);
    return this.IncidentInfoList;
  }

  /** サーバーからインシデントを取得する */
  getIncidentInfo(): Observable<IncidentInfo[]> {
    return this.http.get<IncidentInfo[]>(this.incidentUrl)
      .pipe(
        tap(incident => this.log('fetched incident')),
        catchError(this.handleError<IncidentInfo[]>('getIncident', []))
      );
  }

  /** IDによりインシデントを取得する。idが見つからない場合は`undefined`を返す。 */
  getIncidentInfoNo404<Data>(incidentCode: string): Observable<IncidentInfo> {
    const url = `${this.incidentUrl}/?incidentCode=${incidentCode}`;
    return this.http.get<IncidentInfo[]>(url)
      .pipe(
        map(IncidentInfo => IncidentInfo[0]), // {0|1} 要素の配列を返す
        tap(h => {
          const outcome = h ? `fetched` : `incidentCode not find`;
          this.log(`${outcome} incidentInfo incidentCode=${incidentCode}`);
        }),
        catchError(this.handleError<IncidentInfo>(`getIncidentInfo incidentCode=${incidentCode}`))
      );
  }

  /** IDによりインシデントを取得する。*/
  getIncidentInfomation(incidentCode: string): Observable<IncidentInfo> {
    const url = `${this.incidentUrl}/${incidentCode}`;
    return this.http.get<IncidentInfo>(`${this.incidentUrl}/?incidentCode=${incidentCode}`).pipe(
      tap(_ => this.log(`found incident matching "${incidentCode}"`)),
      catchError(this.handleError<IncidentInfo>('getIncidentInfomation', ))
    );
  }

  /**
   * 失敗したHttp操作を処理します。
   * アプリを持続させます。
   * @param operation - 失敗した操作の名前
   * @param result - observableな結果として返す任意の値
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: リモート上のロギング基盤にエラーを送信する
      console.error(error); // かわりにconsoleに出力

      // TODO: ユーザーへの開示のためにエラーの変換処理を改善する
      this.log(`${operation} failed: ${error.message}`);

      // 空の結果を返して、アプリを持続可能にする
      return of(result as T);
    };
  }

  /** IncidentInfoServiceのメッセージをMessageServiceを使って記録 */
  private log(message: string) {
    this.messageService.add(`IncidentInfoService: ${message}`);
  }
}

