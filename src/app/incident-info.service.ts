import { Injectable } from '@angular/core'
import { IncidentInfo } from './incident-info';

@Injectable()
export class ResponseItemService {

  getIncidentInfo(incidentNo: string): responseItemNo[]{
    //災害コード（インシデントコード？）を引数にhttpAPIを叩いて応答項目の一覧を取得する
    responseItems: ResponseItem[] = getIncidentInfo(incidentNo);

    //取得した応答項目一覧を投げてそれぞれの応答項目の内容を取得
    this.httpClientService.get(responseItems)
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

