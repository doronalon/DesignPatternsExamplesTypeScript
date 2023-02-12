import { Hash } from "crypto";

namespace PrototypeExample {

 interface BaseTCPPacket
{
		clone():BaseTCPPacket;
		print();
};

class TCPPacket implements BaseTCPPacket // concrete prototype
{
	public constructor() {
		this.secured = false;
		this.port = 0;
	}

	public  clone():BaseTCPPacket {
		let copy:TCPPacket = new TCPPacket();
		copy.setData(this.data);
		copy.setURL(this.url);
		copy.setPort(this.port);
		copy.setSecured(this.secured);
		return copy;
	}

	public setURL(url:String):void {
		this.url = url;
	}

	public setPort(port:number):void {
		this.port = port;
	}

	public setSecured(secured:boolean):void {
		this.secured = secured;
	}

	public setData(data:String):void {
		this.data = data;
	}

	public print():void {
		console.log("TCPPacket. URL = " + this.url + "  Port = " + this.port
				+ "  Secured = " + (this.secured ? " Yes" : " No") + "  Data =[ "
				+ this.data + "]" );
	}

	private url:String;
	private port:number;
	private secured:boolean;
	private data:String;
};


class TCPSender // client
{
	public setDefaultPacket(packet:BaseTCPPacket):void {
		this.defaultPacket = packet;
	}

	public createTCPPacket():BaseTCPPacket {
		return this.defaultPacket.clone();
	}

	private defaultPacket:BaseTCPPacket;
};

export function demoUseOfPrototype()
	{
		let defaultPacket:TCPPacket = new TCPPacket();
		defaultPacket.setURL("localhost");
		defaultPacket.setPort(80);
		defaultPacket.setSecured(false);
		defaultPacket.setData("XXX");

		let tcpSender:TCPSender = new TCPSender();   
		tcpSender.setDefaultPacket(defaultPacket);
		let packet:BaseTCPPacket = tcpSender.createTCPPacket();
		packet.print();
		let packet2:BaseTCPPacket = tcpSender.createTCPPacket();
		packet2.print();

        console.log("packet == packet2 : " + (packet==packet2));
        console.log("packet == defaultPacket : " + (packet==defaultPacket));
	}
}

PrototypeExample.demoUseOfPrototype()