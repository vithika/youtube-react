Youtube project in React

### youtube home page
<img width="1440" alt="Screenshot 2024-10-15 at 12 26 23 PM" src="https://github.com/user-attachments/assets/6753b249-dcab-4d56-a249-4c8d55ed6a1b">

### search suggestions

<img width="1440" alt="Screenshot 2024-10-15 at 12 26 30 PM" src="https://github.com/user-attachments/assets/64cb8b45-6266-42c2-9f9c-e583c2ca4365">

### Watch page and live chats.

<img width="1440" alt="Screenshot 2024-10-15 at 12 26 39 PM" src="https://github.com/user-attachments/assets/3b517a5c-bd24-4536-a5f5-d6fc2cf55ef6">

### comments
<img width="1440" alt="Screenshot 2024-10-15 at 12 27 01 PM" src="https://github.com/user-attachments/assets/59fe8d6a-7d4b-41b6-b1c3-683fd7b0eb71">





Debouncing:

typing slow:200ms
typing fast: 150 ms

Performance:

- iphone pro max = 14 letter \*1000 = 14000 api calls.
- with debouncing = 3 API calls \*1000 = 300 api calls.

Debouncing with 200ms

- if difference between 2 key strokes is <200ms ,decline the api call.
- > 200ms make an API call.


### Tackling Challenges in Live Chat App Development

**What Are the Key Challenges?**

1. **Real-Time Data Retrieval**: Capturing live data poses a major hurdle for the data layer.
   
2. **Dynamic UI Updates**: Keeping the user interface fresh and responsive is a constant challenge.

3. **Live Data Management**: Managing and updating live data in real time requires precision.

**Two Powerful Strategies for Handling Live Data:**

A) **WebSockets**  
WebSockets create a seamless, two-way connection between the server and the UI, enabling instant data exchange without delays. Once connected, the flow of information is continuous and dynamic.  
*Think of trading platforms like Zerodha or messaging giants like WhatsApp—where speed is everything!*

B) **API Polling**  
In this approach, the UI sends periodic requests to the server, receiving data in a one-way flow. It’s straightforward but relies on set intervals for updates.  
*Ideal for applications like Gmail or Cricbuzz, where timely information matters!*

By mastering these challenges and techniques, you can create engaging and responsive live chat applications



