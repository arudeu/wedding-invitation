// Everything on the invitation lives here, so edits are made in one place.
export const event = {
  groom: "Joaquin",
  bride: "Krisna",
  dateLabel: "NOVEMBER 28, 2025",
  timeLabel: "10:30 AM",
  addressLines: [
    "BLK 11, LOT 44, ST. MARTIN ST.,",
    "TIERRA VERDE SUBDIVISION, PALLOCAN WEST,",
    "BATANGAS CITY",
  ],
  rsvpUrl: "https://forms.gle/Kd7vVF1BB7PHFuJz5",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d968.8688865210454!2d121.07019990693269!3d13.750171548323033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd053642895993%3A0x42fb54bd6480be0c!2sPallocan%20Kanluran%2C%20Batangas%20City%2C%20Batangas!5e0!3m2!1sen!2sph!4v1763459217206!5m2!1sen!2sph",
  groomParents: ["Mr. Joaquin Teriana Parcon Jr.", "Mrs. Emily Mirafuentes Parcon"],
  brideParents: ["Mr. Oliver Arellano Manalo", "Mrs. Ruzen Mercader Manalo"],
  sponsors: [
    "Engr. Aldrin Abraham", "Ms. Melanie Abraham",
    "Mr. Erwin Bagamasbad", "Ms. Darlene Maranan",
    "Mr. Leonardo Red", "Ms. Mary Jean Red",
    "Mr. Nestor De Leon", "Ms. Nilda De Leon",
    "Mr. Bonifacio Manalo", "Ms. Rosenie Manalo",
  ],
};

export const addressText = event.addressLines.join(" ").replace(/\s+/g, " ");
export const mapsSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(addressText)}`;
export const mapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(addressText)}`;
