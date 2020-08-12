import { InMemoryDbService } from 'angular-in-memory-web-api';
import { IncidentInfo } from './app/incident-info';
import { ResponseItem } from './app/response-item';
 
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let incidentInfo :IncidentInfo[] = [
      {
        incidentCode:"I0001",
        incidentName:"【地震】青森県東方沖地震",
        responseItems:[
          {
            resCode:"R0001",
            resName:"本人の安否",
            resItem:[
              { resItemCode: "RI0001", resItemName: "安全" },
              { resItemCode: "RI0002", resItemName: "軽傷" },
              { resItemCode: "RI0003", resItemName: "重傷" }
            ]
          },
          {
            resCode:"R0002",
            resName:"家族の安否",
            resItem:[
              { resItemCode: "RI0011", resItemName: "全員無事" },
              { resItemCode: "RI0012", resItemName: "負傷者がいる" },
              { resItemCode: "RI0013", resItemName: "不明者がいる" },
              { resItemCode: "RI0014", resItemName: "重大な事故がある" },
              { resItemCode: "RI0015", resItemName: "わからない" }
            ]
          },
          {
            resCode:"R0003",
            resName:"出社可否",
            resItem:[
              { resItemCode: "RI0021", resItemName: "出社できない" },
              { resItemCode: "RI0022", resItemName: "1時間以内に出社できる" },
              { resItemCode: "RI0023", resItemName: "3時間以内に出社できる" },
              { resItemCode: "RI0024", resItemName: "出社済み" }
            ]
          },
          {
            resCode:"R0004",
            resName:"家屋の状態",
            resItem:[
              { resItemCode: "RI0031", resItemName: "わからない" },
              { resItemCode: "RI0032", resItemName: "無事" },
              { resItemCode: "RI0033", resItemName: "半壊" },
              { resItemCode: "RI0034", resItemName: "全壊" }
            ]
          }
      }
    ];
    return {incidentInfo};
  }
}