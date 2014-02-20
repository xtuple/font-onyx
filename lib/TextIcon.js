enyo.kind({
  name: 'font.TextIcon',
  kind: 'font.IconButton',
  classes: 'text-icon',
  components: [
    {name: 'icon', tag: 'div'},
    {name: 'text', classes: 'text', tag: 'div'}
  ],

  /**
    Set the text below the icon using the
    content value
  */
  contentChanged: function () {
    this.$.text.setContent(this.getContent());
  }

});
