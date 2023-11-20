This application is for a company that provides car rental services in Ukraine. The application consists of 3 pages:
• home page with a general description of the services provided by the company. Stylization and design at your discretion.
• a page containing a catalog of cars of various configurations, which the user can filter by brand, price per hour of car rental and the number of kilometers covered by the car during its operation (mileage).
• a page with ads that have been added by the user to favorites. The appearance of the program should consist of navigation (design at your discretion) and a viewing area.

1. Car rental announcement card.
2. On the first page of the catalog, 12 ads will be rendered, and the rest of them - by clicking on the Load more button.
3. If you click on the button in the form of a "heart" on the ad card, it should be added to the list of favorites, and the color of the button should change.
4. When updating the page, the final result of the user's actions is recorded. That is, if you add an ad to your favorites and refresh the page, the button still remains in the "favorite ad" state with the appropriate color.
5. If you click the heart button again, the ad will be removed from the list of favorites, and the color of the button will change to its original state.

6. If you click on the Learn more button, a modal window opens with detailed information about the car and its rental conditions. 7. The modal window is closed by clicking on the button in the form of a "cross", by clicking on the backdrop or pressing the Esc key. 8. In the code, the mileage of the car is written by one value (for example, 4500). In the UI - displayed with a comma (4,500). 9. The Rental car button is a link that will allow the user to connect with the company by phone number +380730000000. 10. filtering. dropdown with car brands makes.json - shows ads with cars of the corresponding brand

The application has the following routes: "/" - the home page with a general description of the services provided by the company "/catalog" - a page containing a catalog of cars of various configurations "/favorites" - a page with ads that have been added by the user to favorites If the user entered by a route that does not exist, it must be redirected to the home page.
To work with a list of ads, there is a personal backend for development using the UI service https://mockapi.io/. There is an adverts resource. Object of the announcement:
Advert with the following fields: id, year, make, model, type, img, description, fuelConsumption, engineSize, accessories, functionalities, rentalPrice, rentalCompany, address, rentalConditions, mileage
