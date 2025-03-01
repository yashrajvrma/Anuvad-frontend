import "regenerator-runtime/runtime";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

function TranslationPage() {
  const [searchParams] = useSearchParams();
  const sourceLanguage = searchParams.get("source");
  const targetLanguage = searchParams.get("target");
  const [showBtn, setShowBtn] = useState(false);

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();
  const [isTranslating, setIsTranslating] = useState(false);
  const audioContextRef = useRef(null);
  const latestTranscriptRef = useRef("");
  const timeoutRef = useRef(null);
  const lottieRef = useRef(null); // Ref for the Lottie animation

  const handleStartListening = () => {
    if (!browserSupportsSpeechRecognition) return;
    SpeechRecognition.startListening({ continuous: true });
  };

  useEffect(() => {
    if (browserSupportsSpeechRecognition) {
      handleStartListening();
    }
    return () => {
      SpeechRecognition.stopListening();
    };
  }, [browserSupportsSpeechRecognition]);

  const sendToBackend = async (text) => {
    if (!text.trim()) return;
    setShowBtn(true);
    setIsTranslating(true);
    lottieRef.current?.pause(); // Pause Lottie animation

    try {
      const response = await axios.get(
        "http://localhost:3000/api/translate/translate-lang",
        {
          responseType: "arraybuffer",
          params: {
            text: text,
            sourceLang: sourceLanguage,
            targetLang: targetLanguage,
          },
        }
      );

      if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext ||
          window.webkitAudioContext)();
      } else {
        await audioContextRef.current.resume();
      }

      const source = audioContextRef.current.createBufferSource();
      const audioBuffer = await audioContextRef.current.decodeAudioData(
        response.data
      );
      source.buffer = audioBuffer;
      source.connect(audioContextRef.current.destination);
      source.start(0);

      console.log("Audio streaming and playing successfully.");
    } catch (error) {
      console.error("Error translating text and streaming audio:", error);
    } finally {
      resetTranscript();
      setShowBtn(false);

      setIsTranslating(false);
      lottieRef.current?.play(); // Resume Lottie animation
    }
  };

  useEffect(() => {
    if (!transcript.trim()) return;
    latestTranscriptRef.current = transcript;

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      sendToBackend(latestTranscriptRef.current);
      SpeechRecognition.stopListening();
    }, 2000);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [transcript]);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen w-full bg-white font-poppins px-4">
      <div className="w-full max-w-screen-xl flex flex-col justify-center items-center py-16">
        <DotLottieReact
          ref={lottieRef} // Attach the ref to the Lottie component
          src="https://lottie.host/a192161b-be15-4e25-824e-4d28e56c20f0/156r6MfLUc.lottie"
          loop
          autoplay
          style={{ width: "200px", height: "200px" }}
        />

        <div className="w-full max-w-2xl text-center mt-8">
          {listening ? (
            <div className="mt-6">
              <p className="text-xl text-gray-700 mb-4">Listening...</p>
              <button
                onClick={() => SpeechRecognition.stopListening()}
                className="bg-black text-white py-4 px-8 rounded-full text-lg hover:bg-white hover:text-black border border-black transition"
                disabled={showBtn}
              >
                Stop Speaking
              </button>
            </div>
          ) : (
            <div className="mt-6">
              <button
                onClick={handleStartListening}
                className="bg-neutral-800 text-white py-4 px-8 rounded-full text-lg hover:bg-neutral-900 border border-black transition"
                disabled={showBtn}
              >
                Start Speaking
              </button>
            </div>
          )}

          {transcript && (
            <div className="mt-8">
              <p className="text-lg text-gray-600 leading-relaxed">
                {transcript}
              </p>
            </div>
          )}

          {isTranslating && (
            <p className="text-lg text-gray-600 mt-6">Translating...</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default TranslationPage;
