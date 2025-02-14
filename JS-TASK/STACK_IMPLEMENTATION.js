class Stack {
    constructor() {
        this.stack=[];
    }
    push(item){
     this.stack.push(item);
     return this.stack;
    }
    pop(){
        if (this.isEmpty()) {
            console.log("Stack is empty so cant do pop operation");
            return;
        }
        this.stack.pop();
        return this.stack;
    }
    isEmpty(){
        return this.stack.length===0 ?true:false;
    }
    peek(){
        if (this.isEmpty()) {
            console.log("stack is empty so there is no element in the stack");
            return;
        }
        return this.stack[this.stack.length-1];

    }
    print(){
        for (let i of this.stack) {
            console.log(i);
            
            
        }
    }
};
const babyStack =new Stack();

babyStack.push(1);
babyStack.push(2);
babyStack.push(3);
babyStack.push(4);
babyStack.print();
console.log(babyStack.pop());
console.log(babyStack.peek());

babyStack.print();
