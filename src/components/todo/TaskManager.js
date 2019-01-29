//============================================================================================================
// This component is responsible for all of the fetch calls to/from the database.
//============================================================================================================

//=====================================     CHAPTER 6   =======================================================================

const taskRemoteURL = "http://localhost:5002/tasks/"
// Since we are all using the same "remoteURL" from the chapter, I changed the name of mine to "taskRemoteURL".

export default {
  get(id) {
    return fetch(`${taskRemoteURL}${id}`).then(t => t.json())
  },
  getAll() {
    return fetch(taskRemoteURL).then(t => t.json())
  }
}
// componentDidMount() is in AppViews because state is also in AppViews!
//============================================================================================================
