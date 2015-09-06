/**
 * TodoActions
 */

var AppDispatcher = require('../dispatcher/AppDispatcher');
var TodoConstants = require('../constants/TodoConstants');

var TodoActions = {

    create: function(text) {
        //AppDispatcher.handleViewAction({      // <- Used this with the home-made dispatcher
        AppDispatcher.dispatch({
            actionType: TodoConstants.TODO_CREATE,
            text: text
        });
    },

    destroy: function(id) {
        //AppDispatcher.handleViewAction({      // <- Used this with the home-made dispatcher
        AppDispatcher.dispatch({
            actionType: TodoConstants.TODO_DESTROY,
            id: id
        });
    }
};

module.exports = TodoActions;