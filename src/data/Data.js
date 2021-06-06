import { colors } from 'theme/theme';

export const squareCardList = [
  {
    id: 1,
    type: 'square',
    content: [
      {
        id: 1,
        content:
          'Professional services & products offered to exceed your expectations'
      }
    ],
    iconType: 'mainGoodLuck',
    background: colors.black,
    fontColor: colors.white
  },
  {
    id: 2,
    type: 'square',
    content: [
      { id: 1, content: 'Certified Professional & Trained Installers' }
    ],
    iconType: 'mainShield',
    background: colors.black,
    fontColor: colors.white
  },
  {
    id: 3,
    type: 'square',
    content: [{ id: 1, content: '100% Satisfaction Guaranteed' }],
    iconType: 'mainSmile',
    background: colors.black,
    fontColor: colors.white
  },
  {
    id: 4,
    type: 'square',
    content: [{ id: 1, content: 'Work with every make & model' }],
    iconType: 'mainPerson',
    background: colors.black,
    fontColor: colors.white
  },
  {
    id: 5,
    type: 'square',
    content: [{ id: 1, content: 'Pick up & delivery services available' }],
    iconType: 'mainTruck',
    background: colors.black,
    fontColor: colors.black
  },
  {
    id: 6,
    type: 'square',
    content: [
      {
        id: 1,
        content:
          'When requested, certain mobile services available at your location '
      }
    ],
    iconType: 'mainCheck',
    background: colors.black,
    fontColor: colors.white
  }
];

export const linkLists = [
  {
    id: 1,
    keyword: 'Ceramic Coating',
    link: '/ceramic-coating',
    icon: 'footerCeramicPro'
  },
  {
    id: 2,
    keyword: 'Paint Protection Film',
    link: '/paint-protection',
    icon: 'footerDetailingCorrection'
  },
  {
    id: 3,
    keyword: 'Window Tinting',
    link: '/window-tinting',
    icon: 'footerWindowTinting'
  },
  {
    id: 4,
    keyword: 'Detailing & Painting Correction',
    link: '/detailing-and-correction',
    icon: 'footerDetailingCorrection'
  },
  {
    id: 5,
    keyword: 'Wheels & Tires',
    link: '/wheel-and-tire',
    icon: 'footerWheelTire'
  }
];

export const serviceAccordionState = [
  {
    id: 1,
    title: 'Ceramic Coating',
    description: `Can be described as an additional clear coat, with three times the hardness and self-cleaning properties.`,
    imagePath: 'assets/OurBestServiceImage_01.png',
    active: true,
    to: '/ceramic-coating'
  },
  {
    id: 2,
    title: 'Paint Protection Film',
    description: `Perfect for protecting high impact areas or full car wraps coverage from chips, scratches and road debris.`,
    imagePath: 'assets/OurBestServiceImage_02.png',
    active: false,
    to: '/paint-protection'
  },
  {
    id: 3,
    title: 'Window Tinting',
    description: `Enhances privacy, reduces infra-red heat, as well as keeps your skin and eyes safe from harmful UV rays.`,
    imagePath: 'assets/OurBestServiceImage_03.png',
    active: false,
    to: '/window-tinting'
  },
  {
    id: 4,
    title: 'Detailing & Paint Correction',
    description: `Get your car looking like new again with the interior/exterior packages we offer.`,
    imagePath: 'assets/OurBestServiceImage_04.png',
    active: false,
    to: '/detailing-and-correction'
  },
  {
    id: 5,
    title: 'Wheels & Tires',
    description: `We work with most brands and can get you the wheels and tires you need and want.`,
    imagePath: 'assets/OurBestServiceImage_05.png',
    active: false,
    to: '/wheel-and-tire'
  }
];

export const ourWorkCarouselImgs = [
  {
    id: 1,
    path: 'assets/ceramicOurWorks_01.png'
  },
  {
    id: 2,
    path: 'assets/ceramicOurWorks_02.png'
  },
  {
    id: 3,
    path: 'assets/ceramicOurWorks_03.png'
  },
  {
    id: 4,
    path: 'assets/ceramicOurWorks_04.jpg'
  },
  {
    id: 5,
    path: 'assets/ceramicOurWorks_05.png'
  }
];

export const ceramicCardList = [
  {
    id: 1,
    type: 'arrow',
    content: [
      {
        id: 1,
        content: 'Wash and decontamination of complete car.'
      }
    ],
    iconType: 'ceramicCardWashCar',
    background: '#2D2D2D',
    fontColor: '#FFFFFF'
  },
  {
    id: 2,
    type: 'arrow',
    content: [
      {
        id: 1,
        content: 'Paint correction to remove scratches, swirls, imperfections'
      }
    ],
    iconType: 'ceramicCardPaint',
    background: '#2D2D2D',
    fontColor: '#FFFFFF'
  },
  {
    id: 3,
    type: 'arrow',
    content: [
      {
        id: 1,
        content: `Completely dry & complete solvent & alcohol wipe down to remove waxes, oils on the painted surfaces`
      }
    ],
    iconType: 'ceramicCardHand',
    background: '#2D2D2D',
    fontColor: '#FFFFFF'
  },
  {
    id: 4,
    type: 'arrow',
    content: [{ id: 1, content: 'Ceramic Coating applicationl' }],
    iconType: 'ceramicCar2',
    background: '#2D2D2D',
    fontColor: '#FFFFFF'
  }
];

