# SitUp

## Overview
SitUp is a desk booking system designed to help organizations manage their workspace efficiently. With SitUp, employees can easily book desks, meeting rooms, and other resources, ensuring a smooth and organized work environment.

## Features
- **Desk Booking**: Reserve desks in advance to ensure availability.
- **Meeting Room Booking**: Schedule and manage meeting room reservations.
- **User Management**: Administer user roles and permissions.
- **Notifications**: Receive email or SMS notifications for bookings and cancellations.
- **Analytics**: Track usage and generate reports to optimize workspace utilization.

## Installation
To install SitUp, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/situp.git
    ```
2. Navigate to the project directory:
    ```bash
    cd situp
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```
4. Start the application:
    ```bash
    npm start
    ```

## Usage
1. Open your web browser and navigate to `http://localhost:5000`.
2. Sign up for a new account or log in with your existing credentials.
3. Start booking desks and meeting rooms as needed.

## Contributing
We welcome contributions to SitUp! To contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch:
    ```bash
    git checkout -b feature-branch
    ```
3. Make your changes and commit them:
    ```bash
    git commit -m "Description of your changes"
    ```
4. Push to the branch:
    ```bash
    git push origin feature-branch
    ```
5. Create a pull request.

## License
SitUp is licensed under the [MIT License](LICENSE).

## Contact

For any questions or support, please contact us at support@situp.com.
COME LA DOBBIAMO USARE ADESSO IN LOCALE SENZA DOCKER (finchè non c`è l'autoreload)
REQUISITI:
- avere npm
- python
- docker
- postgres (running)
- venv

`pushd js`
`npm ci`
`npm run build`
`popd`

`cd warp`
create venv
`source .venv/bin/activate`
`cd ..`
`pip install requirements.txt`
`start.sh`
