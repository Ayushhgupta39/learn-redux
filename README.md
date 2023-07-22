# Basic Redux
Visit the official Docs for in-depth understanding of the topic.

[ChatGPT link](https://chat.openai.com/share/22725b99-ee19-4ced-b24b-a592bf1fd5a5)

[Official Docs](https://redux.js.org/tutorials/essentials/part-1-overview-concepts)

### Terminology
There are some important Redux terms that you'll need to be familiar with before we continue:

#### Actions
An `action` is a plain JavaScript object that has a type field. You can think of an action as an event that describes something that happened in the application.

The type field should be a string that gives this action a descriptive name, like `todos/todoAdded`. We usually write that type string like "domain/eventName", where the first part is the feature or category that this action belongs to, and the second part is the specific thing that happened.

A typical action object might look like this:

```
const addTodoAction = {
  type: 'todos/todoAdded',
  payload: 'Buy milk'
}
```

#### Action Creators
An action creator is a function that creates and returns an action object. We typically use these so we don't have to write the action object by hand every time:

```
const addTodo = text => {
  return {
    type: 'todos/todoAdded',
    payload: text
  }
}
```

#### Reducers
A reducer is a function that receives the current `state` and an `action` object, decides how to update the state if necessary, and returns the new state: `(state, action) => newState`.

Reducers must *always* follow some specific rules:

* They should only calculate the new `state` value based on the state and action arguments
* They are not allowed to modify the existing state. Instead, they must make immutable updates, by copying the existing state and making changes to the copied values.
* They must not do any asynchronous logic, calculate random values, or cause other "side effects"

The logic inside reducer functions typically follows the same series of steps:

* Check to see if the reducer cares about this action
    * If so, make a copy of the state, update the copy with new values, and return it
* Otherwise, return the existing state unchanged

Here's a small example of a reducer, showing the steps that each reducer should follow:

```
const initialState = { value: 0 }

function counterReducer(state = initialState, action) {
  // Check to see if the reducer cares about this action
  if (action.type === 'counter/increment') {
    // If so, make a copy of `state`
    return {
      ...state,
      // and update the copy with the new value
      value: state.value + 1
    }
  }
  // otherwise return the existing state unchanged
  return state
}
```

#### Store
The current Redux application state lives in an object called the store .

The store is created by passing in a reducer, and has a method called getState that returns the current state value:

```
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({ reducer: counterReducer })

console.log(store.getState())
// {value: 0}
```

#### Dispatch
The Redux store has a method called `dispatch`. **The only way to update the state is to call store.dispatch() and pass in an action object**. The store will run its reducer function and save the new state value inside, and we can call `getState()` to retrieve the updated value:

```
store.dispatch({ type: 'counter/increment' })

console.log(store.getState())
// {value: 1}
```

**You can think of `dispatching actions` as "triggering an event" in the application. Something happened, and we want the store to know about it. `Reducers` act like event listeners, and when they hear an action they are interested in, they update the state in response.**

**Actions are like "State changers here.**