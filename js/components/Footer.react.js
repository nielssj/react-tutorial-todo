var React = require('react');
var ReactPropTypes = React.PropTypes;
var TodoActions = require('../actions/TodoActions');

var Footer = React.createClass({

    propTypes: {
        allTodos: ReactPropTypes.object.isRequired
    },

    render: function() {
        return (
            <footer id="footer">
            </footer>
        );
    }
});

module.exports = Footer;