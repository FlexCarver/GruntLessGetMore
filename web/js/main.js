console.log("hello from the sandbox");

var tester = function() {
    console.log("hello from the tester function");
};

tester();

(function() {
    var o = new WebSocket("ws://localhost:35729");
    o.onmessage = function(o) {
        if (JSON.parse(o.data).command == "reload") {
            window.location.reload();
        }
    };
})();