import React, { useEffect, useRef } from 'react';
import ActionButtons from '@components/call/actionButtons';
import Separator from '@components/shared/separator';
import styled from '@emotion/styled';
import { fetchMedia } from '@services/deviceService';
import { useSnackBarContext } from '@context/snackbarContext';
import { SnackbarData } from '@interfaces/snackbar';


const JoinVideoPage = () => {
    const smallFeedEl = useRef(null);
    const largeFeedEl = useRef(null);
    const { setSnackbarData } = useSnackBarContext();

    useEffect(() => {
        const onMediaSuccess = (stream: MediaStream) => {
            if (smallFeedEl.current) {
                (smallFeedEl.current as HTMLVideoElement).srcObject = stream;
            }
        }
        const onMediaError = (sbData: SnackbarData) => setSnackbarData(sbData);
        fetchMedia(onMediaSuccess, onMediaError)
    }, [])

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