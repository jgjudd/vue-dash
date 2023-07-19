
const linear_search = (list: string[], searchValue: string) : boolean => {
  for (let x = 0; x < list.length; x++) {
    if (list[x] === searchValue) {
      return true;
    }
  }
  return false;
}

const test = "test"
const myList = ["asdf", "lkjfas", "test", "asdfasdffff"]
const isInList = linear_search(myList, test)
console.log(isInList);