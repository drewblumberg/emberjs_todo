Todos.TodoController = Ember.ObjectController.extend({
	acceptChanges: function () {
		this.set('isEditing',false);
		this.get('model').save();
	},
	
	isEditing: false,
	
	editTodo: function() {
		this.set('isEditing', true);
	},
	
	isCompleted: function(key, value){
		var model = this.get('model');
		
		if (value === undefined) {
			// property being used as a getter
			return model.get('isCompleted')
		} else {
			// property being used as a setter
			model.set('isCompleted', value);
			model.save();
			return value;
		}
	}.property('model.isCompleted'),
	
	removeTodo: function () {
		var todo = this.get('model');
		todo.deleteRecord();
		todo.save();
	}
});