import { ref } from 'vue'

export const servicesData = ref([
  {
    id: 'innen',
    title: 'Innenaufbereitung',
    packages: [
      {
        name: 'Basis-Paket',
        price: 'ab 80€',
        features: [
          'Intensive Reinigung von Cockpit & Kunststoffteilen',
          'Aussaugen des gesamten Innenraums',
          'Fensterreinigung innen',
        ]
      },
      {
        name: 'Premium-Paket',
        price: 'ab 150€',
        features: [
          'Alle Leistungen des Basis-Pakets',
          'Tiefgründige Nassreinigung der Sitze & Teppiche',
          'Behandlung mit Tornado-Gerät inkl. Dachhimmel',
          'Abschließende Versiegelung der Kunststoffteile',
        ]
      }
    ],
    note: 'Lederpflege und -versiegelung gegen Aufpreis.'
  },
  {
    id: 'aussen',
    title: 'Außenaufbereitung',
    packages: [
        {
            name: 'Glanz-Paket',
            price: 'ab 120€',
            features: [
                'Intensive Fahrzeugvorwäsche & Handwäsche',
                'Einstufige Hochglanzpolitur',
                'Hochwertige Wachsversiegelung (Standzeit ca. 6 Monate)',
            ]
        },
        {
            name: 'Keramik-Paket',
            price: 'ab 350€',
            features: [
                'Alle Leistungen des Glanz-Pakets',
                'Mehrstufige Lackpolitur zur Defektkorrektur',
                'Hochwertige Keramik-Versiegelung (Standzeit 1-3 Jahre)',
            ]
        }
    ],
    note: 'Standzeit der Versiegelung variiert je nach Pflege.'
  },
  {
    id: 'felgen',
    title: 'Felgenpflege & Keramikversiegelung',
    packages: [
        {
            name: 'Felgen-Komplett',
            price: 'ab 100€',
            features: [
                'Gründliche Felgenreinigung (innen & außen)',
                'Entfernung von Bremsstaub & Verschmutzungen',
                'Professionelle Keramik-Versiegelung',
            ]
        }
    ],
  }
])