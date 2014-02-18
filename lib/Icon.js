enyo.kind({
  name: 'font.Icon',
  kind: 'onyx.IconButton',
  classes: 'font-onyx icon',
  published: {
    icon: null,
    text: null,
    showLabel: false,
    options: [ ]
  },
  components: [
    {name: 'icon', tag: 'div'},
    {name: 'text', classes: 'text', tag: 'div'}
  ],
  create: function () {
    this.inherited(arguments);

    this.iconChanged();
    this.textChanged();
    this.showLabelChanged();
    this.optionsChanged();
  },

  iconChanged: function () {
    this.$.icon.attributes.class = null;
    this.$.icon.setClasses('icon-'+ this.icon);
  },

  optionsChanged: function (oldOptions) {
    for (var i = 0; i < this.options.length; i++) {
      this.$.icon.addClass('icon-'+ this.options[i]);
    }
  },

  showLabelChanged: function () {
    this.$.text.setShowing(this.getShowLabel());
  },

  textChanged: function () {
    this.$.text.setContent(this.getText());
  }
});
