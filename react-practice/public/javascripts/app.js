ReactDOM.render(React.createElement(
  'h1',
  null,
  'Hello, world!'
), document.getElementById('example'));

var CommentBox = React.createClass({
  displayName: 'CommentBox',

  render: function () {
    return React.createElement(
      'div',
      { className: 'commentbox' },
      'Hello, world! I am a CommentBox.'
    );
  }
});

ReactDOM.render(React.createElement(CommentBox, null), document.getElementById('classist'));

var BugFilter = React.createClass({
  displayName: 'BugFilter',

  render: function () {
    return React.createElement(
      'div',
      { className: 'bugFilter' },
      'A way to filter bugs will go here.'
    );
  }
});

var BugAdd = React.createClass({
  displayName: 'BugAdd',

  render: function () {
    return React.createElement(
      'div',
      { className: 'bugAdd' },
      'A way to add a bug will go here.'
    );
  }
});

var BugRow = React.createClass({
  displayName: 'BugRow',

  render: function () {
    return React.createElement(
      'tr',
      { className: 'bugRow' },
      React.createElement(
        'td',
        null,
        this.prop.id
      ),
      React.createElement(
        'td',
        null,
        this.prop.status
      ),
      React.createElement(
        'td',
        null,
        this.prop.priority
      ),
      React.createElement(
        'td',
        null,
        this.prop.owner
      ),
      React.createElement(
        'td',
        null,
        this.prop.title
      )
    );
  }
});

var BugTable = React.createClass({
  displayName: 'BugTable',

  render: function () {
    return React.createElement(
      'table',
      { className: 'bugTable' },
      React.createElement(
        'tbody',
        null,
        React.createElement(BugRow, { id: '', status: '', priority: '', owner: '', title: '' })
      )
    );
  }
});

var BugList = React.createClass({
  displayName: 'BugList',

  render: function () {
    return React.createElement(
      'div',
      { className: 'bugList' },
      React.createElement(BugFilter, null),
      React.createElement(BugTable, null),
      React.createElement(BugAdd, null)
    );
  }
});

ReactDOM.render(React.createElement(BugList, null), document.getElementById('main'));
