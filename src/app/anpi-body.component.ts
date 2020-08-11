import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'anpi-body',
  templateUrl: './anpi-body.html'
})
export class AnpiBodyComponent  {

  data = [
      { label: '安全', value: '0' },
      { label: '軽傷', value: '1' },
      { label: '重傷', value: '2' }
  ];
  data2 = [
      { label: '全員無事', value: '0' },
      { label: '負傷者がいる', value: '1' },
      { label: '不明者がいる', value: '2' },
      { label: '重大な事故がある', value: '3' },
      { label: 'わからない', value: '4' }
  ];
  data3 = [
      { label: '出社できない', value: '0' },
      { label: '1時間以内に出社できる', value: '1' },
      { label: '3時間以内に出社できる', value: '2' },
      { label: '出社済み', value: '3' }
  ];
  data4 = [
      { label: 'わからない', value: '0' },
      { label: '無事', value: '1' },
      { label: '半壊', value: '2' },
      { label: '全壊', value: '3' }
  ];

    userSafety = '';
    familySafety = '';
    workStatus = '';
    houseStatus = '';
    comment = '';
    geo = '';
  

  onSubmit(){
    alert("");
  }
}