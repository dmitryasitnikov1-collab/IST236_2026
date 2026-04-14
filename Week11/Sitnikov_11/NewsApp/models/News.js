// models/News.js
// This file defines the News class, which is a simple data model for representing news items in the app. Each news item has properties like id, category, headline, date, author, agency, description, and imageUrl. The constructor function initializes these properties when a new News object is created. This class is used in the dummy-news.js file to create sample news data that can be displayed in the app.
class News {
  constructor(id, category, headline, date, author, agency, description, imageUrl) {
    this.id = id;
    this.category = category;
    this.headline = headline;
    this.date = date;
    this.author = author;
    this.agency = agency;
    this.description = description;
    this.imageUrl = imageUrl;
  }
}
// The News class is exported as the default export of this module, allowing it to be imported and used in other parts of the app, such as in the dummy-news.js file where instances of News are created to populate the NEWS array.
export default News;
