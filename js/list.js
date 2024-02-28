function node(e) {
  return {
    value: e || null,
    nextNode: null,
  };
}
function linkedList() {
  let length = 0;
  let headList = null;

  const append = (value) => {
    let newNodo = node(value);
    length++;

    if (headList === null) {
      headList = newNodo;
    } else {
      let ref = headList;
      while (ref.nextNode !== null) {
        ref = ref.nextNode;
      }
      ref.nextNode = newNodo;
    }
  };
  const prepend = (value) => {
    let newNodo = node(value);
    length++;
    if (headList === null) {
      return (headList = newNodo);
    }
    newNodo.nextNode = headList;
    headList = newNodo;
  };
  const size = () => {
    if (headList === null) return null;
    return length;
  };
  const head = () => {
    if (headList === null) return null;
    return headList;
  };
  const tail = () => {
    if (headList === null) return null;
    let ref = headList;
    while (ref.nextNode !== null) {
      ref = ref.nextNode;
    }
    return ref;
  };
  const at = (index) => {
    let count = 0;
    let ref = headList;
    while (count < index) {
      ref = ref?.nextNode;
      count += 1;
    }
    return ref;
  };
  const pop = () => {
    if (headList === null) return null;
    if (headList.nextNode === null) return null;
    at(size() - 2).nextNode = null;
    length--;
  };
  const contain = (value) => {
    let ref = headList;
    while (ref !== null) {
      if (ref.value === value) return true;
      ref = ref.nextNode;
    }
  };
  const find = (value) => {
    let ref = headList;
    for (let i = 0; i < length; i++) {
      if (ref.value === value) {
        return i;
      }
      ref = ref.nextNode;
    }
  };
  const toString = () => {
    if (headList === null) {
      return null;
    }
    let ref = headList;

    let textNode = "";
    while (ref.nextNode !== null) {
      textNode += `(${ref?.value}) -->`;
      ref = ref.nextNode;
    }

    return `${textNode} null`;
  };

  return {
    append,
    prepend,
    size,
    head,
    tail,
    at,
    pop,
    contain,
    find,
    toString,
  };
}

const linked = linkedList();

linked.prepend("test1");
linked.append("test2");
linked.append("test3");
console.log(linked.toString()); // (test1) -> (test2) -> (test3) -> null
console.log(linked.size()); // 3
console.log(linked.head()); // return head Node
console.log(linked.tail()); // Node { value: 'test3', nextNode: null }
console.log(linked.at(2)); // Node { value: 'test3', nextNode: null }
console.log(linked.at(4)); // There is no item for this index
linked.pop();
console.log(linked.toString()); // (test1) -> (test2) -> null
console.log(linked.contain("test1")); // true
console.log(linked.find("test2")); // 1
linked.prepend("test3");
console.log(linked.toString()); // (test3) -> (test1) -> (test2) -> null