export const explainCeramic = [
  {
    id: 1,
    iconType: 'ceramicDollar',
    title: 'GOOD INVESTMENT',
    content:
      'The coating will protect the vehicle’s exterior and interior from deteriorating for a lifetime. The resale market value will therefore be substantially higher! Ceramic Pro pays for itself in the end.'
  },
  {
    id: 2,
    iconType: 'ceramicCar',
    title: 'LOOK NEW ALL THE TIME',
    content:
      'Once the coating is applied you will see a mirror effect, glossiness and color depth, incomparable to anything else! With proper maintenance your car’s finish will shine for many years to come.'
  },
  {
    id: 3,
    iconType: 'ceramicLike',
    title: 'LESS MAINTENANCE',
    content:
      'The slick coated surface won’t allow dirt, brake dust and tar to stick to your paint, wheels or glass. This makes washing your vehicle less labor intensive and less frequent. Waxing is now obsolete.'
  }
];

export const ceramicOption_01 = [
  '2 Layers of "Glass" on all glass and mirrors.'
];

export const ceramicOption_02 = [
  '1 Layer of “Wheel & Caliper” on Wheels & Calipers.'
];

export const ceramicOption_03 = [
  '1 Coat of "Leather" on the high traffic area and "Textile" on the carpet floor.'
];

export const ceramicPackage_01 = [
  {
    id: 1,
    title: '4 Layers Ceramic Pro 9H',
    description: 'on all painted surfaces and trim'
  },
  {
    id: 2,
    title: '1 Layers Ceramic Pro Top Coat',
    description: 'on all painted surfaces and trim'
  },
  {
    id: 3,
    title: '1 Layer Ceramic Pro Glass',
    description: 'on all glass surfaces'
  },
  {
    id: 4,
    title: '1 Layer Ceramic Pro Wheel & Caliper',
    description: 'on the face of the wheels'
  }
];

export const ceramicPackage_02 = [
  {
    id: 1,
    title: '1 Layer Ceramic Pro 9H',
    description: 'on all painted surfaces and trim'
  },
  {
    id: 2,
    title: '1 Layer Ceramic Pro Top Coat',
    description: 'on all painted surfaces and trim'
  },
  {
    id: 3,
    title: '1 Layer Ceramic Pro Glass',
    description: 'on all glass surfaces'
  },
  {
    id: 4,
    title: '1 Layer Ceramic Pro Wheel & Caliper',
    description: 'on the face of the wheels'
  }
];

export const ceramicPackage_03 = [
  {
    id: 1,
    title: '1 Layer Ceramic Pro Top Coat',
    description: 'on all painted surfaces and trim'
  },
  {
    id: 2,
    title: '1 Layers Ceramic Pro Glass',
    description: 'on all glass surfaces'
  },
  {
    id: 3,
    title: '1 Layer Ceramic Pro Wheel & Caliper',
    description: 'on the face of the wheels'
  }
];

export const ceramicLeatherInfo = [
  'Excellent Durability',
  'Easy to Clean',
  'Super Hydrophobic Effect',
  'Superior Wear Resistance',
  'Keeps Leather Soft',
  'Preserves Factory Look & Feel'
];

export const ceramicTextileInfo = [
  'Excellent Durability',
  'Super Hydrophobic Effect – 140⁰ of water beads',
  'Excellent Wear Resistance',
  'Repels Spills & Stains',
  'Keeps Fibers Clean'
];

export const iGLFeatures = [
  {
    id: 1,
    iconType: 'iglSilica',
    title: '100% Silica',
    content: '100% silica content, 0% solvent creating a thick film build'
  },
  {
    id: 2,
    iconType: 'iGL10H',
    title: 'Extreme Hardness',
    content: 'Crosslinks and full cures to hardness of up to 10H(pencil scale)'
  },
  {
    id: 3,
    iconType: 'iGLWarranty',
    title: 'Warranty',
    content:
      'Backed by an official warranty provided by IGL Coatings and supported by certified IGL Coatings Master Applicator'
  },
  {
    id: 4,
    iconType: 'iGLWater',
    title: 'Super Hydrophobic Quality',
    content:
      'Water contact angle that surpasses 120º and retaining close to this angle for a long period'
  },
  {
    id: 5,
    iconType: 'iGLSoft',
    title: 'Silky Soft Surface',
    content:
      'First coating to provide a texture similar to soft luxurious silk that rivals bespoke wax'
  },
  {
    id: 6,
    iconType: 'iGLSpot',
    title: 'Waterspot Resistance',
    content:
      'Improved formulation to increase the resistance of water spotting on coated vehicles'
  }
];

export const iGLProtectionproduct_01 = [
  'Premium high solids silica coating',
  '8H hardness',
  'Ultimate gloss & shine',
  'Repels water, oil & dirt',
  'Extremely durable lasting up to 1 year'
];

export const iGLProtectionproduct_02 = [
  'Premium high solids silica coating',
  '9H hardness',
  'Ultimate gloss & shine',
  'Repels water, oil & dirt',
  'Extremely durable lasting up to 2 years'
];

export const iGLProtectionproduct_03 = [
  'Premium high solids silica coating',
  '9H hardness with improved chemical resistance',
  'Ultimate gloss & shine',
  'Repels water, oil & dirt',
  'Extremely durable lasting up to 3 years'
];

