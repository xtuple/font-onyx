/**
 * Font Awesome Icon, styled for Enyo 2.
 * @author Travis Webb <me@traviswebb.com>
 * @link https://github.com/tjwebb/font-enyo
 *
 * Omit out the Font Awesome 'icon-' prefix when defining icon names and options.
 * The component handles this for a minor bit of syntax sugar.
 *
 * @fires ontap
 *
 * @example
 *  components: [
 *    {kind: 'FA.Icon', icon: 'refresh', options: [ 'spin' ]}
 *  ]
 */
enyo.kind({
  name: 'FE.Icon',
  classes: 'font-enyo-icon',
  published: {
    icon: null,
    options: null,
    disabled: false
  },
  events: {
    ontap: ''
  },
  components: [
    {name: 'icon', tag: 'i'}
  ],
  create: function () {
    this.inherited(arguments);

    this.disabledChanged();
    this.optionsChanged();
    this.iconChanged();
  },

  iconChanged: function () {
    this.$.icon.addClass('icon-'+ icon);
  },

  optionsChanged: function () {
    _(this.options).each(function (cls) {
      this.$.icon.addClass('icon-'+ cls);
    }, this);
  },

  disabledChanged: function () {
    this.$.icon.addRemoveClass(':enabled',  !this.disabled);
    this.$.icon.addRemoveClass(':disabled',  this.disabled);
  }
});
