export const CATEGORIES = [
  { id: 'all', label: 'All Products' },
  { id: 'blood', label: 'Blood Collection' },
  { id: 'rapid', label: 'Rapid Test Kits' },
  { id: 'lab', label: 'Laboratory Reagents' },
  { id: 'diagnostic', label: 'Diagnostic Products' },
  { id: 'infection', label: 'Infection Control' },
]

export const PRODUCTS = [
  {
    id: 1,
    category: 'blood',
    name: 'Vacuum Blood Collection Tubes',
    desc: 'Premium quality vacuum blood collection tubes designed for accurate sample collection in laboratories and hospitals.',
    specs: 'Available: Red, Blue & Grey Caps | Sterile | Single Use',
    image: '/images/products/Vacuum Blood Collection Tubes.jpeg',
  },

  {
    id: 2,
    category: 'rapid',
    name: 'Dengue Day 1 Rapid Test Kit',
    desc: 'Rapid diagnostic kit for early detection of Dengue infection with reliable clinical performance.',
    specs: 'Rapid Results | Professional Use | Individually Packed',
    image: '/images/products/Dengue Day 1 Rapid Test Kit.jpeg',
  },

  {
    id: 3,
    category: 'rapid',
    name: 'Malaria Rapid Test Card',
    desc: 'Rapid immunochromatographic assay for qualitative detection of malaria infection.',
    specs: 'Fast Detection | Easy Procedure | Laboratory Use',
    image: '/images/products/Malaria Rapid Test Card.jpeg',
  },

  {
    id: 4,
    category: 'infection',
    name: 'Alcohol Swabs',
    desc: 'Sterile alcohol swabs containing 70% Isopropyl Alcohol for effective skin preparation.',
    specs: 'Sterile | Disposable | Box Pack',
    image: '/images/products/Alcohol Swabs.jpeg',
  },
    {
    id: 5,
    category: 'rapid',
    name: 'H. pylori Antigen Rapid Test',
    desc: 'Rapid antigen test for the qualitative detection of H. pylori infection.',
    specs: 'Lateral Flow Assay | Professional Use | Rapid Results',
    image: '/images/products/H. pylori Antigen Rapid Test.jpeg',
  },

  {
    id: 6,
    category: 'rapid',
    name: 'COVID-19 Antigen Rapid Test',
    desc: 'Rapid antigen detection kit for screening COVID-19 infections with quick results.',
    specs: 'Fast Results | Professional Use | Easy to Perform',
    image: '/images/products/COVID-19 Antigen Rapid Test.jpeg',
  },

  {
    id: 7,
    category: 'rapid',
    name: 'Typhoid IgG/IgM Combo Rapid Test',
    desc: 'Rapid immunoassay for simultaneous detection of Typhoid IgG and IgM antibodies.',
    specs: 'Combo Test | Rapid Detection | Clinical Use',
    image: '/images/products/Typhoid IgGIgM Combo Rapid Test.jpeg',
  },

  {
    id: 8,
    category: 'lab',
    name: 'GenX Lipase Reagent Kit',
    desc: 'Clinical chemistry reagent kit for quantitative estimation of serum lipase.',
    specs: 'Laboratory Reagent | High Accuracy | Diagnostic Use',
    image: '/images/products/GenX Lipase Reagent Kit.jpeg',
  },
    {
    id: 9,
    category: 'diagnostic',
    name: 'Urine Reagent Strips (H10)',
    desc: 'Multi-parameter urine reagent strips for routine urinalysis in hospitals, clinics, and diagnostic laboratories.',
    specs: '10 Parameters | Bottle Pack | Laboratory Use',
    image: '/images/products/Urine Reagent Strips (H10).jpeg',
  },
  {
  id: 10,
  category: 'rapid',
  name: 'TB MPT64 Ag Test',
  desc: 'Rapid immunochromatographic assay for the qualitative identification of Mycobacterium tuberculosis complex from positive culture isolates.',
  specs: '25 Tests/Kit | SD Biosensor | Professional Laboratory Use',
  image: '/images/products/TB MPT64 Ag Test.jpeg',
  },
]
  

export const TESTIMONIALS = [
  {
    name: 'Dr. Priya Sharma',
    role: 'Chief Surgeon, Apollo Hospitals',
    quote: 'Shiva Medical has been our trusted supplier for over 4 years. Consistent quality and always on time.',
  },
  {
    name: 'Mr. Ramesh Gupta',
    role: 'Purchase Manager, NIMS Hospital',
    quote: 'Their product range is exhaustive and the team is extremely responsive. Highly recommended for bulk procurement.',
  },
  {
    name: 'Dr. Anita Rao',
    role: 'Pathologist, Care Diagnostics',
    quote: 'Laboratory consumables are always certified and traceable. That reliability is hard to find.',
  },
]

export const CERTIFICATES = [
  {
    title: 'GST Registration Certificate',
    number: '36AABCS1234F1Z5',
    pdf: '/certificates/gst-certificate.pdf',
    issued: '01 Apr 2019',
    authority: 'Govt. of India – GST Council',
    icon: '📋',
    desc: 'Registered under GST as a licensed dealer of medical goods under HSN codes 3004 and 9018.',
  },
  {
    title: 'Drug License – Form 20B',
    number: 'TG-HYD-20B-2024-00489',
    pdf: '/certificates/drug-license-20b.pdf',
    issued: '15 Jan 2024',
    authority: 'Telangana State Drug Controller',
    icon: '💊',
    desc: 'Authorised to sell and distribute drugs in retail under the Drugs & Cosmetics Act, 1940.',
  },
  {
    title: 'Drug License – Form 21B',
    number: 'TG-HYD-21B-2024-00490',
    pdf: '/certificates/drug-license-21b.pdf',
    issued: '15 Jan 2024',
    authority: 'Telangana State Drug Controller',
    icon: '🏪',
    desc: 'Authorised for wholesale distribution of drugs and medical devices across Telangana.',
  },
]

export const COMPANY = {
  name: 'Shiva Medical & Surgicals',
  phone: '+91 9848769912',
  waNumber: '91 9848769912',
  email: 'info@shivamedical.in',
  address: 'Plot No. 45, Kukatpally Industrial Area, Hyderabad, Telangana – 500072',
  hours: 'Mon – Sat: 9:00 AM – 6:30 PM',
  gst: '36AABCS1234F1Z5',
  mapsUrl: 'https://maps.google.com/?q=Kukatpally+Industrial+Area+Hyderabad',
}
