
import { Howl } from 'howler';

export enum PanelType {
  LOADING = 'loading',
  INTRO = 'intro',
  GOALS = 'goals',
  PRESTATIONS = 'prestations',
  PROJECTION = 'projection',
  CHARGES = 'charges',
  CLIENTS = 'clients',
  SUMMARY = 'summary',
  RESULTS = 'results',
  INSIGHTS = 'insights'
}

export interface Prestation {
  id: string;
  name: string;
  price: number;
  recommendedPrice: number;
}

export interface IncomeTaxBracket {
  cap: number;
  rate: number;
}

export interface TutorialStep {
  id: string;
  title: string;
  text: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
}

export interface AppConfig {
  LOGO_PDF_URL: string;
  LOGO_APP_URL_FOR_PRESTA_ICON: string;
  HUGO_IMG_URL: string;
  PROF_COMPTA_IMG_URL_PDF: string;
  HELENE_IMG_URL_PDF: string;
  PRESTATIONS: Prestation[];
  TAX_RATES: { classic: number; vfl: number };
  INCOME_TAX_BRACKETS: IncomeTaxBracket[];
  MOTIVATIONAL_QUOTES: string[];
  HUGO_QUOTES: string[];
  HELENE_QUOTES: {
    win: string[];
    progress: string[];
    challenge: string[];
  };
  TUTORIAL_STEPS: {
    [key: string]: TutorialStep[];
  };
  SOUNDS: { [key: string]: { src: string[], volume: number } };
  ICON_URLS: { [key: string]: string };
  FEATHER_ICONS: { [key: string]: string };
}

export interface AppInputs {
  [key: string]: string | number | undefined;
  goal_ca?: number;
  goal_net?: number;
  goal_savings?: number;
  charge_loyer?: number;
  charge_abo?: number;
  charge_marketing?: number;
  charge_conso?: number;
  other_income?: number;
  clients_start?: number;
  clients_gained?: number;
  clients_lost?: number;
}

export interface AppState {
  currentPanel: PanelType;
  inputs: AppInputs;
  isVFL: boolean;
  isTransitioning: boolean;
}

export interface FinancialResults {
  totalCA: number;
  netAfterAll: number;
  totalCharges: number;
  socialContributions: number;
  monthlyIncomeTax: number;
  netBeforeIncomeTax: number;
  savingsProgress: number;
  goals: {
    ca: number;
    net: number;
    savings: number;
  };
  totalClients: number;
  netClientChange: number;
  score: number;
}

export interface PriceCoachingResult {
    actualCA: number;
    potentialCA: number;
    difference: number;
}