export const iGLProtectionproduct_04 = [
  'Premium 100% solid hybrid silica coating',
  '10H hardness with extreme silk like slick',
  'Ultimate gloss & shine',
  'Repels water, oil & dirt',
  'Extremely durable lasting up to 5 years'
];

export const explaniGL = [
  {
    id: 1,
    iconType: 'iGLBus',
    title: 'WASHING',
    content:
      'For best results wash with IGL, Ecoclean Wash or IGL Ecoshine Paint on a bi-weekly basis to avoid excessive contamination build up. Avoid washing in direct sunlight to minimize streaking and water spotting. Wash from the top down leaving the dirtiest sections for last to avoid cross contamination. Use separate soap and sponge/mitt for wheels.'
  },
  {
    id: 2,
    iconType: 'iGLCar',
    title: 'DRYING',
    content:
      'Always dry completely and never leave to “air” dry. Tap water contains minerals that may leave deposits creating water spots. Use quality IGL Microfiber towels for best results and avoid aggressive wiping, allowing the material to absorb the water.'
  },
  {
    id: 3,
    iconType: 'iGLHand',
    title: 'SPOT REMOVAL',
    content:
      'Never use aggressive products to polish the coating or remove surface contamination. Never use excessive force to remove spots. Bird droppings, tar, sap, etc. should be removed as soon as possible to avoid temporary staining or hardening on the coating. Any staining left behind from the bird droppings will break down over a few days without affecting the coating.'
  }
];

export const PPFXpelFeatures = [
  {
    id: 1,
    title: 'Self Healing',
    iconType: 'paintProtectionHealing',
    content:
      'When exposed to heat, the enhanced clear coat properties eliminate fine scratches and swirl marks'
  },
  {
    id: 2,
    title: 'Discolouration & Stain Resistant',
    iconType: 'paintProtectionDiscolouration',

    content:
      'Stain resistant and will maintain clarity under the harshest conditions here in Canada'
  },
  {
    id: 3,
    title: 'Absolute Clarity & Protection',
    iconType: 'paintProtectionShield',

    content:
      'Zero orange peel finish, leaves the film virtually invisible. Protection should be indistinguishable from factory paint.'
  },
  {
    id: 4,
    title: 'Warranty',
    iconType: 'paintProtectionWarranty',
    content:
      'Built to last. ULTIMATE PLUS is backed by our comprehensive 10 year warranty, ensuring your vehicle looks its best for years to come.'
  }
];

export const PPFStealthFeatures = [
  {
    id: 1,
    iconType: 'paintProtectionHealing',
    title: 'Self Healing',
    content:
      'When exposed to heat, the enhanced clear coat properties eliminate fine scratches and swirl marks over time'
  },
  {
    id: 2,
    iconType: 'likeCircle2',
    title: 'Easy Maintenance',
    content:
      'Flat finishes are notoriously difficult to maintain and even harder to repair. STEALTH enables you to easily wash and dry your car without damaging its sheen.'
  },
  {
    id: 3,
    iconType: 'paintProtectionCustom',
    title: 'Custom Applications',
    content:
      'Utilize STEALTH to accentuate gloss aero or carbon fiber, and protect factory flares, splitters, and trim pieces.'
  },
  {
    id: 4,
    iconType: 'paintProtectionFinish',
    title: 'Sleek Satin Finish',
    content:
      'With an unique satin finish, STEALTH helps match most factory flat paint jobs and virtually disappears on most surfaces. With a finish that’s uniformly smooth, you can add STEALTH to your matte or gloss paint job for a unique satin finish.'
  },
  {
    id: 5,
    iconType: 'paintProtectionWarranty',
    title: 'Warranty & Durability',
    content:
      'STEALTH features the same superior impact protection as ULTIMATE PLUS back by our industry-leading 10 year warranty.'
  }
];

export const PPFPackage_01 = [
  'Full Front & Rear Bumpers',
  'Hood & Fenders 18″',
  'Mirror Covers',
  'Headlights & Fog Lights',
  'Full Door Panels',
  'Full Quater & Pillar Panels'
];

export const PPFPackage_02 = [
  'Full Front Bumper',
  'Full Hood & Fenders',
  'Mirror Covers',
  'Headlights & Fog Lights',
  'Full Door Panels',
  'Full Quater & Pillar Panels'
];

export const PPFPackage_03 = [
  'Full Front Bumper',
  'Hood & Fenders 18″',
  'Mirror Covers',
  'Headlights & Fog Lights',
  'Full Door Panels',
  'Full Quater & Pillar Panels'
];

export const PPFcarouselImgs = [
  {
    id: 1,
    path: 'assets/paintOurWorks_01.png'
  },
  {
    id: 2,
    path: 'assets/paintOurWorks_02.jpg'
  },
  {
    id: 3,
    path: 'assets/paintOurWorks_03.png'
  },
  {
    id: 4,
    path: 'assets/paintOurWorks_04.png'
  },
  {
    id: 5,
    path: 'assets/paintOurWorks_05.png'
  }
];

