# Smart_heaters_MERN

Smart_Heaters_MERN MERN application for manipulating "smart-heaters"

TASK:

General

Imagine we are a company that sells “smart heaters”. When we sell a heater to a client, we enter it into our application. That heater is connected to WiFi and sends us data about temperature readings in the client’s office every now and then. We need to build a small application that can receive these readings and manipulate the heaters. We need to see all the heaters that we sold, add new heaters we sell, edit any existing heaters (e.g. company moves so we change the address) and for each heater see the history of its readings.

Task

Develop a .NET REST API system that accommodates the application, with the database where the data is stored

Develop a small Angular application that manipulates heaters and displays data

A heater just has a client name and an address (e.g. we sold this heater to Intellegens j.d.o.o. at Martićeva 42, 10000, Zagreb). Client name and address can just be string fields.

A reading that the heater sends has a timestamp and a temperature in °C (on 2020-11-20 at 10:30:56 the temperature was 23.5 °C

Angular app needs to o Display all heaters in the database. Each heater can be edited and deleted. o Have the option to add a new heater o Have the option to “view” any heater ▪ This shows the client and the address of a heater ▪ This shows all the readings from this heater ▪ This shows a graph of temperature over time for this heater

There needs to be an API method where, by using an API client (like cUrl or Postman) I can add readings (as if I were the smart heater )

Notes

You can ask as many questions as you want. If you do not ask questions, be prepared to provide arguments for your choices.

No authentication necessary

You will not be marked on how the UI looks. Saying that, please try and keep it tidy and clean. Use of existing CSS frameworks or toolsets is allowed, but not mandatory.

Try to make your code clean, well structured, and maintainable.
