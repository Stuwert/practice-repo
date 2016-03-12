ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('example')
);

var CommentBox = React.createClass({
  render: function(){
    return (
      <div className="commentbox">
        Hello, world! I am a CommentBox.
      </div>
    );
  }
});

ReactDOM.render(
  <CommentBox />,
  document.getElementById('classist')
)



var BugFilter = React.createClass({
  render: function(){
    return (
      <div className="bugFilter">
        A way to filter bugs will go here.
      </div>
    );
  }
});

var BugAdd = React.createClass({
  render: function(){
    return (
      <div className="bugAdd">
        A way to add a bug will go here.
      </div>
    );
  }
});

var BugRow = React.createClass({
  render: function(){
    return (
      <tr className="bugRow">
        <td>{this.prop.id}</td>
        <td>{this.prop.status}</td>
        <td>{this.prop.priority}</td>
        <td>{this.prop.owner}</td>
        <td>{this.prop.title}</td>
      </tr>
    )
  }
})

var BugTable = React.createClass({
  render: function(){
    return (
      <table className="bugTable">
        <tbody>
          <BugRow id='' status='' priority='' owner='' title='' />
        </tbody>
      </table>
    );
  }
});

var BugList = React.createClass({
  render: function(){
    return (
      <div className="bugList">
        <BugFilter />
        <BugTable />
        <BugAdd />
      </div>
    );
  }
});

ReactDOM.render(
  <BugList />,
  document.getElementById('main')
)