export const windowTintingCarouselImgs = [
  {
    id: 1,
    path: 'assets/windowOurWorks_01.png'
  },
  {
    id: 2,
    path: 'assets/windowOurWorks_02.png'
  },
  {
    id: 3,
    path: 'assets/windowOurWorks_03.jpg'
  },
  {
    id: 4,
    path: 'assets/windowOurWorks_04.png'
  },
  {
    id: 5,
    path: 'assets/windowOurWorks_05.jpg'
  }
];

export const DPCcardInfolist = [
  'Complete exterior hand wash',
  'Complete interior vaccum',
  'Leather cleaning and conditioning',
  'Cleaning windows and mirrors',
  'Salt removal',
  'Cleaning door jams',
  'Wheel cleaning and tire dressing',
  'Removing bugs, tar, tree sap',
  'Claybar & iron paint decontamination',
  'Polish to add gloss to paint',
  'Compound and polish to remove scratches',
  'Paint sealant',
  'Engine cleaning and dressing',
  'Headlights polish'
];

export const carbon_01 = [
  "Reduces Glare PRIME CS reduces the sun's glare, enhancing visibility and reducing eyestrain.",
  'Keeps You Comfortable PRIME CS window films block solar heat radiation to keep your vehicle at a comfortable temperature and improve fuel efficiency.',
  'UV Ray Protection PRIME CS provides SPF 500 protection that effectively blocks over 99% of harmful UV rays that can lead to numerous skin cancers, premature aging and skin cell damage.',
  'Crystal Clear Signal PRIME CS contains no metalized particles ensuring that it does not interfere with radio, cellular, or Bluetooth signals.',
  'Looks GoodThe black or neutral charcoal color in our PRIME CS window films remains the same over the years and never fades or turns purple.'
];

export const carbon_02 = [
  'Hybrid Dye-Metal Construction PRIME HP offers higher heat rejection compared to traditional dyed films with a slightly more reflective finish.',
  "UV Ray Protection Our ceramic particle technology blocks the vast majority of the sun's heat-causing infrared radiation — keeping your interior cool and improving fuel efficiency.",
  'Crystal Clear Signal Although PRIME HP contains a metalized layer, we have specifically formulated our hybrid construction so it does not interfere with radio, cellular, or Bluetooth signals.',
  'Looks Good The black color of our PRIME HP series provides a great match to OEM privacy glass and remains the same over the years.',
  'Blend Of Performance And Value PRIME HP series is a perfect marriage of value and performance.'
];

export const ceramic_01 = [
  "Ceramic Particle Technology PRIME XR contains ceramic particles that filter out the sun's infrared radiation — making them more effective than traditional metallized or dyed films.",
  "Superior Heat Rejection Our ceramic particle technology blocks the vast majority of the sun's heat-causing infrared radiation — keeping your interior cool and improving fuel efficiency.",
  'UV Ray Protection PRIME XR provides SPF 1,000 protection that effectively blocks over 99% of harmful Ultraviolet rays that can lead to numerous skin cancers, premature aging and skin cell damage.',
  'Greater Clarity In the past, keeping cool meant darker shades. The ceramic technology in PRIME XR allows us to provide the highest performance without sacrificing clarity and color.',
  'Crystal Clear Signal Our nano-ceramic particle technology does not interfere with radio, cellular, and Bluetooth signals like traditional metallized films.'
];

export const ceramic_02 = [
  'Ceramic Particle Technology Contains a proprietary blend of ceramic particles to act as a solid barrier to infrared heat while maintaining the ease of install in a 1.5 mil construction.',
  'Superior Heat Rejection Our multilayer nano-ceramic particle technology blocks up to 98% of the infrared heat.',
  'UV Ray Protection PRIME XR PLUS provides SPF 1,000 protection that effectively blocks over 99% of harmful UV rays that can lead to numerous skin cancers, premature aging and skin cell damage.',
  'Greater Clarity In the past, keeping cool meant choosing a darker shade of tint. The multi-layer nano construction in PRIME XR PLUS provides ultra-high performance without reducing outbound visibility.',
  'Crystal Clear Signal In a digital world, clear communication is key. PRIME XR PLUS construction will not interfere with radio, cellular, or bluetooth signals.'
];

export const paintCorrectionInfoList = [
  'Scratches & Swirl Marks',
  'Paint Holograms',
  'Bird Dropping Etching',
  'Oxidation and Fading',
  'Water Spot Damage',
  'Automatic Carwash scratches'
];

export const paintCorrectionCarouselImgs = [
  {
    id: 1,
    path: 'assets/ourWorks-1.png'
  },
  {
    id: 2,
    path: 'assets/ourWorks-2.png'
  },
  {
    id: 3,
    path: 'assets/ourWorks-3.png'
  },
  {
    id: 4,
    path: 'assets/ourWorks-4.png'
  },
  {
    id: 5,
    path: 'assets/ourWorks-5.png'
  }
];

