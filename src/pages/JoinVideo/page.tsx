import React, { useEffect, useRef } from 'react';
import ActionButtons from '@components/call/actionButtons';
import Separator from '@components/shared/separator';
import styled from '@emotion/styled';
import { DeviceInfo, fetchDevices, fetchMedia, findDefaultDeviceId } from '@services/deviceService';
import { useSnackBarContext } from '@context/snackbarContext';
import { SnackbarData } from '@interfaces/snackbar';
import { useCallContext } from '@context/callContext';


const JoinVideoPage = () => {
    const smallFeedEl = useRef(null);
    const largeFeedEl = useRef(null);
    const { setSnackbarData } = useSnackBarContext();
    const { callData, updateCall } = useCallContext();

    useEffect(() => {
        const onMediaSuccess = (stream: MediaStream) => {
            if (smallFeedEl.current) {
                (smallFeedEl.current as HTMLVideoElement).srcObject = stream;
                updateCall({
                    haveMedia: true
                })
            }
        }
        const onMediaError = (sbData: SnackbarData) => setSnackbarData(sbData);
        fetchMedia(onMediaSuccess, onMediaError)
       
    }, [])

    useEffect(() => {
        const onDevicesSuccess = (devices: DeviceInfo) => {
            const defaultAudioInputDeviceId = findDefaultDeviceId(devices.audioInputDevices);
            const defaultAudioOutputDeviceId = findDefaultDeviceId(devices.audioOutputDevices);
            const defaultVideoDeviceId = findDefaultDeviceId(devices.videoDevices);           
            updateCall({
                audioInputDevices: devices.audioInputDevices,
                audioOutputDevices: devices.audioOutputDevices,
                videoDevices: devices.videoDevices,
                selectedAudioInputDeviceId: defaultAudioInputDeviceId,
                selectedAudioOutputDeviceId: defaultAudioOutputDeviceId,
                selectedVideoDeviceId: defaultVideoDeviceId,
            });
        }
        const onDevicesError = () => {};
        fetchDevices(onDevicesSuccess, onDevicesError)
    }, [])

    console.log(callData)

    return (
        <Container>
           
            <VideoChatWrap >
                <MainFeed id="large-feed" ref={largeFeedEl} autoPlay controls playsInline></MainFeed>
                <OwnFeed id="own-feed" ref={smallFeedEl} autoPlay controls playsInline></OwnFeed>
            </VideoChatWrap>
            <Separator />
            <ActionButtons largeFeedEl={largeFeedEl} smallFeedEl={smallFeedEl} />
        </Container>
    )
};

export default JoinVideoPage;

const Container = styled.div`
`

const VideoChatWrap = styled.div`
    position: relative;
    overflow: hidden;
`

const MainFeed = styled.video`
  background-color: black;
  height: calc(100vh - 62px - 100px);
  width: 100vw;
`

const OwnFeed = styled.video`
   position: absolute;
   border: white 1px solid;
   right: 50px;
   top: 50px;
   border-radius: 10px;
   width: 320px;
`