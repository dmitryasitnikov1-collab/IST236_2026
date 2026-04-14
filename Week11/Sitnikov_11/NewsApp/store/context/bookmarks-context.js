import { createContext, useState } from "react"; // Import createContext and useState from React to create a context for managing bookmarks and to manage the state of bookmarked items.
// The BookmarksContext is created using the createContext function, which provides a way to pass data through the component tree without having to pass props down manually at every level. The context is initialized with an object that contains an empty array for ids and two functions (addBookmark and removeBookmark) that will be implemented later to manage the bookmarks.
export const BookmarksContext = createContext({
  ids: [],
  addBookmark: (id) => {},
  removeBookmark: (id) => {},
});
// The BookmarksContextProvider component is a context provider that manages the state of bookmarked news items. It uses the useState hook to keep track of the IDs of the bookmarked news items and provides functions to add and remove bookmarks. The provider wraps its children with the BookmarksContext.Provider component, passing the current state and functions as the value prop, allowing any component within the provider to access and modify the bookmarks.
function BookmarksContextProvider({ children }) {
  const [bookmarkIds, setBookmarkIds] = useState([]);
// The addBookmark function is defined to add a news item ID to the list of bookmarked IDs. It uses the setBookmarkIds function to update the state by appending the new ID to the existing array of bookmark IDs.
  function addBookmark(id) {
    setBookmarkIds((current) => [...current, id]);
  }
// The removeBookmark function is defined to remove a news item ID from the list of bookmarked IDs. It updates the state by filtering out the specified ID from the current array of bookmark IDs.
  function removeBookmark(id) {
    setBookmarkIds((current) => current.filter((itemId) => itemId !== id));
  }
// The value object is created to hold the current state of bookmarked IDs and the functions to add and remove bookmarks. This object is passed as the value prop to the BookmarksContext.Provider, making it accessible to any component that consumes this context.
  const value = {
    ids: bookmarkIds,
    addBookmark,
    removeBookmark,
  };
// The return statement of the BookmarksContextProvider component renders the BookmarksContext.Provider component, passing the value object as the value prop and rendering any child components that are wrapped by this provider. This allows those child components to access the bookmarks context and manage bookmarks as needed.
  return (
    <BookmarksContext.Provider value={value}>
      {children}
    </BookmarksContext.Provider>
  );
}
// The BookmarksContextProvider component is exported as the default export of this module, allowing it to be imported and used in other parts of the application to wrap components that need access to the bookmarks context.
export default BookmarksContextProvider;
