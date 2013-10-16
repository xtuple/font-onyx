enyo.kind({
  name: 'font.Icon',
  kind: 'onyx.Icon',
  classes: 'font-onyx icon',
  published: {
    icon: null,
    options: null
  },
  components: [
    {name: 'icon', tag: 'i'}
  ],
  create: function () {
    this.inherited(arguments);

    this.optionsChanged();
    this.iconChanged();
  },

  iconChanged: function () {
    this.$.icon.addClass('icon-'+ this.icon);
  },

  optionsChanged: function () {
    _(this.options).each(function (cls) {
      this.$.icon.addClass('icon-'+ cls);
    }, this);
  }

});
