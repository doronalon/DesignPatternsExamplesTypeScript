"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PrototypeExample;
(function (PrototypeExample) {
    ;
    var TCPPacket = /** @class */ (function () {
        function TCPPacket() {
            this.secured = false;
            this.port = 0;
        }
        TCPPacket.prototype.clone = function () {
            var copy = new TCPPacket();
            copy.setData(this.data);
            copy.setURL(this.url);
            copy.setPort(this.port);
            copy.setSecured(this.secured);
            return copy;
        };
        TCPPacket.prototype.setURL = function (url) {
            this.url = url;
        };
        TCPPacket.prototype.setPort = function (port) {
            this.port = port;
        };
        TCPPacket.prototype.setSecured = function (secured) {
            this.secured = secured;
        };
        TCPPacket.prototype.setData = function (data) {
            this.data = data;
        };
        TCPPacket.prototype.print = function () {
            console.log("TCPPacket. URL = " + this.url + "  Port = " + this.port
                + "  Secured = " + (this.secured ? " Yes" : " No") + "  Data =[ "
                + this.data + "]");
        };
        return TCPPacket;
    }());
    ;
    var TCPSender // client
     = /** @class */ (function () {
        function TCPSender() {
        }
        TCPSender.prototype.setDefaultPacket = function (packet) {
            this.defaultPacket = packet;
        };
        TCPSender.prototype.createTCPPacket = function () {
            return this.defaultPacket.clone();
        };
        return TCPSender;
    }());
    ;
    function demoUseOfPrototype() {
        var defaultPacket = new TCPPacket();
        defaultPacket.setURL("localhost");
        defaultPacket.setPort(80);
        defaultPacket.setSecured(false);
        defaultPacket.setData("XXX");
        var tcpSender = new TCPSender();
        tcpSender.setDefaultPacket(defaultPacket);
        var packet = tcpSender.createTCPPacket();
        packet.print();
        var packet2 = tcpSender.createTCPPacket();
        packet2.print();
        console.log("packet == packet2 : " + (packet == packet2));
        console.log("packet == defaultPacket : " + (packet == defaultPacket));
    }
    PrototypeExample.demoUseOfPrototype = demoUseOfPrototype;
})(PrototypeExample || (PrototypeExample = {}));
PrototypeExample.demoUseOfPrototype();
//# sourceMappingURL=PrototypeExample.js.map