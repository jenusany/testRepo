from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def process():
    return jsonify({"IT": "WORKS"})


if __name__ == '__main__':
    app.run(debug=True)
