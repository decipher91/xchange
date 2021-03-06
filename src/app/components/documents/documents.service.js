/**
 * Created by decipher on 17.2.16.
 */
export class DocumentsService {
  constructor($http, $log) {
    'ngInject';
    this.$http = $http;
    this.$log = $log;
  }

  callDocumentsCore() {
    let info =
    {
      "auth" : {
        "user" : { "username" : "mm@365my.biz", "password" : "mm2015!" }
      },
      "collection" : {
        "method" : "core"
      }
    };

    return this.$http.post('http://stage.365xchange.net/api/document', {
      auth: info.auth,
      collection: info.collection,
      contentType: 'application/json',
      datatype: 'json'
    });
  }

  callDocumentRelated(value) {
    let info =
    {
      "auth" : {
        "user" : { "username" : "mm@365my.biz", "password" : "mm2015!" }
      },
      "collection": {
        "method": "related by ID",
        "group": { "value": value }
      }
    };

    return this.$http.post('http://stage.365xchange.net/api/document', {
      auth: info.auth,
      collection: info.collection,
      contentType: 'application/json',
      datatype: 'json'
    });
  }

  callDocumentByOneCollection(id) {
    let info =
    {
      "auth" : {
        "user" : { "username" : "mm@365my.biz", "password" : "mm2015!" }
      },
      "document": {
       "method" : "by collection",
       "collection" : id,
        "offset" : { "start" : 1, "end" : 20 }
      }
    };

    return this.$http.post('http://stage.365xchange.net/api/document', {
      auth: info.auth,
      document: info.document,
      contentType: 'application/json',
      datatype: 'json'
    });
  }
}
