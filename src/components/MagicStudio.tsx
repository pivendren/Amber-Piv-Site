import React, { useState, useRef } from 'react';
import { GoogleGenAI } from '@google/genai';
import { motion } from 'motion/react';
import { Image as ImageIcon, Video, FileSearch, Loader2, Upload, Wand2 } from 'lucide-react';

// --- Type Definitions ---
type Tab = 'image' | 'video' | 'analyze';

// --- Helper Functions ---
const fileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const result = reader.result as string;
      const base64 = result.split(',')[1];
      resolve(base64);
    };
    reader.onerror = (error) => reject(error);
  });
};

export default function MagicStudio() {
  const [activeTab, setActiveTab] = useState<Tab>('image');
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [apiKeyError, setApiKeyError] = useState(false);

  // Feature 1: Image Generation
  const [imagePrompt, setImagePrompt] = useState('');
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);

  // Feature 2: Video Generation
  const [videoPrompt, setVideoPrompt] = useState('');
  const [videoImageFile, setVideoImageFile] = useState<File | null>(null);
  const [videoImagePreview, setVideoImagePreview] = useState<string | null>(null);
  const [generatedVideoUrl, setGeneratedVideoUrl] = useState<string | null>(null);
  const [videoStatus, setVideoStatus] = useState<string>('');

  // Feature 3: Image Analysis
  const [analyzePrompt, setAnalyzePrompt] = useState('Write a heartfelt wedding guestbook message based on this photo.');
  const [analyzeImageFile, setAnalyzeImageFile] = useState<File | null>(null);
  const [analyzeImagePreview, setAnalyzeImagePreview] = useState<string | null>(null);
  const [analysisResult, setAnalysisResult] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const checkAndGetApiKey = async () => {
    try {
      // @ts-ignore
      if (!await window.aistudio.hasSelectedApiKey()) {
        // @ts-ignore
        await window.aistudio.openSelectKey();
      }
      return process.env.GEMINI_API_KEY;
    } catch (err) {
      console.error("API Key selection failed:", err);
      setApiKeyError(true);
      return null;
    }
  };

  const handleGenerateImage = async () => {
    if (!imagePrompt) return;
    setIsProcessing(true);
    setError(null);
    setGeneratedImage(null);

    try {
      const apiKey = await checkAndGetApiKey();
      if (!apiKey) throw new Error("API Key required");

      const ai = new GoogleGenAI({ apiKey });
      const response = await ai.models.generateContent({
        model: 'gemini-3.1-flash-image-preview',
        contents: {
          parts: [{ text: imagePrompt }],
        },
        config: {
          imageConfig: {
            aspectRatio: "16:9",
            imageSize: "1K"
          }
        }
      });

      let foundImage = false;
      for (const part of response.candidates?.[0]?.content?.parts || []) {
        if (part.inlineData) {
          setGeneratedImage(`data:image/png;base64,${part.inlineData.data}`);
          foundImage = true;
          break;
        }
      }
      if (!foundImage) throw new Error("No image generated.");
    } catch (err: any) {
      setError(err.message || "Failed to generate image.");
    } finally {
      setIsProcessing(false);
    }
  };

  const handleGenerateVideo = async () => {
    if (!videoImageFile) return;
    setIsProcessing(true);
    setError(null);
    setGeneratedVideoUrl(null);
    setVideoStatus('Initializing...');

    try {
      const apiKey = await checkAndGetApiKey();
      if (!apiKey) throw new Error("API Key required");

      const base64Data = await fileToBase64(videoImageFile);
      const ai = new GoogleGenAI({ apiKey });

      setVideoStatus('Generating video (this may take a few minutes)...');
      let operation = await ai.models.generateVideos({
        model: 'veo-3.1-fast-generate-preview',
        prompt: videoPrompt || 'A beautiful, cinematic slow-motion shot.',
        image: {
          imageBytes: base64Data,
          mimeType: videoImageFile.type,
        },
        config: {
          numberOfVideos: 1,
          resolution: '720p',
          aspectRatio: '16:9'
        }
      });

      while (!operation.done) {
        await new Promise(resolve => setTimeout(resolve, 10000));
        operation = await ai.operations.getVideosOperation({ operation });
        setVideoStatus('Still processing... Please wait.');
      }

      const downloadLink = operation.response?.generatedVideos?.[0]?.video?.uri;
      if (!downloadLink) throw new Error("Video generation failed.");

      // Fetch the video with the API key header
      setVideoStatus('Fetching video file...');
      const response = await fetch(downloadLink, {
        method: 'GET',
        headers: {
          'x-goog-api-key': apiKey,
        },
      });
      
      if (!response.ok) throw new Error("Failed to download video.");
      
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      setGeneratedVideoUrl(url);
      setVideoStatus('');
    } catch (err: any) {
      setError(err.message || "Failed to generate video.");
      setVideoStatus('');
    } finally {
      setIsProcessing(false);
    }
  };

  const handleAnalyzeImage = async () => {
    if (!analyzeImageFile || !analyzePrompt) return;
    setIsProcessing(true);
    setError(null);
    setAnalysisResult(null);

    try {
      const apiKey = await checkAndGetApiKey();
      if (!apiKey) throw new Error("API Key required");

      const base64Data = await fileToBase64(analyzeImageFile);
      const ai = new GoogleGenAI({ apiKey });

      const response = await ai.models.generateContent({
        model: 'gemini-3.1-pro-preview',
        contents: [
          {
            inlineData: {
              data: base64Data,
              mimeType: analyzeImageFile.type,
            }
          },
          analyzePrompt
        ]
      });

      setAnalysisResult(response.text || "No analysis generated.");
    } catch (err: any) {
      setError(err.message || "Failed to analyze image.");
    } finally {
      setIsProcessing(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, type: 'video' | 'analyze') => {
    const file = e.target.files?.[0];
    if (!file) return;

    const previewUrl = URL.createObjectURL(file);
    if (type === 'video') {
      setVideoImageFile(file);
      setVideoImagePreview(previewUrl);
    } else {
      setAnalyzeImageFile(file);
      setAnalyzeImagePreview(previewUrl);
    }
  };

  return (
    <section className="bg-cream py-24 border-t border-forest/10">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-5xl font-black text-forest mb-4 uppercase tracking-tight">Wolfkop Magic Studio</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto font-medium">
            Create a custom memory, animate a photo from the wedding, or let our AI write a guestbook message based on your favorite snapshot.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-forest/10">
          {/* Tabs */}
          <div className="flex border-b border-forest/10">
            {[
              { id: 'image', icon: ImageIcon, label: 'Visualize' },
              { id: 'video', icon: Video, label: 'Animate' },
              { id: 'analyze', icon: FileSearch, label: 'Analyze' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as Tab)}
                className={`flex-1 py-4 flex items-center justify-center gap-2 font-bold uppercase tracking-widest text-xs transition-colors ${
                  activeTab === tab.id ? 'bg-forest text-white' : 'text-forest/60 hover:bg-forest/5'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="p-8 md:p-12">
            {error && (
              <div className="mb-6 p-4 bg-red-50 text-red-600 rounded-lg text-sm font-medium border border-red-100">
                {error}
              </div>
            )}

            {/* Image Tab */}
            {activeTab === 'image' && (
              <div className="space-y-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-forest mb-2">Describe your dream wedding moment</label>
                  <textarea
                    value={imagePrompt}
                    onChange={(e) => setImagePrompt(e.target.value)}
                    placeholder="E.g., A beautiful sunset over the Cederberg mountains with a canvas safari tent..."
                    className="w-full p-4 rounded-lg border border-forest/20 focus:border-rust focus:ring-1 focus:ring-rust outline-none resize-none h-32 text-sm bg-sand/10"
                  />
                </div>
                <button
                  onClick={handleGenerateImage}
                  disabled={isProcessing || !imagePrompt}
                  className="w-full bg-rust text-white py-4 rounded-lg font-bold uppercase tracking-widest text-sm hover:bg-rust/90 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {isProcessing ? <Loader2 className="w-5 h-5 animate-spin" /> : <Wand2 className="w-5 h-5" />}
                  {isProcessing ? 'Generating...' : 'Generate Image'}
                </button>
                {generatedImage && (
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mt-8 rounded-xl overflow-hidden shadow-lg border border-forest/10">
                    <img src={generatedImage} alt="Generated" className="w-full h-auto" />
                  </motion.div>
                )}
              </div>
            )}

            {/* Video Tab */}
            {activeTab === 'video' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-forest mb-2">Upload a Photo</label>
                    <div 
                      className="border-2 border-dashed border-forest/20 rounded-xl p-8 text-center cursor-pointer hover:bg-forest/5 transition-colors bg-sand/10 relative overflow-hidden h-48 flex flex-col items-center justify-center"
                      onClick={() => document.getElementById('video-upload')?.click()}
                    >
                      {videoImagePreview ? (
                        <img src={videoImagePreview} alt="Preview" className="absolute inset-0 w-full h-full object-cover opacity-50" />
                      ) : (
                        <Upload className="w-8 h-8 text-forest/40 mb-2" />
                      )}
                      <span className="relative z-10 text-sm font-medium text-forest">{videoImagePreview ? 'Change Photo' : 'Click to upload'}</span>
                      <input id="video-upload" type="file" accept="image/*" className="hidden" onChange={(e) => handleFileChange(e, 'video')} />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-forest mb-2">Animation Prompt (Optional)</label>
                    <textarea
                      value={videoPrompt}
                      onChange={(e) => setVideoPrompt(e.target.value)}
                      placeholder="E.g., The couple smiles and waves at the camera..."
                      className="w-full p-4 rounded-lg border border-forest/20 focus:border-rust focus:ring-1 focus:ring-rust outline-none resize-none h-48 text-sm bg-sand/10"
                    />
                  </div>
                </div>
                <button
                  onClick={handleGenerateVideo}
                  disabled={isProcessing || !videoImageFile}
                  className="w-full bg-rust text-white py-4 rounded-lg font-bold uppercase tracking-widest text-sm hover:bg-rust/90 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {isProcessing ? <Loader2 className="w-5 h-5 animate-spin" /> : <Video className="w-5 h-5" />}
                  {isProcessing ? 'Animating...' : 'Animate Photo'}
                </button>
                {videoStatus && <p className="text-center text-sm text-forest/60 font-medium animate-pulse">{videoStatus}</p>}
                {generatedVideoUrl && (
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mt-8 rounded-xl overflow-hidden shadow-lg border border-forest/10 bg-black">
                    <video src={generatedVideoUrl} controls autoPlay loop className="w-full h-auto" />
                  </motion.div>
                )}
              </div>
            )}

            {/* Analyze Tab */}
            {activeTab === 'analyze' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-forest mb-2">Upload a Photo</label>
                    <div 
                      className="border-2 border-dashed border-forest/20 rounded-xl p-8 text-center cursor-pointer hover:bg-forest/5 transition-colors bg-sand/10 relative overflow-hidden h-48 flex flex-col items-center justify-center"
                      onClick={() => document.getElementById('analyze-upload')?.click()}
                    >
                      {analyzeImagePreview ? (
                        <img src={analyzeImagePreview} alt="Preview" className="absolute inset-0 w-full h-full object-cover opacity-50" />
                      ) : (
                        <Upload className="w-8 h-8 text-forest/40 mb-2" />
                      )}
                      <span className="relative z-10 text-sm font-medium text-forest">{analyzeImagePreview ? 'Change Photo' : 'Click to upload'}</span>
                      <input id="analyze-upload" type="file" accept="image/*" className="hidden" onChange={(e) => handleFileChange(e, 'analyze')} />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-forest mb-2">What should we do?</label>
                    <textarea
                      value={analyzePrompt}
                      onChange={(e) => setAnalyzePrompt(e.target.value)}
                      placeholder="E.g., Write a heartfelt wedding guestbook message based on this photo."
                      className="w-full p-4 rounded-lg border border-forest/20 focus:border-rust focus:ring-1 focus:ring-rust outline-none resize-none h-48 text-sm bg-sand/10"
                    />
                  </div>
                </div>
                <button
                  onClick={handleAnalyzeImage}
                  disabled={isProcessing || !analyzeImageFile || !analyzePrompt}
                  className="w-full bg-rust text-white py-4 rounded-lg font-bold uppercase tracking-widest text-sm hover:bg-rust/90 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {isProcessing ? <Loader2 className="w-5 h-5 animate-spin" /> : <FileSearch className="w-5 h-5" />}
                  {isProcessing ? 'Analyzing...' : 'Analyze Photo'}
                </button>
                {analysisResult && (
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mt-8 p-6 rounded-xl shadow-inner border border-forest/10 bg-sand/20">
                    <p className="text-forest whitespace-pre-wrap font-medium leading-relaxed">{analysisResult}</p>
                  </motion.div>
                )}
              </div>
            )}

          </div>
        </div>
      </div>
    </section>
  );
}
