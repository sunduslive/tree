/**
 * Created by tobias on 09.03.14.
 */

Router.configure({
    layoutTemplate: 'tMain'
});

Router.route('/', {
    layoutTemplate: 'tMain',
    template: 'tfolders',
    data: function() {
        return { nodes: Nodes.find() };
    }
});

Router.route('/:_id', {
    layoutTemplate: 'tMain',
    template: 'tfileSingle',
    data: function() {
        return Nodes.findOne(this.params._id);
    },
    onBeforeAction: function() {
        //var selectedNodes = this.params._id;
        //Session.setPersistent('selectedNodes', selectedNodes);
        //$('#tree1').jstree('select_node', 'w2RGRaforbyh6tmFG');

        this.next();
    }
});