export const tireList = [
  {
    id: 'tire_01',
    value: 'beyern',
    src: 'assets/img/tire_beyern.png',
    active: false
  },
  {
    id: 'tire_02',
    value: 'blackrhino',
    src: 'assets/img/tire_blackrhino.png',
    active: false
  },
  {
    id: 'tire_03',
    value: 'enkei',
    src: 'assets/img/tire_enkei.png',
    active: false
  },
  {
    id: 'tire_04',
    value: 'fastwheels',
    src: 'assets/img/tire_fastwheels.png',
    active: false
  },
  {
    id: 'tire_05',
    value: 'hre',
    src: 'assets/img/tire_hre.png',
    active: false
  },
  {
    id: 'tire_06',
    value: 'vorsteiner',
    src: 'assets/img/tire_vorsteiner.png',
    active: false
  },
  {
    id: 'tire_07',
    value: 'gts',
    src: 'assets/img/tire_gts.png',
    active: false
  },
  {
    id: 'tire_08',
    value: 'superspeed',
    src: 'assets/img/tire_superspeed.png',
    active: false
  },
  {
    id: 'tire_09',
    value: 'mandrus',
    src: 'assets/img/tire_mandrus.png',
    active: false
  },
  {
    id: 'tire_10',
    value: 'tirerays',
    src: 'assets/img/tire_rays.png',
    active: false
  },
  {
    id: 'tire_11',
    value: 'replica',
    src: 'assets/img/tire_replika.png',
    active: false
  },
  {
    id: 'tire_12',
    value: 'rotiform',
    src: 'assets/img/tire_rotiform.png',
    active: false
  },
  {
    id: 'tire_13',
    value: 'sparco',
    src: 'assets/img/tire_sparco.png',
    active: false
  },
  {
    id: 'tire_14',
    value: 'superspeedCircle',
    src: 'assets/img/tire_superspeedCircle.png',
    active: false
  }
];

export const wheelList = [
  {
    id: 'wheel_01',
    value: 'wheel_bfgoodrich',
    src: 'assets/img/wheel_bfgoodrich.png',
    active: false
  },
  {
    id: 'wheel_02',
    value: 'wheel_bridgestone',
    src: 'assets/img/wheel_bridgestone.png',
    active: false
  },
  {
    id: 'wheel_03',
    value: 'wheel_continental',
    src: 'assets/img/wheel_continental.png',
    active: false
  },
  {
    id: 'wheel_04',
    value: 'wheel_dunlop',
    src: 'assets/img/wheel_dunlop.png',
    active: false
  },
  {
    id: 'wheel_05',
    value: 'wheel_yokohama',
    src: 'assets/img/wheel_yokohama.png',
    active: false
  },
  {
    id: 'wheel_06',
    value: 'wheel_pirelli',
    src: 'assets/img/wheel_pirelli.png',
    active: false
  },
  {
    id: 'wheel_07',
    value: 'wheel_generaltire',
    src: 'assets/img/wheel_generaltire.png',
    active: false
  },
  {
    id: 'wheel_08',
    value: 'wheel_gislaved',
    src: 'assets/img/wheel_gislaved.png',
    active: false
  },
  {
    id: 'wheel_09',
    value: 'wheel_gislaved',
    src: 'assets/img/wheel_gislaved.png',
    active: false
  },
  {
    id: 'wheel_10',
    value: 'wheel_hankook',
    src: 'assets/img/wheel_hankook.png',
    active: false
  },
  {
    id: 'wheel_11',
    value: 'wheel_uniroyal',
    src: 'assets/img/wheel_uniroyal.png',
    active: false
  },
  {
    id: 'wheel_12',
    value: 'wheel_rovelo',
    src: 'assets/img/wheel_rovelo.png',
    active: false
  },
  {
    id: 'wheel_13',
    value: 'wheel_kapsen',
    src: 'assets/img/wheel_kapsen.png',
    active: false
  },
  {
    id: 'wheel_14',
    value: 'wheel_kumhotire',
    src: 'assets/img/wheel_kumhotire.png',
    active: false
  },
  {
    id: 'wheel_15',
    value: 'wheel_michelin',
    src: 'assets/img/wheel_michelin.png',
    active: false
  },
  {
    id: 'wheel_16',
    value: 'wheel_maxxis',
    src: 'assets/img/wheel_maxxis.png',
    active: false
  },
  {
    id: 'wheel_17',
    value: 'wheel_nexen',
    src: 'assets/img/wheel_nexen.png',
    active: false
  },
  {
    id: 'wheel_18',
    value: 'wheel_toyotires',
    src: 'assets/img/wheel_toyotires.png',
    active: false
  }
];

