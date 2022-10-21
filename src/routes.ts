import { TaskController } from "./controller/TaskController"
import { UsersController } from "./controller/UsersController"

export const Routes = [
    // Task
    {
        method: "get",
        route: "/task",
        controller: TaskController,
        action: "all"
    },
    {
        method: "get",
        route: "/task/:id",
        controller: TaskController,
        action: "one"
    },
    {
        method: "post",
        route: "/task",
        controller: TaskController,
        action: "save"
    },
    {
        method: "put",
        route: "/task/:id",
        controller: TaskController,
        action: "update"
    },
    {
        method: "delete",
        route: "/task/:id",
        controller: TaskController,
        action: "remove"
    },

    // User
    {
        method: "get",
        route: "/users",
        controller: UsersController,
        action: "all"
    },
    {
        method: "get",
        route: "/users/:id",
        controller: UsersController,
        action: "one"
    },
    {
        method: "post",
        route: "/users",
        controller: UsersController,
        action: "save"
    },
    {
        method: "put",
        route: "/users/:id",
        controller: UsersController,
        action: "update"
    },
    {
        method: "delete",
        route: "/users/:id",
        controller: UsersController,
        action: "remove"
    }
    
]