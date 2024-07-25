import { SNACKBAR_TYPES } from "@context/snackbarContext";

type SuccessMediaCallback = (stream: MediaStream) => void;
type ErrorMediaCallback = (errorMessage: any) => void;

type DeviceInfo = {
  videoDevices: MediaDeviceInfo[];
  audioOutputDevices: MediaDeviceInfo[];
  audioInputDevices: MediaDeviceInfo[];
};

type SuccessDevicesCallback = (deviceInfo: DeviceInfo) => void;
type ErrorDevicesCallback = (errorMessage: string) => void;

const constraints = {
  video: true,
  audio: true,
};

const SNACKBAR_ERROR_TYPE = {
  isOpen: true,
  body: "No permission given to access camera and microphone",
  type: SNACKBAR_TYPES.WARNING
}

export const fetchMedia = async (onSuccess: SuccessMediaCallback, onError: ErrorMediaCallback): Promise<void> => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia(constraints);
    onSuccess(stream);
  } catch {
    onError(SNACKBAR_ERROR_TYPE);
  }
};

export const fetchDevices = async (onSuccess: SuccessDevicesCallback, onError: ErrorDevicesCallback): Promise<void> => {
  try {
    const devices = await navigator.mediaDevices.enumerateDevices();
    const videoDevices = devices.filter(d => d.kind === "videoinput");
    const audioOutputDevices = devices.filter(d => d.kind === "audiooutput");
    const audioInputDevices = devices.filter(d => d.kind === "audioinput");
    
    onSuccess({
      videoDevices,
      audioOutputDevices,
      audioInputDevices
    });
  } catch (error) {
    onError((error as Error).message);
  }
};
