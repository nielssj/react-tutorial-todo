jest.dontMock("../../constants/TodoConstants");
jest.dontMock("../TodoStore");
jest.dontMock("object-assign");

describe("TodoStore", function() {
    var TodoConstants = require("../../constants/TodoConstants");
    var AppDispatcher;
    var TodoStore;
    var callback;

    // mock actions
    var actionTodoCreate = {
        actionType: TodoConstants.TODO_CREATE,
        text: "foo"
    };
    var actionTodoDestroy = {
        actionType: TodoConstants.TODO_DESTROY,
        id: "replace me in test"
    };

    beforeEach(function() {
        AppDispatcher = require("../../dispatcher/AppDispatcher");
        TodoStore = require("../TodoStore");
        callback = AppDispatcher.register.mock.calls[0][0];
    });

    it("registers a callback with the dispatcher", function() {
        expect(AppDispatcher.register.mock.calls.length).toBe(1);
    });

    it("should initialize with no to-do items", function() {
        var all = TodoStore.getAll();
        expect(all).toEqual({});
    });

    it("creates a to-do item", function() {
        callback(actionTodoCreate);
        var all = TodoStore.getAll();
        var keys = Object.keys(all);
        expect(keys.length).toBe(1);
        expect(all[keys[0]].text).toEqual("foo");
    });

    it("destroys a to-do item", function() {
        callback(actionTodoCreate);
        var all = TodoStore.getAll();
        var keys = Object.keys(all);
        expect(keys.length).toBe(1);
        actionTodoDestroy.id = keys[0];
        callback(actionTodoDestroy);
        expect(all[keys[0]]).toBeUndefined();
    });
});



/*
Same as line below, but with more local variables for elaboration.

We utilize the mocking framework to retrieve the first registered
callback in the dispatcher, which happens to be the one belonging
to the store we are trying to test.

var mockRegister = AppDispatcher.register;
var mockRegisterInfo = mockRegister.mock;
var callsToRegister = mockRegisterInfo.calls;
var firstCall = callsToRegister[0];
var firstArgument = firstCall[0];
var callback = firstArgument;

callback = AppDispatcher.register.mock.calls[0][0];
*/
