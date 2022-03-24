from flask import Flask, json, request
from flask_cors import CORS
import logging

logging.basicConfig(level=logging.DEBUG,
                    format='%(asctime)s %(levelname)s %(name)s %(threadName)s : %(message)s')

# This is the flask end point that processes requests from the front end.
def create_app():
    app = Flask(__name__)
    app.config['JSONIFY_PRETTYPRINT_REGULAR'] = False
    CORS(app)

    @app.route('/placeOrder', methods=['POST'])
    def placeOrder():
        print('hello')
    return app

app = create_app()
if __name__ == '__main__':
    app.run(debug=True)
