enyo.kind({
  name: 'font.TextIcon',
  kind: 'font.IconButton',
  classes: 'text-icon',
  published: {
    text: null
  },
  components: [
    {name: 'icon', tag: 'div'},
    {name: 'text', classes: 'text', tag: 'div'}
  ],
  create: function () {
    this.inherited(arguments);
    this.textChanged();
  },

  textChanged: function () {
    this.$.text.setContent(this.getText());
  }

});
