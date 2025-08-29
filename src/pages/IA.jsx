// src/pages/IA.jsx
import React, { useState, useRef } from "react";
import { Camera, Upload, Send, Bot, X } from "lucide-react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

function IA() {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  // Simular respostas da IA (em uma implementação real, isso viria de uma API)
  const getAIResponse = async (userMessage) => {
    // Simular um tempo de resposta
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const responses = {
      "ola": "Olá! Sou seu assistente virtual de agronomia. Como posso ajudar com sua lavoura hoje?",
      "praga": "Com base na análise das imagens, identificamos possíveis sinais de ferrugem asiática. Recomendo aplicar fungicidas específicos e monitorar a evolução.",
      "doença": "As manchas nas folhas sugerem possível antracnose. É importante realizar a aplicação de fungicidas e remover as partes afetadas para evitar propagação.",
      "solo": "O solo parece apresentar deficiência de nitrogênio. Recomendo fazer análise laboratorial completa e considerar adubação nitrogenada.",
      "default": "Com base na análise das imagens fornecidas, sua lavoura parece saudável. Continuem monitorando regularmente para identificar precocemente qualquer problema."
    };
    
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes("praga")) return responses["praga"];
    if (lowerMessage.includes("doença") || lowerMessage.includes("doenca")) return responses["doença"];
    if (lowerMessage.includes("solo")) return responses["solo"];
    if (lowerMessage.includes("ola") || lowerMessage.includes("olá")) return responses["ola"];
    
    return responses["default"];
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;
    
    // Adicionar mensagem do usuário
    const userMessage = { text: inputMessage, sender: "user" };
    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");
    
    // Obter resposta da IA
    const aiResponse = await getAIResponse(inputMessage);
    const aiMessage = { text: aiResponse, sender: "ai" };
    setMessages(prev => [...prev, aiMessage]);
  };

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    setUploadedFiles(prev => [...prev, ...files]);
    
    // Simular análise automática da IA ao fazer upload
    if (files.length > 0) {
      setTimeout(() => {
        const analysisMessage = { 
          text: `Analisei ${files.length} imagem(ns). Sua plantação apresenta sinais de crescimento saudável, mas recomendo verificar as folhas inferiores para possíveis focos de fungo.`, 
          sender: "ai" 
        };
        setMessages(prev => [...prev, analysisMessage]);
      }, 1500);
    }
  };

  const openCamera = async () => {
    setIsCameraOpen(true);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (err) {
      console.error("Erro ao acessar a câmera:", err);
      alert("Não foi possível acessar a câmera. Verifique as permissões do navegador.");
    }
  };

  const closeCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const tracks = videoRef.current.srcObject.getTracks();
      tracks.forEach(track => track.stop());
    }
    setIsCameraOpen(false);
  };

  const captureImage = () => {
    if (videoRef.current && canvasRef.current) {
      const context = canvasRef.current.getContext('2d');
      context.drawImage(videoRef.current, 0, 0, 320, 240);
      
      // Converter canvas para blob e simular upload
      canvasRef.current.toBlob((blob) => {
        const file = new File([blob], `camera-capture-${Date.now()}.jpg`, { type: 'image/jpeg' });
        setUploadedFiles(prev => [...prev, file]);
        
        // Simular análise da IA
        setTimeout(() => {
          const analysisMessage = { 
            text: "Imagem capturada e analisada. Detectei que algumas folhas apresentam descoloração. Pode ser deficiência nutricional ou início de infecção fúngica.", 
            sender: "ai" 
          };
          setMessages(prev => [...prev, analysisMessage]);
        }, 1500);
      }, 'image/jpeg', 0.8);
      
      closeCamera();
    }
  };

  return (
    <>
      <Helmet>
        <title>Assistente de IA - AgroPortal</title>
        <meta name="description" content="Assistente de IA para identificação de problemas na lavoura e respostas para perguntas de agrônomos" />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <section className="gradient-bg2 h-96 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center text-white"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Assistente de IA para Agronegócio
              </h1>
              <p className="text-lg text-green-100 max-w-3xl mx-auto">
                Identifique problemas na lavoura, analise imagens e obtenha respostas para suas perguntas técnicas
              </p>
            </motion.div>
          </div>
        </section>

        {/* Conteúdo principal */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 -mt-48 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="margin-top my-element bg-white rounded-xl shadow-lg p-6"
          >
            {/* Seção de upload de arquivos e câmera */}
            <div className=" mb-8 p-4 bg-gray-50 rounded-lg">
              <h2 className="text-lg font-semibold mb-4">Análise por Imagens</h2>
              
              <div className="flex flex-wrap gap-4 mb-4">
                <div className="flex-1 min-w-[200px]">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Upload de Imagens
                  </label>
                  <div className="flex items-center justify-center w-full">
                    <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer border-gray-300 bg-white hover:bg-gray-50">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <Upload className="w-8 h-8 mb-4 text-gray-500" />
                        <p className="mb-2 text-sm text-gray-500">Clique para enviar ou arraste imagens</p>
                      </div>
                      <input 
                        type="file" 
                        className="hidden" 
                        multiple 
                        accept="image/*" 
                        onChange={handleFileUpload}
                      />
                    </label>
                  </div>
                </div>
                
                <div className="flex-1 min-w-[200px]">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Capturar pela Câmera
                  </label>
                  <button
                    onClick={isCameraOpen ? closeCamera : openCamera}
                    className="w-full h-32 flex flex-col items-center justify-center border-2 border-dashed rounded-lg border-gray-300 bg-white hover:bg-gray-50"
                  >
                    {isCameraOpen ? (
                      <>
                        <X className="w-8 h-8 mb-2 text-red-500" />
                        <span className="text-red-600">Fechar Câmera</span>
                      </>
                    ) : (
                      <>
                        <Camera className="w-8 h-8 mb-2 text-gray-500" />
                        <span className="text-sm text-gray-500">Abrir Câmera</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
              
              {/* Área da câmera */}
              {isCameraOpen && (
                <div className="mt-4 p-4 bg-white rounded-lg border border-gray-200">
                  <div className="flex justify-center mb-4">
                    <video 
                      ref={videoRef} 
                      autoPlay 
                      playsInline 
                      className="w-full max-w-md rounded"
                    />
                    <canvas ref={canvasRef} className="hidden" width="320" height="240" />
                  </div>
                  <div className="flex justify-center">
                    <button
                      onClick={captureImage}
                      className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 flex items-center"
                    >
                      <Camera className="w-4 h-4 mr-2" />
                      Capturar Imagem
                    </button>
                  </div>
                </div>
              )}
              
              {/* Lista de arquivos enviados */}
              {uploadedFiles.length > 0 && (
                <div className="mt-4">
                  <h3 className="text-sm font-medium text-gray-700 mb-2">Imagens enviadas:</h3>
                  <div className="flex flex-wrap gap-2">
                    {uploadedFiles.map((file, index) => (
                      <div key={index} className="relative">
                        <img 
                          src={URL.createObjectURL(file)} 
                          alt={`Upload ${index}`}
                          className="w-16 h-16 object-cover rounded border"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            {/* Chat com o assistente virtual */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-4 bg-green-700 text-white">
                <h2 className="text-lg font-semibold flex items-center">
                  <Bot className="mr-2" />
                  Assistente Virtual - Especialista em Agronomia
                </h2>
              </div>
              
              <div className="h-80 overflow-y-auto p-4 bg-gray-50">
                {messages.length === 0 ? (
                  <div className="text-center text-gray-500 mt-16">
                    <Bot className="w-12 h-12 mx-auto text-green-500" />
                    <p className="mt-2">Envie imagens ou faça uma pergunta sobre sua lavoura</p>
                  </div>
                ) : (
                  messages.map((message, index) => (
                    <div
                      key={index}
                      className={`mb-4 ${message.sender === "user" ? "text-right" : ""}`}
                    >
                      <div
                        className={`inline-block p-3 rounded-lg max-w-xs md:max-w-md ${
                          message.sender === "user"
                            ? "bg-green-100 text-green-800"
                            : "bg-blue-100 text-blue-800"
                        }`}
                      >
                        {message.text}
                      </div>
                    </div>
                  ))
                )}
              </div>
              
              <div className="p-4 border-t border-gray-200">
                <div className="flex">
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                    placeholder="Digite sua pergunta sobre sua lavoura..."
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  <button
                    onClick={handleSendMessage}
                    className="px-4 py-2 bg-green-600 text-white rounded-r-md hover:bg-green-700 flex items-center"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default IA;