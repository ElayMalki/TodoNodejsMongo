(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header {\n    margin-left: 50px;\n}\n\n\n.todoApp {\n    min-height: 200px;\n    min-width: 100px;\n    max-width: 500px;\n    border-bottom: 19px solid rgba(255, 123, 149, 0.1);\n    border-top: 19px solid rgba(255, 123, 149, 0.8);\n    border-radius: 5px;\n    padding: 20px 30px 40px 40px;\n\n}\n\n\nh1 {\n    font-size: 2rem;\n    font-family: Georgia, 'Times New Roman', Times, serif;\n    color: rgba(240,190,200,.9)\n}\n\n\ninput {\n    padding: 4px 50px;\n    color: rgba(20 , 20green, blue, 5);\n    outline:none;\n    border: none;\n    border-bottom: 1px solid grey;\n    margin-bottom: 12px;\n}\n\n\nul {\n    padding: 0;\n    transition:-webkit-transform 0.4s;\n    transition:transform 0.4s;\n    transition:transform 0.4s, -webkit-transform 0.4s;\n}\n\n\n.todoView {\n    /*transform: scale(0.75);*/\n    display: flex;\n    align-items: center;\n    /*border-radius: 50px;*/\n    position: relative;\n    margin-top: 16px;\n    transition: 300ms;\n    /*transition: 100ms;*/\n}\n\n\n.todoView:hover {\n    /*background-image: linear-gradient(-90deg, rgba(160,160,130,0), rgba(220, 59, 59, .09));*/\n    border-left: 6px solid rgba(220, 59, 59, .09);\n\n}\n\n\n.todoView:hover~#dbclick {\n    display: block;\n}\n\n\n#dbclick {\n    display: none;\n    position: absolute;\n    left: 130px;\n    top: -20px;\n    background-color: rgba(255, 123, 149, 0.4);\n    opacity: .5;\n    border-radius: 3px;\n    font: 10px Georgia;\n    color:  rgba(156, 52, 52, .9);\n    z-index: 100;\n}\n\n\nli {\n    position: relative;\n    font: 20px/30px 'Cabin', sans-serif;\n    color: rgba(113, 0, 0, 0.7);\n    list-style-type: none;\n    transition: -webkit-transform 0.4s;\n    transition: transform 0.4s;\n    transition: transform 0.4s, -webkit-transform 0.4s;\n    -ms-grid-row-align: center;\n        align-self: center;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n\n}\n\n\n.completed{\n    text-decoration: line-through;\n    color: rgba(113, 0, 0, 0.2);\n\n}\n\n\n.deleteButton{\n    font: italic bold 25px/50px fantasy;\n    margin: 0px 150px;\n    border:none;\n    color:red;\n    outline:none;\n    padding: 7px 20px 0px 19px;\n    transition: 200ms;\n    border-radius: 50%;\n    position: absolute;\n    right: 0;\n    -webkit-transform: scale(0.5);\n            transform: scale(0.5);\n}\n\n\n.deleteButton:hover{\n    border: 2px solid rgba(250 ,0,0, .4);\n    transition: 200ms;\n}\n\n\n.deleteButton:active {  border: 2px solid rgba(250 ,0,0, 1); background-color: rgba(250 ,0,0, 0.2); transition: 400ms; }\n\n\n.toggle{\n    margin: 0px 25px;\n}\n\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<section class = \"todoApp\">\n  <header class = \"header\">\n<h1>Todos</h1>\n<input #title class =\"newtodo\" placeholder=\"Insert a new todo...\" maxlength=\"22\" [(ngModel)]=\"newTodo.title\" (keyup.enter)=\"updateId ? updateTodo(updateId) :  addTodo()\">\n</header>\n<section class =\"todoMain\">\n  <ul class=\"todosList\">\n    <li *ngFor=\"let todo of todos\" [class.completed]=\"todo.complete\" (dblclick)=\"updateTitle(todo) ; updateId = todo._id\">\n      <div class=\"todoView\">\n        <input class=\"toggle\" type=\"checkbox\" (click)=\"toggleTodo(todo)\" [checked]=\"todo.complete\">\n        <label>{{todo.title}}</label>\n\n        <button class=\"deleteButton\" (click)=\"removeTodo(todo._id)\">X</button>\n      </div>\n      <span id=\"dbclick\">Double click<br>for update!</span>\n    </li>\n  </ul>\n</section>\n\n<footer></footer>\n\n</section>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _todo_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo-data.service */ "./src/app/todo-data.service.ts");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo */ "./src/app/todo.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(todoDataService) {
        this.todoDataService = todoDataService;
        this.title = 'TodoApp';
        this.newTodo = new _todo__WEBPACK_IMPORTED_MODULE_2__["Todo"]();
        this.getAllInit();
        // this.todos = this.todoDataService.getAllTodos();
    }
    AppComponent.prototype.focusInput = function () {
        this.nameField.nativeElement.focus();
    };
    AppComponent.prototype.updateTitle = function (tododo) {
        this.newTodo.title = tododo.title;
        this.focusInput();
    };
    AppComponent.prototype.getAllInit = function () {
        var _this = this;
        this.todoDataService.getConfig().subscribe(function (result) {
            _this.todos = result;
            console.log(_this.todos);
        });
    };
    AppComponent.prototype.addTodo = function () {
        var _this = this;
        this.todoDataService.addTodo(this.newTodo).subscribe(function (res) {
            _this.getAllInit();
            console.log(res);
        });
        this.newTodo = new _todo__WEBPACK_IMPORTED_MODULE_2__["Todo"]();
    };
    AppComponent.prototype.removeTodo = function (id) {
        var _this = this;
        this.todoDataService.deleteTodoById(id).subscribe(function () {
            _this.getAllInit();
        });
        console.log('Pushed!!!!!');
    };
    AppComponent.prototype.updateTodo = function (id) {
        var _this = this;
        this.todoDataService.updateTodoById(this.newTodo, id).subscribe(function () {
            _this.getAllInit();
            _this.updateId = undefined;
            _this.newTodo = {};
        });
        console.log('Pushed update$$$');
    };
    AppComponent.prototype.toggleTodo = function (todo) {
        this.todoDataService.toggleTodo(todo);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('title'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], AppComponent.prototype, "nameField", void 0);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_todo_data_service__WEBPACK_IMPORTED_MODULE_1__["TodoDataService"]])
    ], AppComponent);
    return AppComponent;
}());

