
import { AppConfig, PanelType, TutorialStep } from './types';

export const APP_CONFIG: AppConfig = {
    LOGO_PDF_URL: 'https://cdn.prod.website-files.com/63dfad9403e95f7321f2c382/6515ca8fe2387d0be2624fc9_HeleneB_ACADEMIE.png',
    LOGO_APP_URL_FOR_PRESTA_ICON: 'https://cdn.prod.website-files.com/63dfad9403e95f7321f2c382/63e936e8be8e5c83d6e0f788_5E0FAD02-4CD9-406D-8779-5934EAFF823A.webp',
    HUGO_IMG_URL: 'https://cdn.prod.website-files.com/63dfad9403e95f7321f2c382/6729f8e1b0aba04e621e45a9_magnific-SToZHH5cOSqlO0DQWDDH_2-removebg-preview-ezgif.com-crop.png',
    PROF_COMPTA_IMG_URL_PDF: 'https://cdn.prod.website-files.com/63dfad9403e95f7321f2c382/6729f839a7564935ddf3a558_Sans_titre_28-removebg-preview-ezgif.com-crop-2.png',
    HELENE_IMG_URL_PDF: 'https://cdn.prod.website-files.com/63dfad9403e95f7321f2c382/64e4717177b1c2da83948e9f_heleneb%20presentation.png',
    
    PRESTATIONS: [
        {id:'pose_cilacil', name:'Pose Complète - Cil à Cil', price:120, recommendedPrice: 120},
        {id:'pose_russe', name:'Pose Complète - Volume Russe', price:150, recommendedPrice: 150},
        {id:'remplissage', name:'Remplissage', price:60, recommendedPrice: 75},
        {id:'lash_lift', name:'Lash Lift', price:70, recommendedPrice: 80},
        {id:'brow_lift', name:'Brow Lift', price:60, recommendedPrice: 70},
        {id:'epilation_sourcils', name:'Épilation Sourcils', price:15, recommendedPrice: 20}
    ],

    TAX_RATES: {classic:0.212,vfl:0.017},
    INCOME_TAX_BRACKETS: [{cap:11294,rate:0},{cap:28797,rate:0.11},{cap:82341,rate:0.3},{cap:177106,rate:0.41},{cap:Infinity,rate:0.45}],
    MOTIVATIONAL_QUOTES: [
        "Ton empire brille tellement que j'ai dû mettre mes lunettes de soleil... par-dessus mes lunettes de vue.",
        "Chaque euro, c'est un pas de plus vers la villa avec piscine de licornes. On est là pour farmer le cash, pas pour cueillir des pâquerettes !",
        "La compta, c'est ton nouveau jeu vidéo. Le but ? Finir le game avec un max de pognon. T'es prête à battre le high-score ?",
        "Oublie les contes de fées, on écrit une légende, celle de l'impératrice qui transformait les chiffres en or. Papy est ton barde !",
        "T'inquiète pas pour les chiffres, c'est juste du Tetris avec des euros. Le but, c'est de faire des lignes de billets !"
    ],
    HUGO_QUOTES: [
        "“Hey ! C'est cool de passer voir Papy pour les bases, il est... vintage. Mais si tu veux vraiment que ton business pèse dans le game, on passe aux choses sérieuses dans ma classe, ok ?”",
        "“Papy t'apprend à compter tes pièces, c'est mignon. Moi, je t'apprends à en faire une montagne et à la faire connaître dans toute la galaxie. On voit ça en cours ?”",
        "“Lui, il te parle de VFL. Moi, je te parle de viralité. On n'est pas sur le même fuseau horaire, tu vois. Rejoins ma masterclass pour passer à la vitesse lumière.”"
    ],
    HELENE_QUOTES: {win: ["“Félicitations, impératrice ! Votre empire est florissant. Chaque chiffre de ce rapport est une victoire, et je suis incroyablement fière de votre succès.”","“Votre travail acharné porte des fruits magnifiques. Ce rapport n'est pas seulement une suite de chiffres, c'est la preuve de votre talent et de votre détermination. Bravo !”"],progress: ["“Chaque chiffre de ce rapport est une étape de plus vers l'indépendance et la réussite. Soyez fière du chemin parcouru, la persévérance est la clé de votre futur empire.”","“Le chemin du succès est une construction, pierre par pierre. Ce rapport montre des fondations solides. Continuez sur cette lancée, vous êtes sur la bonne voie !”"],challenge: ["“Ceci n'est qu'une photographie d'un instant. Les plus grands empires sont bâtis sur les leçons apprises. Servez-vous de ce rapport comme d'une boussole, et souvenez-vous que je suis là pour vous aider à inverser la tendance.”","“Ne voyez pas des chiffres, mais des informations précieuses. Ce rapport est un outil pour rebondir plus fort. Votre potentiel est immense, et cette étape n'est qu'un tremplin vers votre futur succès.”"]},
    
    TUTORIAL_STEPS: {
      default:[{id: 'header-help-button', title:"T'es paumée, Impératrice ?",text:"C'est Papy à la rescousse ! J'ai des astuces qui claquent plus que mes nouvelles chaussettes dans mes sandales. C'est dire !"}],
      [PanelType.INTRO]: [
        { id: 'intro-papy-image', title: "C'est Papy !", text: "C'est moi, Eugène, ton coach en oseille. Je suis là pour faire de toi une reine du game financier. Accroche-toi, ça va secouer !", position: 'right' },
        { id: 'intro-title', title: "Le Titre qui Claque", text: "Ici, on pose les bases. C'est le titre du chapitre, en gros. Ça te dit où tu mets les pieds.", position: 'bottom' },
        { id: 'intro-p', title: "Le Bla-bla de Papy", text: "Là, je te donne le contexte. Un peu de motivation, un peu de déconne, pour que tu saches à quelle sauce tu vas être mangée.", position: 'bottom' },
        { id: 'intro-button', title: "Le Bouton Magique", text: "Quand t'as fini de lire mes bêtises et que t'es prête pour la suite, tu cliques là. Allez, en route !", position: 'bottom' },
      ],
      [PanelType.GOALS]:[
        { id: 'goals-card', title: "Tes Objectifs de Diva", text: "C'est ici que tu dis à l'univers ce que tu veux. C.A., Bénéfice, Épargne... Sois ambitieuse ! C'est en visant la lune qu'on atterrit dans les étoiles... ou un truc du genre." }
      ],
      [PanelType.PRESTATIONS]:[
        { id: 'presta-card-1', title: "Tes Pépites", text: "Chaque carte, c'est un de tes talents. Mets le nombre de fois que tu l'as vendu et à quel prix. Sois honnête, je le verrai si tu mytho !", position: 'bottom' },
        { id: 'presta-summary', title: "Le Verdict des Prix", text: "Là, on compare ton C.A. actuel avec ce que tu POURRAIS faire avec les prix que je te conseille. C'est souvent là que les yeux piquent un peu.", position: 'top' },
      ],
      [PanelType.PROJECTION]:[
        { id: 'projection-current-row', title: "Ta Trajectoire Actuelle", text: "Ces cartes sombres, c'est ta situation avec tes prix d'aujourd'hui. C'est bien, c'est solide, c'est la pierre de ton futur château.", position: 'bottom' },
        { id: 'projection-potential-row', title: "Ton Potentiel Royal", text: "Et là... TADAM ! C'est le trésor qui t'attend si tu m'écoutes un peu. Cuivre, argent, et or... C'est pas beau, ça ?", position: 'top' },
        { id: 'projection-chart', title: "Le Graphique qui Parle", text: "Ça, c'est pour les visuelles. Tu vois la différence entre ta courbe (la pointillée) et la courbe du succès (la dorée). L'écart, c'est du cash !", position: 'top' },
        { id: 'projection-papy-bubble', title: "Les Mots Doux de Papy", text: "Et enfin, ma petite analyse personnelle. Je te résume pourquoi c'est important de pas vendre ton talent au rabais. C'est cadeau.", position: 'top' },
      ],
      [PanelType.CHARGES]:[
        { id: 'charges-card-mensuelles', title: "Tes Charges Mensuelles", text: "Loyer, abonnements, matos... C'est ici que tu listes tout ce qui te coûte un bras chaque mois. Faut tout dire, même le pot de Nutella pour le réconfort (non, je déconne... ou pas).", position: 'right' },
        { id: 'charges-card-fiscalite', title: "Ta Fiscalité", text: "Le VFL, c'est le Versement Fiscal Libératoire. En gros, tu payes un petit peu d'impôt tout le temps au lieu d'une grosse claque à la fin. Si t'as d'autres revenus dans ta maison, dis-le, ça change tout pour le calcul de l'impôt final !", position: 'left' },
      ],
      [PanelType.CLIENTS]:[
        { id: 'clients-card', title: "Ton Fan Club", text: "Combien de nouvelles fans ce mois-ci ? Combien sont parties voir si l'herbe est plus verte ailleurs ? C'est crucial pour savoir si ton empire grandit ou s'il fait du sur-place.", position: 'bottom' },
        { id: 'clients-hugo-bubble', title: "Le Jeunot", text: "Ah, Hugo... Mon petit-fils spirituel. Il est doué en marketing, mais il a encore tout à apprendre sur la vraie valeur des choses. Écoute-le, mais n'oublie pas qui est le patron de la finance ici !", position: 'top' },
      ],
      [PanelType.SUMMARY]:[
        { id: 'summary-grid', title: "Le Grand Récap'", text: "Voilà. On a tout mélangé dans ma super-machine. J'ai appuyé sur le bouton 'magie' et ça a sorti ces chiffres. C'est le résumé de ton mois, avant le grand verdict." }
      ],
      [PanelType.RESULTS]:[
        { id: 'results-score', title: "Ton Golden Score", text: "C'est ta note sur 100, calculée par mes soins. Plus c'est haut, plus ton business est solide. En dessous de 40, on a du boulot. Au-dessus de 90, tu peux commencer à commander le champagne !", position: 'bottom' },
        { id: 'results-bar', title: "La Jauge de Richesse", text: "Ça te situe sur l'échelle de la pauvreté à la richesse. Le but, c'est de pousser le curseur le plus loin possible vers la droite !", position: 'bottom' },
        { id: 'results-verdict', title: "Le Verdict de Papy", text: "Mon analyse et mes premiers conseils basés sur ton score. C'est là que je te dis si t'es la GOAT ou si c'est la lose.", position: 'bottom' },
        { id: 'results-grid', title: "Le Bilan Final", text: "Les chiffres clés de ton mois. C.A., bénéfice, charges... Tout est là, noir sur blanc. C'est la carte d'identité de ton empire pour ce mois-ci.", position: 'top' },
      ],
      [PanelType.INSIGHTS]:[
        { id: 'insights-charts', title: "Les Graphiques de Papy", text: "Deux graphiques pour y voir plus clair. Le premier te montre où part ton argent. Le deuxième compare tes objectifs à ce que tu as vraiment fait. C'est comme un check-up chez le docteur, mais pour ton business.", position: 'bottom' },
        { id: 'insights-ai-button', title: "Le Conseil de l'Oracle (IA)", text: "Si tu veux une analyse plus poussée, clique ici. Mon pote, un robot super intelligent, va analyser tes chiffres et te donner des conseils sur-mesure. C'est de la technologie de pointe, ma petite !", position: 'bottom' },
      ]
    },

    SOUNDS: {
        click: { src: ['https://assets.mixkit.co/sfx/preview/mixkit-quick-positive-beep-2979.mp3'], volume: 0.5 },
        success: { src: ['https://assets.mixkit.co/sfx/preview/mixkit-positive-notification-951.mp3'], volume: 0.6 },
        error: { src: ['https://assets.mixkit.co/sfx/preview/mixkit-error-bleep-294.mp3'], volume: 0.4 }
    },
    ICON_URLS: {
        charge:'https://cdn.prod.website-files.com/63dfad9403e95f7321f2c382/685b9b8d08c7212c482d2a9e_A_flat-style_digital_illustration_labeled_%22TOTAL_C.webp',
        ca:'https://cdn.prod.website-files.com/63dfad9403e95f7321f2c382/685b9c061ee53c7758e76eb2_A_flat%2C_stylized_digital_illustration_depicts_a_sc.webp',
        epargne:'https://cdn.prod.website-files.com/63dfad9403e95f7321f2c382/685b9c3ded4806ce7f1acd15_A_2D_digital_illustration_features_the_word_%22E%CC%81PARG.webp',
        ca_estime:'https://cdn.prod.website-files.com/63dfad9403e95f7321f2c382/685b9c60e9285169177f5a90_A_flat-style_digital_illustration_features_a_desig.webp',
        objectif_ca:'https://cdn.prod.website-files.com/63dfad9403e95f7321f2c382/685b9c8e7fd430174060d377_A_flat-style_vector_illustration_features_the_phra.webp',
        impot:'https://cdn.prod.website-files.com/63dfad9403e95f7321f2c382/685b9dc3aaa0f486471c9d5a_ChatGPT%20Image%2025%20juin%202025%20a%CC%80%2008_12_19.png',
        cotisation:'https://cdn.prod.website-files.com/63dfad9403e95f7321f2c382/685ba197db01b7d73778bb7c_A_flat%2C_two-dimensional_digital_illustration_in_na.webp',
        benefice_net:'https://cdn.prod.website-files.com/63dfad9403e95f7321f2c382/685ba1d4122d34ad5ee5d267_A_flat%2C_vintage-style_digital_illustration_feature.webp',
        objectif_net:'https://cdn.prod.website-files.com/63dfad9403e95f7321f2c382/685ba1fe8c37b56e4bed79dd_ChatGPT%20Image%2025%20juin%202025%20a%CC%80%2007_06_22.png',
        total_clients:'https://cdn.prod.website-files.com/63dfad9403e95f7321f2c382/685bc78914d765d4235f7c65_conquete_nouvelle_cliente.webp'
    },
    FEATHER_ICONS: {
        objectif_ca:'target',
        objectif_net:'award',
        epargne:'shield',
        ca_estime:'trending-up',
        charge:'minus-circle',
        total_clients:'users',
        benefice_net:'gift',
        cotisation:'briefcase',
        impot:'file-text'
    }
};

export const PANELS_ORDER = [
  PanelType.INTRO, 
  PanelType.GOALS, 
  PanelType.PRESTATIONS, 
  PanelType.PROJECTION, 
  PanelType.CHARGES, 
  PanelType.CLIENTS, 
  PanelType.SUMMARY, 
  PanelType.RESULTS, 
  PanelType.INSIGHTS
];

export const currencyFormatter = new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' });

export const getRandomQuote = (type: 'MOTIVATIONAL_QUOTES' | 'HUGO_QUOTES' = 'MOTIVATIONAL_QUOTES') => {
    const quotes = APP_CONFIG[type];
    return quotes[Math.floor(Math.random() * quotes.length)];
};