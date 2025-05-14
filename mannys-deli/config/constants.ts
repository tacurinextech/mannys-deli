const dev = {
    COMPANY: {
      NAME: "[DEV] Manny's Deli",
      PHONE: "+1 (203)-857-1870",
      EMAIL: "mannysdeli@gmail.com",
      URL: "www.mannysdeli.com",
      FACEBOOK: 'https://www.facebook.com/mannysdeli?mibextid=wwXIfr',
      UBEREATS: "https://www.ubereats.com/store/mannys-deli/N7YU8HEYU5yVJu5IkAUqTg?srsltid=AfmBOoovzhVOaxWwLX8pMCOjgRDZtmOQ5c4EiVrtkZD7-z-WsWKHajJk",
      ADDRESS: "28 Bouton Street, Norwalk, CT 06854",
      HOURS: "Mon-Sat: 5:30AM - 8:00PM"
    }
  };
  
  const prod = {
    COMPANY: {
      NAME: "Manny's Deli",
      PHONE: "+1 (203)-857-1870",
      EMAIL: "mannysdeli@gmail.com",
      URL: "www.mannysdeli.com",
      FACEBOOK: 'https://www.facebook.com/mannysdeli?mibextid=wwXIfr',
      UBEREATS: "https://www.ubereats.com/store/mannys-deli/N7YU8HEYU5yVJu5IkAUqTg?srsltid=AfmBOoovzhVOaxWwLX8pMCOjgRDZtmOQ5c4EiVrtkZD7-z-WsWKHajJk",
      ADDRESS: "28 Bouton Street, Norwalk, CT 06854",
      HOURS: "Mon-Sat: 5:30AM - 8:00PM"
    }
  };
  
  export const config = process.env.NODE_ENV === 'development' ? dev : prod;