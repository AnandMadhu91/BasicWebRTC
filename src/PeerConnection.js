const lc = new RTCPeerConnection();
const dc = lc.createDataChannel("Channel");
dc.onmessage = e => console.log("Got a message"+e.data);
dc.onopen = e => console.log("Connection Opened !");

lc.onicecandidate = e => console.log("New ICE Candidate ! reprinting SDP"+ JSON.stringify(lc.localDescription));
lc.createOffer().then( o => lc.localDescription(o)).then(a => console.log("set successfully"));