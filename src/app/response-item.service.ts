import { Injectable } from '@angular/core'
import { IncidentInfo } from './incident-info';
import { ResponseItem } from './resposnse-item';

@Injectable()
export class ResponseItemService {
  
  getResponseItem(incidentNo: string): ResponseItem[]{
    //災害コードを引数に災害情報サービスを呼び出して災害情報を取得する
    incidentInfo: IncidentInfo = getIncidentInfo(incidentNo);

    //取得した災害情報の応答項目配列を投げてそれぞれの応答項目の内容を取得
    this.httpClientService.get(incidentInfo.responseItemNo)
    .then(
      (response) => {
        return response;
      }
    )
    .catch(
      (error) => console.log(error)
    );
  }
}

