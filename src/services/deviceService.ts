type SuccessCallback = (stream: MediaStream) => void;
type ErrorCallback = (errorMessage: string) => void;

const constraints = {
  video: true,
  audio: true,
};

export const fetchMedia = async (onSuccess: SuccessCallback, onError: ErrorCallback): Promise<void> => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia(constraints);
    onSuccess(stream);
  } catch {
    onError("No permission given to access camera and microphone");
  }
};