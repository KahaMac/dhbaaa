// Association configuration
export const ASSOCIATION_CONFIG = {
  totalAssociations: 7,
  areas: [
    "Kalanki",
    "Sundhara", 
    "Bagbazar",
    "Koteshwor",
    "Airport",
    "Chabahil",
    "New Bus Park",
    "Balaju"
  ]
} as const

export type AssociationArea = typeof ASSOCIATION_CONFIG.areas[number]
