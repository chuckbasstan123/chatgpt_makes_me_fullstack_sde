from app import create_app
from flask_cors import CORS

app = create_app()

# Enable CORS for all routes and origins
CORS(app)

# Or, enable CORS for specific routes and origins
# cors = CORS(app, resources={r"/api/*": {"origins": "http://localhost:3000"}})

# Your API routes and other configurations here

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
