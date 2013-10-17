enyo.kind({
  name: 'font.Icon',
  kind: 'onyx.Icon',
  classes: 'font-onyx icon',
  published: {
    icon: null,
    options: [ ]
  },
  components: [
    {name: 'icon', tag: 'i'}
  ],
  create: function () {
    this.inherited(arguments);

    this.iconChanged();
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
  }

});
