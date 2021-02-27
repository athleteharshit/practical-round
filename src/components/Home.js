import { useState } from "react";
import { connect } from "react-redux";
import { addTask } from "../redux/index";
import TaskList from "./TaskList";


const Home = (props) => {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const addTaskFunction = (e) => {
    e.preventDefault();
    let input = { task, description, startTime, endTime };
    if (
      task === "" ||
      description === "" ||
      startTime === null ||
      endTime === null
    ) {
      alert("Input task is empty");
    } else {
      props.dispatch(addTask(input));
    }
    setTask("");
    setDescription("");
    setStartTime("");
    setEndTime("");
  };
  return (
    <>
      <div className="container my-2">
        <div class="row">
          <div class="col">
            <div
            // style={{
            //   width: "100vw",
            //   display: "flex",
            //   alignItems: "center",
            //   justifyContent: "center",
            // }}
            >
              <div style={{ maxWidth: "400px", minWidth: "300px" }}>
                <form onSubmit={addTaskFunction}>
                  <div className="mb-3">
                    <label for="formGroupExampleInput" className="form-label">
                      Task Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="formGroupExampleInput"
                      placeholder="Task Name"
                      value={task}
                      onChange={(e) => setTask(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label for="formGroupExampleInput2" className="form-label">
                      Description
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="formGroupExampleInput2"
                      placeholder="Description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label for="formGroupExampleInput2" className="form-label">
                      Start Time
                    </label>
                    <input
                      type="time"
                      className="form-control"
                      id="formGroupExampleInput2"
                      placeholder="Description"
                      value={startTime}
                      onChange={(e) => setStartTime(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label for="formGroupExampleInput2" className="form-label">
                      End Time
                    </label>
                    <input
                      type="time"
                      className="form-control"
                      id="formGroupExampleInput2"
                      placeholder="Description"
                      value={endTime}
                      onChange={(e) => setEndTime(e.target.value)}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary mt-2">
                    Add Task
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div class="col">
            <TaskList />
          </div>
        </div>
      </div>
    </>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     data: state.data
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addTask: () => dispatch(addTask()),
//     removeTask: () => dispatch(removeTask()),
//   };
// };

export default connect()(Home);
