import React from 'react';

const FullScreenLoader = () => {
  return (
    <>
      <style>
        {`
          .loader-overlay {
            position: fixed;
            inset: 0;
            z-index: 99999;
            background-color: rgba(255, 255, 255, 0.8); 
            backdrop-filter: blur(12px);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }

          .modern-loader {
            display: flex;
            align-items: center;
            gap: 8px;
          }

          .step {
            width: 8px;
            height: 24px;
            background-color: #244c98; /* Sapphire Blue */
            border-radius: 4px;
            animation: step-grow 1.2s ease-in-out infinite;
          }

          .step:nth-child(1) { animation-delay: 0s; }
          .step:nth-child(2) { animation-delay: 0.2s; }
          .step:nth-child(3) { animation-delay: 0.4s; }

          @keyframes step-grow {
            0%, 100% {
              height: 24px;
              opacity: 0.3;
              filter: blur(1px);
            }
            50% {
              height: 45px;
              opacity: 1;
              filter: blur(0px);
              box-shadow: 0 0 15px rgba(36, 76, 152, 0.4);
            }
          }

          .loader-status {
            margin-top: 30px;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 4px;
          }

          .brand-text {
            font-size: 14px;
            font-weight: 800;
            color: #0f1a33; /* Deep Navy */
            letter-spacing: 0.1em;
          }

          .loading-subtext {
            font-size: 9px;
            font-weight: 600;
            color: #8a94a6; /* Stone Gray */
            text-transform: uppercase;
            letter-spacing: 0.4em;
          }
        `}
      </style>

      <div className="loader-overlay">
        {/* Modern Step Loader */}
        <div className="modern-loader">
          <div className="step"></div>
          <div className="step"></div>
          <div className="step"></div>
        </div>

        {/* Text UI */}
        <div className="loader-status">
          <span className="brand-text">EduBridge</span>
          <span className="loading-subtext">Connecting Knowledge</span>
        </div>
      </div>
    </>
  );
};

export default FullScreenLoader;
