Nodes1 = {};
Search1 = {};

Template.showtree.onRendered(function() {


    var self = this;
    var nodes = [];

    Nodes1 = $('#tree1').tree()
        .on('select_node.jstree', function(e, data) {
            var categoryId = data.node.id;
            setTimeout(function() { Router.go('/' + categoryId); }, 0);
        })

    .on('open_node.jstree', function(e, data) {
        console.log("state")
        $("#tree1").jstree(true).set_state();

    })

    .bind('create_node.jstree', function(e, data) {
        Session.get('selectedNodes');
    })

     .on('ready.jstree', function(e, data) {
        $('#tree1').jstree(true).restore_state();
        console.log("restored");
        $('#tree1').jstree('select_node', 'X8nw7YCXZuGs38iuf');
        $('#tree1').jstree("open_all");
        
    })

    .on('loaded.jstree', function(evt, data) {
        $("#tree1").jstree(true).get_selected("X8nw7YCXZuGs38iuf");
        $('#tree1').jstree("open_all");


    })

    .on('keydown.jstree', '.jstree-anchor', function(e) {
        if (e.which === 70) {
            console.log("key");
            $(e.target).trigger('createFolder');
        }
    });

    if (!self.handle) {
        self.handle = Tracker.autorun(function() {
            // refresh trees on new data
            nodes = Nodes.find();
            Nodes1.tree('option', 'data', 'Projects');
            $("#tree1").jstree(true).save_state();

        });
    }
});

Template.showtree.events(

    _.extend({
        'createFolder': function(evt) {
            evt.preventDefault();
            Nodes1.tree('createNode', evt, 'default', 'New Folder', true);

        },
        'createNode': function(evt) {
            evt.preventDefault();
            Nodes1.tree('createNode', evt, 'file', 'New File', true);
        },
        'click #createFolder1': function(evt) {
            evt.preventDefault();
            Nodes1.tree('createNode', evt, 'default', 'New Folder', true);
        },
        'click #createNode1': function(evt) {
            evt.preventDefault();
            Nodes1.tree('createNode', evt, 'file', 'New File', true);
        },
        'click #renameNode1': function(evt) {
            evt.preventDefault();
            Nodes1.tree('renameNode', evt);
        },
        'renameNode': function(evt) {
            evt.preventDefault();
            Nodes1.tree('renameNode', evt);
        },
        'click #removeNode1': function(evt) {
            evt.preventDefault();
            Nodes1.tree('deleteNode', evt);
        },
        'removeNode': function(evt) {
            evt.preventDefault();
            Nodes1.tree('deleteNode', evt);
        },
        'keyup #searchNode1': function(evt) {
            evt.preventDefault();
            Nodes1.tree('searchNode', '#searchNode1');
        }


    })
);