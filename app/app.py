from flask import Flask, render_template, request, redirect, jsonify


app = Flask(__name__)


txt = "Har du nogen sinde spildt vand?"

@app.route('/')
def home():

    return render_template('index.html')



@app.route('/page/')
def page():
    
    return render_template('template.html', item=txt)

@app.route('/update_txt', methods=['POST'])
def update_txt():
    global txt
    data = request.json
    if 'new_txt' in data:
        txt = data['new_txt']
        return jsonify({"message": "Text updated successfully", "new_txt": txt}), 200
    return jsonify({"error": "Invalid request"}), 400

if __name__ == '__main__':
    app.debug = True

    app.run(host='0.0.0.0', port=5000)
