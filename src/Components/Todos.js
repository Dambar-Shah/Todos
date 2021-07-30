import React from 'react'
import { TodoItem } from './TodoItem'

export const Todos = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-10 mx-auto">
                    <h3 className="y-5">Todos List</h3>
                    {props.todos.length === 0 ? "No Todos for display" :
                        props.todos.map((todo) => {
                            return(<TodoItem key={todo.sno} todo={todo} onDelete={props.onDelete} />)
                        })
                    }
                </div>
            </div>
        </div>
    )
}
