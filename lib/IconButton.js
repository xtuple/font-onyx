/**
 * Font Awesome Icon, styled for Enyo 2.
 * @author Travis Webb <me@traviswebb.com>
 * @link https://github.com/tjwebb/font-onyx
 *
 * Omit the Font Awesome 'icon-' prefix when defining icon names and options.
 * The component handles this for a minor bit of syntax sugar.
 *
 * @fires ontap
 *
 * @example
 *  components: [
 *    {kind: 'font.IconButton', icon: 'refresh'}
 *  ]
 */
enyo.kind({
  name: 'font.IconButton',
  kind: 'font.Icon',
  classes: 'button',
  events: {
    ontap: ''
  },

  /**
   * Do not propagate the 'ontap' if the button is disabled.
   */
  tap: function () {
    this.inherited(arguments);
    return this.disabled;
  }

});

