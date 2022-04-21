""" Routes """
from flask import render_template
from healthyplanet import app


@app.route("/")
def index():
    """ Basic route """
    return render_template("index.html")
