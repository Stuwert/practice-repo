ReactDOM.render(
  <h1>Bug Table</h1>,
  document.getElementById('example')
);



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
      <tr>
        <td>{this.props.bug.id}</td>
        <td>{this.props.bug.status}</td>
        <td>{this.props.bug.priority}</td>
        <td>{this.props.bug.owner}</td>
        <td>{this.props.bug.title}</td>
      </tr>
    );
  }
})

var BugTableHeader = React.createClass({
  render: function(){
    return (
      <thead>
        <tr>
          <th>Id</th>
          <th>Status</th>
          <th>Priority</th>
          <th>Owner</th>
          <th>Title</th>
        </tr>
      </thead>
    )
  }
})

var BugTable = React.createClass({
  render: function(){
    var bugRows = this.props.bugs.map(function(bug){
      return <BugRow key={bug.id} bug={bug} />
    });
    return (
      <table className="bugTable">
        <BugTableHeader />
        <tbody>
          {bugRows}
        </tbody>
      </table>
    );
  }
});

var bugData = [
  {id: 1, status: 'caught', priority: 'low', owner: 'bob', title: 'Butterfree'},
  {id: 2, status: 'uncaught', priority: 'high', owner: 'ash', title:'Weedle'}
];

var nid = 3;

var BugList = React.createClass({
  getInitialState: function(){
    return {bugs: bugData};
  },
  handleClick: function(){
    this.addBug({id: nid, status: 'uncaught', priority: 'medium', owner:'Stuart', title:'Shit doesn\'t work'});
    nid++;
  },
  addBug: function(obj){
    bugData.push(obj);
    this.setState({bugs: bugData});
  },
  render: function(){
    console.log("Bing Bong");
    return (
      <div className="bugList">
        <h1>Bug Tracker</h1>
        <BugFilter />
        <hr />
        <BugTable bugs={this.state.bugs} />
        <hr />
        <BugAdd />
        <button onClick={this.handleClick}>Add Shit</button>
      </div>
    )
  }
});


ReactDOM.render(
  <BugList />,
  document.getElementById('main')
)
