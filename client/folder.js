Template.tfolder.helpers({
	folderChildren: ()=> {
		var nodeId = Router.current().params._id;
		return Nodes.find({ "parent": nodeId });
	}
});