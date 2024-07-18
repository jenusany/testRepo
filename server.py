from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/process', methods=['POST'])
def process_data():
    data = request.json
    # Perform your operations on the data here
    processed_data = data_processing_function(data)
    return jsonify(processed_data)

def data_processing_function(data):
    # Example processing: modify the data in some way
    data['processed'] = "test"
    return data

if __name__ == '__main__':
    app.run(debug=True)
