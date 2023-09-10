/***
 * 1. type : 
 *      string : html element:  document.create element 
 *      function : custom component: call that function and if we have props then pass that also
 * 2. props:
        *  objects
 *        * values ->  strings  : normal attributes ex:  class , id -> setAttribute 
 *        *  children:  
 *              * arrays 
 *                  can have value as string 
 *                  can have value as function : Custom element
 *                  can have a object : normal element
 * */

const obj =
{
    type: 'div',
    props: {
        class: "container",
        children: [
            {
                type: 'h1', props: {
                    children: ' this is '
                }
            },
            {
                type: 'p', props: {
                    class: 'paragraph',
                    children: [
                        ' I am ',
                        {
                            type: (props) => ({
                                type: "button", props:
                                    { children: props.counter + "Clicks" }
                            }),
                            props: { counter: 1 }
                        }
                        ,
                        ' from'
                    ]
                }
            }
        ]
    }
}

/*** 
 * <div   class="container">
 * <h1>this is </h1>
 * <p class ="paragraph">I am <button>1 clicks</button> from</p>
 * </div > 
 * */


function render(obj) {
    let element;
    // if your type is string -> It is normal element

    if (typeof obj.type === "string") {
        element = document.createElement(obj.type);
    }
    // if you custom component -> call that fn with props 

    if (typeof obj.type === "function") {
        const props = obj["props"];

        let elementObj = obj.type(props);
        console.log(elementObj)
        return render(elementObj);
    }
    const props = obj.props;

    for (let prop in props) {

        if (prop == "children") {
            const children = props[prop];
            let isArray = Array.isArray(children);
            console.log("isArray ", isArray);
            if (isArray) {
                for (let i = 0; i < children.length; i++) {
                    const innerChild = children[i];
                    if (typeof innerChild == "string") {
                        const textNode = document.createTextNode(innerChild);
                        element.appendChild(textNode);
                    } else {
                        const childElem = render(children[i]);
                        element.appendChild(childElem);
                    }
                }
            } else {
                const textNode = document.createTextNode(props[prop]);
                element.appendChild(textNode);
            }
        }
        else if (typeof props[prop] == "string") {
            element.setAttribute(prop, props[prop]);
        }




    }


    return element;
}

document.addEventListener("DOMContentLoaded", function () {
    const rootElem = document.querySelector("#root");
    const wholeApp = render(obj);
    console.log("whole app", wholeApp);
    // rootElem.appendChild(wholeApp);
})



