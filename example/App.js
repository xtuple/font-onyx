enyo.kind({
  name: 'font.example.App',
  components: [
    {kind: 'onyx.Toolbar', components: [
      {content: "Buttons", style: "width: 200px"},
      {kind: 'font.IconButton', icon: 'check-sign', ontap: 'fontIconTap'},
      {kind: 'font.IconButton', icon: 'beer', ontap: 'fontIconTap'},
      {kind: 'font.IconButton', icon: 'comment', ontap: 'fontIconTap'},
      {kind: 'font.IconButton', icon: 'envelope', ontap: 'fontIconTap'},
      {kind: 'font.IconButton', icon: 'gear', ontap: 'fontIconTap'},
      {kind: 'font.IconButton', icon: 'sort-by-alphabet', ontap: 'fontIconTap'},
    ]},
    {kind: 'onyx.Toolbar', components: [
      {content: "Buttons (disabled)", style: "width: 200px"},
      {kind: 'font.IconButton', icon: 'check-sign', disabled: true, ontap: 'fontIconTap'},
      {kind: 'font.IconButton', icon: 'beer', disabled: true, ontap: 'fontIconTap'},
      {kind: 'font.IconButton', icon: 'comment', disabled: true, ontap: 'fontIconTap'},
      {kind: 'font.IconButton', icon: 'envelope', disabled: true, ontap: 'fontIconTap'},
      {kind: 'font.IconButton', icon: 'gear', disabled: true, ontap: 'fontIconTap'},
      {kind: 'font.IconButton', icon: 'sort-by-alphabet', disabled: true, ontap: 'fontIconTap'},
    ]},
    {name: "message", style: "color: white; height: 42px; margin-left: 12px; font-size: 20px"},
    {kind: 'onyx.Toolbar', components: [
      {content: "Icons", style: "width: 200px"},
      {kind: 'font.Icon', icon: 'check-sign', options: [ 'spin' ]},
      {kind: 'font.Icon', icon: 'beer'},
      {kind: 'font.Icon', icon: 'comment'},
      {kind: 'font.Icon', icon: 'envelope'},
      {kind: 'font.Icon', icon: 'cog', options: [ 'spin' ]},
      {kind: 'font.Icon', icon: 'sort-by-alphabet'}
    ]},
  ],
  fontIconTap: function (inSender, inEvent) {
    this.$.message.setContent(inEvent.originator.parent.icon);
  },
  rendered: function () {
    this.inherited(arguments);

    this.$.icon.setIcon('cog');
  }
});
