## Asked in Amazon , ByteDance 

Please create your own get().

const obj = {
  a: {
    b: {
      c: [1,2,3]
    }
  }
}

get(obj, 'a.b.c') // [1,2,3]
get(obj, 'a.b.c.0') // 1
get(obj, 'a.b.c[1]') // 2
get(obj, ['a', 'b', 'c', '2']) // 3
get(obj, 'a.b.c[3]') // undefined
<!-- if i am requesting for a key , 
alternate message then if that key is not found please print the arg -->
get(obj, 'a.c', 'bfe') // 'bfe'