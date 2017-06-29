# things-grid-behavior
이는 grid에 사용될 기능 모듈들을 정의한 behavior set이다.

Example

```html
<dom-module id="things-resource-grid">
  <template>
    <style>
      :host {
        display: block;
        @apply(--layout-vertical);
        @apply(--things-table-padding);
      }
      .grid-container {
        @apply(--layout-flex);
        @apply(--layout-vertical);
      }
      .grid {
        @apply(--layout-flex);
        @apply(--layout-vertical);
      }
      .grid::shadow div {
        @apply(--layout-flex);
      }
      #paginator-container {
        height: 30px;
      }
      paper-toolbar {
        background-color:var(--things-white-background-color);
        height: 50px;
      }
      paper-toolbar::shadow #bottomBar {
        height: 50px;
        @apply(--layout-horizontal);
        @apply(--layout-end-justified);
        padding: 0 10px;
      }
    </style>

    <div class="grid-container">
      <!-- grid -->
      <!--div id="{{gridContainerId}}" class="grid" on-mouseout="_onMouseout"></div-->
      <div id="{{gridContainerId}}" class="grid"></div>
      <!-- paginator -->
      <div id="paginator-container" hidden$="[[!showPaginator]]"></div>
    </div>

    <paper-toolbar hidden$="{{!enableToolbar}}">
      <!-- button group -->
      <div class="bottom">
        <things-button-bar id="button-group" buttons="[[buttons]]"></things-button-bar>
      </div>
    </paper-toolbar>
  </template>

  <script>
    Polymer({
      is: 'things-resource-grid',
      behaviors: [
        Things.GridConfigBehavior,
        Things.GridPaginationBehavior,
        Things.GridImportBehavior,
        Things.GridExportBehavior,
        Things.GridAddrowBehavior,
        Things.GridSoftDeleterowBehavior,
        Things.GridSaveBehavior,
        Things.GridPrintBehavior,
        Things.GridOpenImportBehavior,
        Things.GridRequestReleaseBehavior,
      ],

      listeners: {
        'things-grid-configure-failed' : '_gridConfigureFailed'
      },
      observers: [
        '_toolbarConfigChanged(buttons)'
      ],

      /**
       * 툴바 관련 설정 변경시
       *
       * @param {Array} buttons
       */
      _toolbarConfigChanged: function(buttons) {
        this.enableToolbar = buttons && buttons.length > 0;
      },
      /**
       * Grid 구성이 실패한 후 핸들러
       *
       * @param {Object} event things-grid-configure-failed
       */
      _gridConfigureFailed: function(event) {
        var title = Things.DataGlobal.t('text.grid_config_error');
        var text = event.detail.error;
        this.openInfoMsg({ type : 'error', title : title, text : text });
      }
    });
  </script>
</dom-module>
```
## Dependencies

element의 종속성은 [Bower](http://bower.io/)를 통해 관리되며, 아래의 방법을 통해 설치할 수 있다.

    npm install -g bower

다음, element의 종속성을 다운로드한다.

    bower install


## Playing With Your Element

element를 독립적으로 처리하려면 [Polyserve](https://github.com/PolymerLabs/polyserve)를 사용하여 element의 bower 의존성을 유지하도록 하며, 이는 아래의 방법을 통해 설치할 수 있다.

    npm install -g polyserve

그리고, 아래의 방법을 통해 실행할 수 있다.

    polyserve

element를 실행한 경우, `things-grid-behavior`가 디렉토리 이름으로 포함되어 있는 `http://localhost:8080/components/things-grid-behavior/`를 통해 이를 미리 확인할 수 있다.
