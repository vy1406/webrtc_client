export interface Call {
    current: 'idle' | 'negotiating' | 'progress' | 'complete';
    video: 'off' | 'enabled' | 'disabled' | 'complete';
    audio: 'off' | 'enabled' | 'disabled' | 'complete';
    audioDevice: string;
    videoDevice: string;
    shareScreen: boolean;
    haveMedia: boolean;
    haveCreatedOffer: boolean;
    selectedAudioInputDeviceId: string;
    selectedAudioOutputDeviceId: string;
    selectedVideoDeviceId: string;
    audioInputDevices: MediaDeviceInfo[];
    audioOutputDevices: MediaDeviceInfo[];
    videoDevices: MediaDeviceInfo[];
  }