export const FAQAccordionState = [
  {
    id: 1,
    title: 'How much does your services cost?',
    description: `It depends on the service you are looking to get. Every car is different and depending on the services the price varies. Contact us for more information.`,
    active: true
  },
  {
    id: 2,
    title: 'What is your guarantee?',
    description: `We guarantee that the job will be done with the highest quality standards. If for some reason you are not happy with the results lets us know and we will fix it.`,
    active: false
  },
  {
    id: 3,
    title: 'How long do you need my car for the work to be completed?',
    description:
      'Most of the time we need your car for 1-2 full days depending on the services you get. Protection products like ceramic coating, paint protection film, paint correction, require time for the product to be installed and after waiting time for curing.. We want to make sure the job is done right and not rushed.     ',
    active: false
  },
  {
    id: 4,
    title: 'Where are you located?',
    description:
      'We are located on 9 Vanley Cres, North York. We also offer some mobile services. We come to you. Contact us for more information.     ',
    active: false
  },
  {
    id: 5,
    title: 'How long do I wait before washing my car?',
    description:
      'We recommend not to wash your car within the first two weeks. It is the curing period for ceramic coatings, paint protection film. The first wash is on us. Book a time with us after the 2 weeks for the inspection wash. We make sure that everything is installed and working.      ',
    active: false
  },
  {
    id: 6,
    title: 'What car window tint percentage is legal in Ontario?',
    description:
      'In Ontario the legal limit for front side windows is 35%, the back and rear windows can be dark as you wish as there is no limit. You have to choose a shade of darkness that is comfortable and safe to you.     ',
    active: false
  },
  {
    id: 7,
    title: 'What Is Paint Protection Film?',
    description:
      'Paint protection film is a transparent film that adheres to the smooth surfaces of your vehicle. It does not affect the appearance or the aerodynamics of your vehicle. With minimal maintenance, paint protection film can last for many years with minimal maintenance. It looks great while keeping your paint protected. ',
    active: false
  },
  {
    id: 8,
    title: 'Do I Have to Wash My Car Prior To Receiving services?',
    description:
      'It is always recommended that your car is as clean as possible before application. This will allow your installer to assess the aesthetic condition of your car before installation.',
    active: false
  },
  {
    id: 9,
    title: 'How Long Should I Wait Before Washing My Car?',
    description:
      'It is recommended that you wait approximately 48 hours before washing your car so that the film can adhere to the surface of your car. Because the installation is applied wet, it will require some drying time.',
    active: false
  },
  {
    id: 10,
    title: 'Is Paint Protection Film Effective?',
    description:
      'Absolutely! The goal of the film is to not only prevent environmental damage but paint abrasions and scratches.',
    active: false
  },
  {
    id: 11,
    title: 'How Do I Maintain The Film?',
    description:
      'You should do regular washes and annual waxing in order to maintain the lustrous appearance. Ultimately, you should care for it the same way you would care for other painted surfaces.',
    active: false
  },
  {
    id: 12,
    title: 'Can I Have My Whole Vehicle Wrapped In Paint Protection Film?',
    description:
      'Yes. Your car can be fully wrapped on all smooth surfaces, both inside and outside.',
    active: false
  }
];

export const reviews = [
  {
    id: 1,
    name: 'Aleksandra',
    model: '2016 Audi SQ5',
    star: 5,
    review:
      'My Audi SQ5 got windows tinted with Xpel XR Ceramic film. The car looks so much better and the heat rejection is great! Would come back for other car services. Would recommend to all my friends and family!'
  },
  {
    id: 2,
    name: 'Tesla Parts',
    model: '2019 Tesla Model S',
    star: 4,
    review:
      'Got my Tesla tinted and ceramic coated with Lvps Great service, quality and price! Got complimentary interior clean up and sanitization because of covid. Thanks guys! Would  definitely recommend to friends and family!'
  },
  {
    id: 3,
    name: 'Daniel Guarino',
    model: '2018 Tesla Model 3',
    star: 5,
    review:
      "Got my Tesla model 3 ceramic coated by Max @ LVPS.... did a fantastic job..the car looks cleaner, shines brighter, has a deep finish look.  I couldn't be more happier!"
  },
  {
    id: 4,
    name: 'Natasha Bayarskaya',
    model: '2016 Honda Pilot',
    star: 5,
    review:
      'Amazing service! Thanks to Max and LVPS. Got my 2016 Honda Pilot all detailed and paint corrected with Ceramic Coating package. My car looks like brand new again. Would recommend to all my friends and family.'
  },
  {
    id: 5,
    name: 'Randy Cho',
    model: '2021 Tesla Model 3',
    star: 5,
    review:
      'Amazing job on my Tesla model 3! Did a ceramic coat and it turned out so nice! Recommend going to see Max at LVP for all your vehicle needs !'
  }
];

export const aboutUsCardList = [
  {
    id: 1,
    type: 'square',
    content: [
      {
        id: 1,
        content:
          'We value the quality of the product and services we offer to our clients.'
      }
    ],
    iconType: 'mainGoodLuck',
    background: colors.black,
    fontColor: colors.white
  },
  {
    id: 2,
    type: 'square',
    content: [
      {
        id: 1,
        content: 'Professional installation with the highest quality products.'
      }
    ],
    iconType: 'mainShield',
    background: colors.black,
    fontColor: colors.white
  },
  {
    id: 3,
    type: 'square',
    content: [
      {
        id: 1,
        content: 'Installation of products and services for any make and model.'
      }
    ],
    iconType: 'mainSmile',
    background: colors.black,
    fontColor: colors.white
  },
  {
    id: 4,
    type: 'square',
    content: [
      { id: 1, content: 'Installation guarantee on products and services.' }
    ],
    iconType: 'mainPerson',
    background: colors.black,
    fontColor: colors.white
  },
  {
    id: 5,
    type: 'square',
    content: [{ id: 1, content: 'Pick up & delivery services available.' }],
    iconType: 'mainTruck',
    background: colors.black,
    fontColor: colors.black
  },
  {
    id: 6,
    type: 'square',
    content: [
      {
        id: 1,
        content:
          'When requested, certain mobile services available at your location.'
      }
    ],
    iconType: 'mainCheck',
    background: colors.black,
    fontColor: colors.white
  }
];

