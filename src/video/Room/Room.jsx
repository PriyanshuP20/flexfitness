import React from "react";
import { useParams} from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
const RoomPage = () => {
  const { roomId} = useParams ();
  const myMeeting = async (element) => {
    const appID = 1394014569;
    const serverSecret = "1e15fc4ebe13888cfd30f09798a34546";
            
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
        appID,serverSecret,roomId,Date.now().toString(),"trainer");
        const zp=ZegoUIKitPrebuilt.create(kitToken);
    
        
        zp.joinRoom({
          container: element,
          scenario: {
              mode: ZegoUIKitPrebuilt.VideoConference,
          },
        });
  };
  return (
  <div className="room-page" style={{padding:100}}>
   <div ref={myMeeting}/>
   
  </div>
  );
};
export default RoomPage;