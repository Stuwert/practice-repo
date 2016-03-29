ReactDOM.render(React.createElement(
  "h1",
  null,
  "Bug Table"
), document.getElementById('example'));

var BugFilter = React.createClass({
  displayName: "BugFilter",

  render: function () {
    return React.createElement(
      "div",
      { className: "bugFilter" },
      "A way to filter bugs will go here."
    );
  }
});

var BugAdd = React.createClass({
  displayName: "BugAdd",

  render: function () {
    return React.createElement(
      "div",
      { className: "bugAdd" },
      "A way to add a bug will go here."
    );
  }
});

var BugRow = React.createClass({
  displayName: "BugRow",

  render: function () {
    return React.createElement(
      "tr",
      null,
      React.createElement(
        "td",
        null,
        this.props.bug.id
      ),
      React.createElement(
        "td",
        null,
        this.props.bug.status
      ),
      React.createElement(
        "td",
        null,
        this.props.bug.priority
      ),
      React.createElement(
        "td",
        null,
        this.props.bug.owner
      ),
      React.createElement(
        "td",
        null,
        this.props.bug.title
      )
    );
  }
});

var BugTableHeader = React.createClass({
  displayName: "BugTableHeader",

  render: function () {
    return React.createElement(
      "thead",
      null,
      React.createElement(
        "tr",
        null,
        React.createElement(
          "th",
          null,
          "Id"
        ),
        React.createElement(
          "th",
          null,
          "Status"
        ),
        React.createElement(
          "th",
          null,
          "Priority"
        ),
        React.createElement(
          "th",
          null,
          "Owner"
        ),
        React.createElement(
          "th",
          null,
          "Title"
        )
      )
    );
  }
});

var BugTable = React.createClass({
  displayName: "BugTable",

  render: function () {
    var bugRows = this.props.bugs.map(function (bug) {
      return React.createElement(BugRow, { key: bug.id, bug: bug });
    });
    return React.createElement(
      "table",
      { className: "bugTable" },
      React.createElement(BugTableHeader, null),
      React.createElement(
        "tbody",
        null,
        bugRows
      )
    );
  }
});

var bugData = [{ id: 1, status: 'caught', priority: 'low', owner: 'bob', title: 'Butterfree' }, { id: 2, status: 'uncaught', priority: 'high', owner: 'ash', title: 'Weedle' }];

var nid = 3;

var BugList = React.createClass({
  displayName: "BugList",

  getInitialState: function () {
    return { bugs: bugData };
  },
  handleClick: function () {
    this.addBug({ id: nid, status: 'uncaught', priority: 'medium', owner: 'Stuart', title: 'Shit doesn\'t work' });
    nid++;
  },
  addBug: function (obj) {
    bugData.push(obj);
    this.setState({ bugs: bugData });
  },
  render: function () {
    console.log("Bing Bong");
    return React.createElement(
      "div",
      { className: "bugList" },
      React.createElement(
        "h1",
        null,
        "Bug Tracker"
      ),
      React.createElement(BugFilter, null),
      React.createElement("hr", null),
      React.createElement(BugTable, { bugs: this.state.bugs }),
      React.createElement("hr", null),
      React.createElement(BugAdd, null),
      React.createElement(
        "button",
        { onClick: this.handleClick },
        "Add Shit"
      )
    );
  }
});

ReactDOM.render(React.createElement(BugList, null), document.getElementById('main'));