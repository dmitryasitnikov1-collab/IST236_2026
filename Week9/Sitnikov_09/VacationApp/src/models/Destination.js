// src/models/Destination.js
class Destination {
  constructor(
    id,
    countryId,
    name,
    avgCost,
    foundedYear,
    rating,
    description,
    imageUrl
  ) {
    this.id = id;
    this.countryId = countryId;
    this.name = name;
    this.avgCost = avgCost;
    this.foundedYear = foundedYear;
    this.rating = rating;
    this.description = description;
    this.imageUrl = imageUrl;
  }
}

export default Destination;
