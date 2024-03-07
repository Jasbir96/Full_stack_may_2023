## class based componet
* initial state is defined inside constructor
*  you this is only availabel inside the life cycle methods
* this.setState to update the

## Stages of a react  component
* mounting : creation
* updation 
* unmount : deletion 
### Life cycle methods -> class based component
* `constructor` :use to define the state 
* `render` : render the output

* runs only once after first render
    *   Class Component :`componentDidMount()`
    *   functional `useEffect(cb, [])`

* run only when dependecy array changes 
    * Class Component : `componentDidMount`+ `componentDidUpdate`
    * Fucntional component : `useEffect(cb, [dep1,dep2])`
* run on un mount 
    *  Class Component : componenetWillUnmount
    * functional `useEffect(cb,[])` -> clean up function  