export const ceramicProData = {
  label: 'Ceramic Pro Product Options',
  title: 'Ceramic Pro Product ModalDialog',
  firstPackage: {
    title: 'Ceramic Pro Protection Packages',
    contents: [
      {
        id: 1,
        option: 'Gold',
        price: 1499,
        active: false,
        info: [
          {
            id: 1,
            title: '4 Layers Ceramic Pro 9H',
            description: 'on all painted surfaces and trim'
          },
          {
            id: 2,
            title: '1 Layer of Ceramic Pro Top Coat',
            description: 'on all painted surfaces and trim.'
          },
          {
            id: 3,
            title: '1 Layer of Ceramic Pro Glass',
            description: 'on all glass surfaces.'
          },
          {
            id: 4,
            title: '1 Layer of Ceramic Pro Wheel and Caliper',
            description: 'on the face of the wheels.'
          }
        ]
      },
      {
        id: 2,
        option: 'Silver',
        price: 899,
        active: false,

        info: [
          {
            id: 1,
            title: '1 Layers of Ceramic Pro 9H',
            description: 'on all painted surfaces and trim'
          },
          {
            id: 2,
            title: '1 Layer of Ceramic Pro Top Coat',
            description: 'on all painted surfaces and trim.'
          },
          {
            id: 3,
            title: '1 Layer of Ceramic Pro Glass',
            description: 'on all glass surfaces.'
          },
          {
            id: 4,
            title: '1 Layer of Ceramic Pro Wheel and Caliper',
            description: 'on the face of the wheels.'
          }
        ]
      },
      {
        id: 3,
        option: 'Bronze',
        price: 599,
        active: false,

        info: [
          {
            id: 1,
            title: '1 Layer of Ceramic Pro Top Coat',
            description: 'on all painted surfaces and trim.'
          },
          {
            id: 2,
            title: '1 Layer of Ceramic Pro Glass',
            description: 'on all glass surfaces.'
          },
          {
            id: 3,
            title: '1 Layer of Ceramic Pro Wheel and Caliper',
            description: 'on the face of the wheels.'
          }
        ]
      }
    ]
  },
  secondPackage: {
    title: 'Ceramic Pro Protection Additional Options',
    contents: [
      {
        id: 1,
        active: false,
        color: 'black',
        price: 199,
        option: 'GLASS',
        mode: 'list',
        info: ['2 Layers of "Glass" on all glass and mirrors.']
      },
      {
        id: 2,
        active: false,
        color: 'black',
        price: 399,
        option: 'WHEELS & CALIPERS PROTECTION',
        info: ['1 Layer of “Wheel & Caliper” on Wheels & Calipers.']
      },
      {
        id: 3,
        active: false,
        color: 'black',
        price: 599,
        option: 'INTERIOR PROTECTION',
        info: [
          '1 Coat of "Leather" on the high traffic area and "Textile" on the carpet floor.'
        ]
      }
    ]
  },
  thirdPackage: {
    title: 'IGL Coatings',
    priceTableType: 'helmetPriceTable',
    contents: [
      {
        id: 1,
        active: false,
        color: 'green',
        price: 400,
        option: 'IGL POLY',
        info: [
          'Premium high solids silica coating',
          '8H hardness',
          'Ultimate gloss & shine',
          'Repels water, oil & dirt',
          'Extremely durable lasting up to 1 year'
        ]
      },
      {
        id: 2,
        active: false,
        color: 'green',
        price: 600,
        option: 'IGL QUARTZ',
        info: [
          'Premium high solids silica coating',
          '9H hardness',
          'Ultimate gloss & shine',
          'Repels water, oil & dirt',
          'Extremely durable lasting up to 2 years'
        ]
      },
      {
        id: 3,
        active: false,
        color: 'green',
        price: 800,
        option: 'IGL QUARTZ+',
        info: [
          'Premium high solids silica coating',
          '9H hardness with improved chemical resistance',
          'Ultimate gloss & shine',
          'Repels water, oil & dirt',
          'Extremely durable lasting up to 3 years'
        ]
      },
      {
        id: 4,
        active: false,
        color: 'green',
        price: 1200,
        option: 'IGL KENZO',
        info: [
          'Premium 100% solid hybrid silica coating',
          '10H hardness with extreme silk like slick',
          'Ultimate gloss & shine',
          'Repels water, oil & dirt',
          'Extremely durable lasting up to 5 years'
        ]
      }
    ]
  }
};

