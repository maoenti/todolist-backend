import { TaskController } from "./controller/TaskController"

export const Routes = [{
    method: "get",
    route: "/task",
    controller: TaskController,
    action: "all"
}, {
    method: "get",
    route: "/task/:id",
    controller: TaskController,
    action: "one"
}, {
    method: "post",
    route: "/task",
    controller: TaskController,
    action: "save"
}, {
    method: "put",
    route: "/task/:id",
    controller: TaskController,
    action: "update"
},{
    method: "delete",
    route: "/task/:id",
    controller: TaskController,
    action: "remove"
}]