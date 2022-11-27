from flask import Flask, redirect, url_for, render_template

app = Flask(__name__)
app.secret_key = "let me in"

@app.route("/") # Path
def tracker(): # Optional argument passing
    return render_template("index.html")

if __name__ == "__main__":
    app.run(debug="True")
