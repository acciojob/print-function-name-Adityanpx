//your JS code here. If required.
function functionName() {
  alert(arguments.callee.name); // Works, but not recommended in strict mode
}
functionName();