# Asked In : Flipkart


## Problem statement 
* create a piping fn 



## Test case
```js
const obj={
     key4: (a,b,c)=> a-b-c,
        key5: [1,2,3,4,5],
    key1:{
        key2:(a,b,c)=>a+b+c,
        key3:(a,b,c) => a+b-c,
        },
    key5:null
}
```
Fn(obj)(1,1,1);
## Output
```js
obj={
    key4:-1,
    key5:[1,2,3,4,5],
    key1:{
        key2:3,
        key3: 0
    },
    key5:null
}

```


