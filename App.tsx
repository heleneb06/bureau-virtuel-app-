
import React, { useState, useContext, useEffect } from 'react';
import { AppProvider, AppContext } from './contexts/AppContext';
import { TutorialProvider, TutorialContext } from './contexts/TutorialContext';
import { PanelType } from './types';
import { APP_CONFIG, PANELS_ORDER } from './constants';
import { Header } from './components/layout/Header';
import { ProgressBar } from './components/layout/ProgressBar';
import { WebGLBackground } from './components/special/WebGLBackground';
import { TutorialOverlay } from './components/special/TutorialOverlay';
import { IntroPanel } from './components/panels/IntroPanel';
import { GoalsPanel } from './components/panels/GoalsPanel';
import { PrestationsPanel } from './components/panels/PrestationsPanel';
import { ProjectionPanel } from './components/panels/ProjectionPanel';
import { ChargesPanel } from './components/panels/ChargesPanel';
import { ClientsPanel } from './components/panels/ClientsPanel';
import { SummaryPanel } from './components/panels/SummaryPanel';
import { ResultsPanel } from './components/panels/ResultsPanel';
import { InsightsPanel } from './components/panels/InsightsPanel';

const panelMap: { [key in PanelType]: React.ComponentType } = {
  [PanelType.LOADING]: () => <div className="text-center p-8 text-ggf-gold"><div className="w-12 h-12 border-4 border-ggf-gold-light border-t-ggf-gold rounded-full animate-spin mx-auto mb-4"></div><p className="font-display">Le Prof forge ton trésor en or...</p></div>,
  [PanelType.INTRO]: IntroPanel,
  [PanelType.GOALS]: GoalsPanel,
  [PanelType.PRESTATIONS]: PrestationsPanel,
  [PanelType.PROJECTION]: ProjectionPanel,
  [PanelType.CHARGES]: ChargesPanel,
  [PanelType.CLIENTS]: ClientsPanel,
  [PanelType.SUMMARY]: SummaryPanel,
  [PanelType.RESULTS]: ResultsPanel,
  [PanelType.INSIGHTS]: InsightsPanel,
};

const AppContent: React.FC = () => {
  const appContext = useContext(AppContext);
  const tutorialContext = useContext(TutorialContext);

  useEffect(() => {
    const { showPanel } = appContext!;
    setTimeout(() => {
      showPanel(PanelType.INTRO);
    }, 1200);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!appContext || !tutorialContext) return null;
  const { currentPanel, playSound, results } = appContext;
  const CurrentPanelComponent = panelMap[currentPanel];

  const handleHelpClick = () => {
    const steps = APP_CONFIG.TUTORIAL_STEPS[currentPanel] || APP_CONFIG.TUTORIAL_STEPS.default;
    tutorialContext.startTutorial(steps, `header-help-button`);
    playSound('click');
  };
  
  const getFrameGradient = () => {
    if (currentPanel !== PanelType.RESULTS) {
        return 'from-ggf-gold/40 via-ggf-gold/10 to-transparent';
    }
    const { score } = results;
    if (score >= 90) return 'from-ggf-green/60 via-ggf-green/20 to-transparent';
    if (score < 40) return 'from-ggf-red/60 via-ggf-red/20 to-transparent';
    return 'from-ggf-gold/40 via-ggf-gold/10 to-transparent';
  };

  return (
    <>
      <WebGLBackground />
      <Header onHelpClick={handleHelpClick} />
      <ProgressBar currentPanel={currentPanel} />

      <div className="relative w-full max-w-4xl flex-grow flex flex-col justify-start items-center px-2 md:px-4">
        <main id="golden-glow-finance-app" className="w-full mt-4 md:mt-6">
            <div className={`p-px bg-gradient-to-br ${getFrameGradient()} rounded-ggf shadow-lg shadow-black/40 transition-all duration-500`}>
              <div className="bg-ggf-bg-panel backdrop-blur-xl rounded-[15px]">
                 {CurrentPanelComponent && <CurrentPanelComponent />}
              </div>
            </div>
        </main>
      </div>
      
      <TutorialOverlay />
    </>
  );
};

function App() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center pt-[90px] md:pt-[110px] pb-8 font-body text-ggf-text antialiased bg-ggf-bg bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-ggf-dark-blue-light/30 via-ggf-bg to-ggf-bg overflow-x-hidden">
        <AppProvider>
          <TutorialProvider>
            <AppContent />
          </TutorialProvider>
        </AppProvider>
    </div>
  );
}

export default App;
