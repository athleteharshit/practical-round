import { connect } from "react-redux";
import { removeTask } from "../redux";

const TaskList = (props) => {
  // console.log(props);
  return (
    <>
      {props.task.length !== 0 ? <h3 class="fw-light">Task List</h3> : null}
      <div>
        {props.task.map((item) => (
          <div key={item.id} className="my-2">
            <div className="card w-75">
              <div className="card-body">
                <h5 className="card-title">{item.task}</h5>
                <p className="card-text">{item.description}</p>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <span className="text-muted">
                    Start time: {item.startTime}
                  </span>
                  <span className="text-muted">End time: {item.endTime}</span>
                </div>
                <button
                  className="btn btn-primary"
                  onClick={() => props.dispatch(removeTask(item.id))}
                >
                  Remove Task
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    task: state.data,
  };
};

export default connect(mapStateToProps)(TaskList);
