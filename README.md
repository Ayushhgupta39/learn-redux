# Learn Redux

### Terminology
There are some important Redux terms that you'll need to be familiar with before we continue:

#### Actions
An `action` is a plain JavaScript object that has a type field. You can think of an action as an event that describes something that happened in the application.

The type field should be a string that gives this action a descriptive name, like `todos/todoAdded`. We usually write that type string like "domain/eventName", where the first part is the feature or category that this action belongs to, and the second part is the specific thing that happened.