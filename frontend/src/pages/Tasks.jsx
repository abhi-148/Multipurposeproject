import { useEffect, useState }
from "react";

import axios from "axios";

import "./Tasks.css";

const Tasks = () => {

  /* =========================
     STATES
  ========================= */

  const [tasks, setTasks] =
    useState([]);

  const [search, setSearch] =
    useState("");

  const [editingId, setEditingId] =
    useState(null);

  const [formData, setFormData] =
    useState({

      title: "",
      description: "",
      status: "Pending",
      priority: "Medium",

    });

  /* =========================
     USER + TOKEN
  ========================= */

  const user =
    JSON.parse(
      localStorage.getItem("user")
    );

  const token =
    localStorage.getItem("token");

  /* =========================
     HANDLE CHANGE
  ========================= */

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]:
      e.target.value,

    });

  };

  /* =========================
     FETCH TASKS
  ========================= */

  const fetchTasks = async () => {

    try {

      const res =
        await axios.get(

          `http://localhost:5000/tasks/${user.email}`,

          {

            headers: {

              Authorization:
              `Bearer ${token}`

            }

          }

        );

      setTasks(res.data);

    } catch (error) {

      console.log(error);

    }

  };

  useEffect(() => {

    fetchTasks();

  }, []);

  /* =========================
     ADD TASK
  ========================= */

  const addTask = async (e) => {

    e.preventDefault();

    try {

      await axios.post(

        "http://localhost:5000/add-task",

        {

          ...formData,

          user_email:
          user.email,

        },

        {

          headers: {

            Authorization:
            `Bearer ${token}`

          }

        }

      );

      resetForm();

      fetchTasks();

    } catch (error) {

      console.log(error);

    }

  };

  /* =========================
     DELETE TASK
  ========================= */

  const deleteTask = async (id) => {

    try {

      await axios.delete(

        `http://localhost:5000/delete-task/${id}`,

        {

          headers: {

            Authorization:
            `Bearer ${token}`

          }

        }

      );

      fetchTasks();

    } catch (error) {

      console.log(error);

    }

  };

  /* =========================
     EDIT TASK
  ========================= */

  const editTask = (task) => {

    setEditingId(task.id);

    setFormData({

      title: task.title,

      description:
      task.description,

      status: task.status,

      priority:
      task.priority || "Medium",

    });

  };

  /* =========================
     UPDATE TASK
  ========================= */

  const updateTask = async (e) => {

    e.preventDefault();

    try {

      await axios.put(

        `http://localhost:5000/edit-task/${editingId}`,

        formData,

        {

          headers: {

            Authorization:
            `Bearer ${token}`

          }

        }

      );

      setEditingId(null);

      resetForm();

      fetchTasks();

    } catch (error) {

      console.log(error);

    }

  };

  /* =========================
     RESET FORM
  ========================= */

  const resetForm = () => {

    setFormData({

      title: "",
      description: "",
      status: "Pending",
      priority: "Medium",

    });

  };

  /* =========================
     FILTERED TASKS
  ========================= */

  const filteredTasks =

    tasks.filter((task) =>

      task.title
      .toLowerCase()
      .includes(
        search.toLowerCase()
      )

    );

  /* COUNTS */

  const completedTasks =

    tasks.filter(

      (task) =>
      task.status ===
      "Completed"

    ).length;

  const pendingTasks =

    tasks.filter(

      (task) =>
      task.status ===
      "Pending"

    ).length;

  return (

    <section className="tasks-page">

      {/* =========================
         TOPBAR
      ========================= */}

      <div className="tasks-topbar">

        <div>

          <h1>
            Task Dashboard
          </h1>

          <p>
            Welcome back,
            {" "}
            {user?.name}
          </p>

        </div>

        <div className="profile-box">

          <div className="profile-circle">

            {
              user?.name?.charAt(0)
            }

          </div>

          <div>

            <h3>
              {user?.name}
            </h3>

            <span>
              {user?.email}
            </span>

          </div>

        </div>

      </div>

      {/* =========================
         STATS
      ========================= */}

      <div className="stats-grid">

        <div className="stat-card purple">

          <h2>
            {tasks.length}
          </h2>

          <p>
            Total Tasks
          </p>

        </div>

        <div className="stat-card green">

          <h2>
            {completedTasks}
          </h2>

          <p>
            Completed
          </p>

        </div>

        <div className="stat-card orange">

          <h2>
            {pendingTasks}
          </h2>

          <p>
            Pending
          </p>

        </div>

      </div>

      {/* =========================
         MAIN GRID
      ========================= */}

      <div className="tasks-grid">

        {/* =========================
           FORM
        ========================= */}

        <div className="task-form-card">

          <h2>

            {

              editingId

              ?

              "Update Task"

              :

              "Create Task"

            }

          </h2>

          <form

            onSubmit={

              editingId

              ?

              updateTask

              :

              addTask

            }

          >

            {/* TITLE */}

            <div className="input-group">

              <label>
                Task Title
              </label>

              <input
                type="text"
                name="title"
                placeholder="Enter task title"
                value={formData.title}
                onChange={handleChange}
                required
              />

            </div>

            {/* DESCRIPTION */}

            <div className="input-group">

              <label>
                Description
              </label>

              <textarea
                name="description"
                placeholder="Enter task description"
                value={formData.description}
                onChange={handleChange}
                required
              />

            </div>

            {/* STATUS */}

            <div className="input-group">

              <label>
                Status
              </label>

              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
              >

                <option>
                  Pending
                </option>

                <option>
                  In Progress
                </option>

                <option>
                  Completed
                </option>

              </select>

            </div>

            {/* PRIORITY */}

            <div className="input-group">

              <label>
                Priority
              </label>

              <select
                name="priority"
                value={formData.priority}
                onChange={handleChange}
              >

                <option>
                  Low
                </option>

                <option>
                  Medium
                </option>

                <option>
                  High
                </option>

              </select>

            </div>

            {/* BUTTON */}

            <button type="submit">

              {

                editingId

                ?

                "Update Task"

                :

                "Add Task"

              }

            </button>

          </form>

        </div>

        {/* =========================
           TASK LIST
        ========================= */}

        <div className="task-list-card">

          {/* SEARCH */}

          <div className="task-list-top">

            <input

              type="text"

              placeholder="Search Tasks"

              className="search-input"

              onChange={(e)=>

                setSearch(
                  e.target.value
                )

              }

            />

          </div>

          {/* TASK ITEMS */}

          {

            filteredTasks.length === 0

            ?

            (

              <div className="empty-box">

                <i className="fa-solid fa-list-check"></i>

                <p>
                  No Tasks Found
                </p>

              </div>

            )

            :

            (

              filteredTasks.map((task) => (

                <div
                  className="task-item"
                  key={task.id}
                >

                  <div>

                    <h3>
                      {task.title}
                    </h3>

                    <p>
                      {task.description}
                    </p>

                    <div className="badge-group">

                      <span className="status-badge">

                        {task.status}

                      </span>

                      <span className="priority-badge">

                        {task.priority}

                      </span>

                    </div>

                  </div>

                  <div className="task-actions">

                    <button

                      className="edit-btn"

                      onClick={() =>
                        editTask(task)
                      }

                    >

                      Edit

                    </button>

                    <button

                      className="delete-btn"

                      onClick={() =>
                        deleteTask(task.id)
                      }

                    >

                      Delete

                    </button>

                  </div>

                </div>

              ))

            )

          }

        </div>

      </div>

    </section>

  );

};

export default Tasks;