# things-grid-behavior
This is the behavior set that defines the functional modules to be used in the grid.

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
       * When changing toolbar-related settings
       *
       * @param {Array} buttons
       */
      _toolbarConfigChanged: function(buttons) {
        this.enableToolbar = buttons && buttons.length > 0;
      },
      /**
       * Handler after a Grid Configuration Failure
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

Element dependencies are managed via [Bower](http://bower.io/). You can install that via:

    npm install -g bower

Then, go ahead and download the element's dependencies:

    bower install


## Playing With Your Element

If you wish to work on your element in isolation, we recommend that you use
[Polyserve](https://github.com/PolymerLabs/polyserve) to keep your element's
bower dependencies in line. You can install it via:

    npm install -g polyserve

And you can run it via:

    polyserve

Once running, you can preview your element at
`http://localhost:8080/components/things-grid-behavior/`, where `things-grid-behavior` is the name of the directory containing it.
