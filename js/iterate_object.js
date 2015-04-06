'use strict';

let obj = {
  'key1': 'value of key1',
  'key2': 'value of key2',
  'key3': 'value of key3'
};


export function iterate(){

  for(let key of Object.keys(obj)){
    console.log(key, '->', obj[key]);
  }
}