// consoleFun() {
//   this.conVar = this.todoDataService.getConfig().subscribe(res => {
//   console.log(res);
//   });
// }


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/todo-data.service.ts":
/*!**************************************!*\
  !*** ./src/app/todo-data.service.ts ***!
  \**************************************/
/*! exports provided: TodoDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoDataService", function() { return TodoDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json'
    }),
    withCredentials: true
};
var TodoDataService = /** @class */ (function () {
    function TodoDataService(http) {
        this.http = http;
        this.getUrl = '/api/get_todos';
        this.postUrl = '/api/create_todo';
        this.todos = [];
    }
    TodoDataService.prototype.getConfig = function () {
        return this.http.get(this.getUrl, { withCredentials: true });
    };
    TodoDataService.prototype.addTodo = function (todo) {
        this.todos = [];
        todo.id = ++this.lastId;
        this.todos.push(todo);
        return this.http.post(this.postUrl, this.todos, httpOptions);
    };
    TodoDataService.prototype.deleteTodoById = function (id) {
        var deleteUrl = "/api/delete_todo/" + id;
        console.log(deleteUrl);
        return this.http.delete(deleteUrl);
    };
    TodoDataService.prototype.updateTodoById = function (todo, id) {
        var updateUrl = '/api/update_todo/' + id;
        return this.http.put(updateUrl, todo);
    };
    TodoDataService.prototype.getTodoById = function (id) {
        return this.todos.filter(function (todo) { return todo.id === id; }).pop();
    };
    TodoDataService.prototype.getAllTodos = function () {
        return this.todos;
    };
    TodoDataService.prototype.toggleTodo = function (todo) {
        todo.complete = !todo.complete;
        return this.http.put(this.postUrl, this.todos, httpOptions);
    };
    TodoDataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TodoDataService);
    return TodoDataService;
}());



/***/ }),

/***/ "./src/app/todo.ts":
/*!*************************!*\
  !*** ./src/app/todo.ts ***!
  \*************************/
/*! exports provided: Todo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Todo", function() { return Todo; });
var Todo = /** @class */ (function () {
    function Todo(values) {
        if (values === void 0) { values = {}; }
        this.complete = false;
        Object.assign(this, values);
    }
    return Todo;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Applications/MAMP/htdocs/TODOangular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map