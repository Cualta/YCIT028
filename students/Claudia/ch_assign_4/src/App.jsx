import "./styles.css"

export function App() {
    return (
        <div className="App">
            <h1>To Do list</h1>
            <div className="main">
                <div className="Label">
                    <div>Todo</div>
                    <div>Description</div>
                    <div>Date</div>
                    <div>Action</div>
                </div>
                <div>
                    <ToDoList />
                </div>
            </div>
        </div>
    )
}