export const detailAndPaintCorrectionData = {
  label: 'Detailing and Paint Correction Product Options',
  title: 'Detailing and Paint Correction Product ModalDialog',
  firstPackage: {
    title: 'Package Options',
    contents: [
      {
        id: 1,
        active: false,
        option: 'Gold',
        price: 499.99,
        info: [
          {
            id: 1,
            description: 'Complete exterior hand wash'
          },
          {
            id: 2,
            description: 'Complete interior vacuum'
          },
          {
            id: 3,
            description: 'Leather cleaning and conditioning'
          },
          {
            id: 4,
            description: 'Cleaning windows and mirrors'
          },
          {
            id: 5,
            description: 'Salt removal'
          },
          {
            id: 6,
            description: 'Cleaning door jams'
          },
          {
            id: 7,
            description: 'Wheel cleaning and tire dressing'
          },
          {
            id: 8,
            description: 'Removing bugs, tar, tree sap'
          },
          {
            id: 9,
            description: 'Claybar & iron paint decontamination'
          },
          {
            id: 10,
            description: 'Compound and polish to remove scratches'
          },
          {
            id: 11,
            description: 'Polish to add gloss to paint'
          },
          {
            id: 12,
            description: 'Compound and polish to remove scratches'
          },
          {
            id: 13,
            description: 'Paint sealant'
          },
          {
            id: 14,
            description: 'Engine cleaning and dressing'
          },
          {
            id: 15,
            description: 'Headlights polish'
          }
        ]
      },
      {
        id: 2,
        active: false,
        option: 'Silver',
        price: 399.99,
        info: [
          {
            id: 1,
            description: 'Complete exterior hand wash'
          },
          {
            id: 2,
            description: 'Complete interior vacuum'
          },
          {
            id: 3,
            description: 'Leather cleaning and conditioning'
          },
          {
            id: 4,
            description: 'Cleaning windows and mirrors'
          },
          {
            id: 5,
            description: 'Salt removal'
          },
          {
            id: 6,
            description: 'Cleaning door jams'
          },
          {
            id: 7,
            description: 'Wheel cleaning and tire dressing'
          },
          {
            id: 8,
            description: 'Removing bugs, tar, tree sap'
          },
          {
            id: 9,
            description: 'Claybar & iron paint decontamination'
          },
          {
            id: 10,
            description: 'Polish to add gloss to paint'
          }
        ]
      },
      {
        id: 3,
        active: false,
        option: 'Bronze',
        price: 199.99,
        info: [
          {
            id: 1,
            description: 'Complete exterior hand wash'
          },
          {
            id: 2,
            description: 'Complete interior vacuum'
          },
          {
            id: 3,
            description: 'Leather cleaning and conditioning'
          },
          {
            id: 4,
            description: 'Cleaning windows and mirrors'
          },
          {
            id: 5,
            description: 'Salt removal'
          },
          {
            id: 6,
            description: 'Cleaning door jams'
          },
          {
            id: 7,
            description: 'Wheel cleaning and tire dressing'
          },
          {
            id: 8,
            description: 'Removing bugs, tar, tree sap'
          }
        ]
      }
    ]
  },
  secondPackage: {
    title: 'Paint Correction',
    contents: [
      {
        id: 1,
        color: 'black',
        price: 300,
        option: 'PAINT CORRECTION',
        info: ['1 Stage Polish to correct minor scratches and swirls']
      }
    ]
  }
};

export const ppfData = {
  label: 'Paint Protection Film Product Options',
  title: 'Paint Protection Film Product ModalDialog',
  firstPackage: {
    title: 'Package Options',
    contents: [
      {
        id: 1,
        active: false,
        option: 'Platinum',
        price: 1499,
        info: [
          {
            id: 1,
            description: 'Full Front & Rear Bumpers'
          },
          {
            id: 2,
            description: 'Full Hood, Fenders, Roof, Trunk'
          },
          {
            id: 3,
            description: 'Full Door Panels'
          },
          {
            id: 4,
            description: 'Full Quarter & Pillar Panels'
          },
          {
            id: 5,
            description: 'Mirror Covers'
          },
          {
            id: 6,
            description: 'Headlights & Fog Lights'
          }
        ]
      },
      {
        id: 2,
        active: false,
        option: 'Gold',
        price: 899,
        info: [
          {
            id: 1,
            description: 'Full Front Bumper'
          },
          {
            id: 2,
            description: 'Full Hood & Fenders'
          },
          {
            id: 3,
            description: 'Mirror Covers'
          },
          {
            id: 4,
            description: 'Headlights & Fog Lights'
          }
        ]
      },
      {
        id: 3,
        active: false,
        option: 'Silver',
        price: 599,
        info: [
          {
            id: 1,
            description: 'Full Front Bumper'
          },
          {
            id: 2,
            description: 'Hood & Fenders 18″'
          },
          {
            id: 3,
            description: 'Mirror Covers'
          },
          {
            id: 4,
            description: 'Headlights & Fog Lights'
          }
        ]
      }
    ]
  },
  secondPackage: {
    title: 'Paint Protection OPTIONS',
    contents: [
      {
        id: 1,
        active: false,
        color: 'red_05',
        option: '',
        price: 250,
        info: ["18'' HOOD AND FENDERS"]
      },
      {
        id: 2,
        active: false,
        color: 'red_05',
        option: '',
        price: 300,
        info: ["24'' HOOD AND FENDERS"]
      },
      {
        id: 3,
        active: false,
        color: 'red_05',
        option: '',
        price: 80,
        info: ['Trunk Strip Paint Protection Coverage']
      },
      {
        id: 4,
        active: false,
        color: 'red_05',
        option: '',
        price: 250,
        info: ['Rocker Panel Paint Protection coverage']
      },
      {
        id: 5,
        active: false,
        color: 'red_05',
        option: '',
        price: 150,
        info: ['Front Headlight Paint Protection Coverage']
      },
      {
        id: 6,
        active: false,
        color: 'red_05',
        option: '',
        price: 600,
        info: ['Full Bumper Paint Protection Coverage']
      },
      {
        id: 7,
        active: false,
        color: 'red_05',
        option: '',
        price: 600,
        info: ['Full Hood Paint Protection Coverage']
      },
      {
        id: 8,
        active: false,
        color: 'red_05',
        option: '',
        price: 300,
        info: ['Pillars Paint Protection Coverage(A-PILLARS AND FRONT OF ROOF)']
      }
    ]
  }
};
