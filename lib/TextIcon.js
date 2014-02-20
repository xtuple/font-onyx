enyo.kind({
  name: 'font.TextIcon',
  kind: 'font.IconButton',
  classes: 'text-icon',
  components: [
    {name: 'icon', tag: 'div'},
    {name: 'text', classes: 'text', tag: 'div'}
  ],
  create: function () {
    this.inherited(arguments);
    this.textChanged();
  },

  contentChanged: function () {
    this.$.text.setContent(this.getContent());
  }

});
